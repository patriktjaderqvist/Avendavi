# Hetzner self-hosting notes

This is the operator manual for running the Avendavi site on a Hetzner VPS
behind the shared Caddy reverse proxy. It assumes Docker + Compose v2 and a
pre-existing external Docker network named `web` that Caddy is already
attached to.

## Stack

| Layer       | Choice                                                  |
| ----------- | ------------------------------------------------------- |
| Framework   | Vite 6 + React 19 (pure SPA — no SSR, no API routes)    |
| Styling     | Tailwind CSS 4 (`@tailwindcss/vite`)                    |
| Animation   | framer-motion 12                                        |
| Build       | `npm run build` → static files in `dist/`               |
| Runtime     | nginx-unprivileged 1.27-alpine, listening on **:8080**  |
| Node build  | node 22.11.0-alpine (multi-stage builder image only)    |

There is no database, no server-side code, and no runtime env requirement.
Everything ships as static assets.

## Target domain

**`avendavi.com`** — sourced from `index.html` (`og:url`, Plausible
`data-domain`). Configure Caddy to forward this Host to the `avendavi`
container on port 8080. Add `www.avendavi.com` if you want the apex/www
redirect to live in Caddy.

## Files produced by this migration

| File                | Purpose                                                              |
| ------------------- | -------------------------------------------------------------------- |
| `Dockerfile`        | Multi-stage build: node-alpine builder → nginx-unprivileged runner.  |
| `nginx.conf`        | SPA routing, gzip, long-cache for hashed assets, no-cache for HTML.  |
| `.dockerignore`     | Keeps `node_modules`, `dist`, `.git`, env files etc. out of the image. |
| `docker-compose.yml`| Joins external `web` network, no host port published, restart policy.|
| `.env.example`      | Documents the (currently empty) env contract + reverse-proxy hints.  |
| `.gitignore`        | Updated to ignore `.env.local`, `.env.production`, `.vercel`, etc.   |

## Required env vars

The current source tree references **none**. `.env` on the server can be
empty or absent and the site will run. Placeholders in `.env.example`
exist only for legacy `VITE_ADMIN_HASH` / `VITE_WEB3FORMS_KEY` features
(commented out — re-enable if you bring back the admin login / contact form).

> ⚠️ `VITE_*` variables are inlined at *build time*. If you set one in
> `.env`, the container will not pick it up. Pass it via Docker build args
> instead and add an `ARG VITE_FOO` to the Dockerfile.

## Vercel-specific behaviour that had to be adapted

| Vercel feature             | Replacement                                              |
| -------------------------- | -------------------------------------------------------- |
| `rewrites: /(.*) → /`      | `try_files $uri $uri/ /index.html;` in `nginx.conf`.     |
| Automatic CDN / caching    | `Cache-Control` headers per file type in `nginx.conf`.   |
| Vercel-hosted DNS / TLS    | Caddy handles TLS; point `avendavi.com` A/AAAA at Hetzner. |
| Plausible script           | Unchanged — still loaded from `plausible.io`.            |
| Image Optimization / ISR / Edge functions | Not used by this project — no adaptation needed. |

Nothing in the codebase requires Vercel-only primitives.

## Server-side deploy

First-time setup (on the VPS, as the deploy user):

```bash
# 1. Ensure the shared `web` network exists (run once per host, by whoever
#    set up Caddy; included here for reference).
docker network ls | grep -q '^.*web' || docker network create web

# 2. Clone the repo into a stable location.
sudo mkdir -p /srv/avendavi && sudo chown $USER:$USER /srv/avendavi
git clone https://github.com/patriktjaderqvist/Avendavi.git /srv/avendavi
cd /srv/avendavi

# 3. Provide a `.env` (can be empty, but Compose's env_file expects the file
#    to exist).
cp .env.example .env

# 4. Build and start.
docker compose up -d --build
```

Updates after a `git push`:

```bash
cd /srv/avendavi
git pull --ff-only
docker compose up -d --build
docker image prune -f   # optional, reclaims old layers
```

Logs / status:

```bash
docker compose logs -f --tail=100
docker compose ps
```

## Caddy snippet (for whoever maintains the proxy)

If your shared Caddy uses a hand-edited `Caddyfile`, add a block like:

```caddy
avendavi.com, www.avendavi.com {
    encode zstd gzip
    reverse_proxy avendavi:8080
}
```

If your Caddy is the `caddy-docker-proxy` flavour that reads container
labels, add the equivalent labels to the `web` service in
`docker-compose.yml`:

```yaml
    labels:
      caddy: avendavi.com, www.avendavi.com
      caddy.reverse_proxy: "{{upstreams 8080}}"
```

Either approach is fine — keeping it out of this repo means the same
deploy works regardless of how Caddy is configured.

## Post-migration checks

- [ ] `curl -I https://avendavi.com/` returns 200 with `Cache-Control: no-cache, no-store, must-revalidate` on `index.html`.
- [ ] `curl -I https://avendavi.com/assets/<hashed-file>.js` returns
      `Cache-Control: public, immutable`.
- [ ] Deep-link refresh: `https://avendavi.com/anything` should serve the
      SPA shell, not 404.
- [ ] LinkedIn / X post inspectors pick up the updated `og-image.png`.
- [ ] DNS A/AAAA for `avendavi.com` and `www.avendavi.com` point at the
      Hetzner VPS.
- [ ] Vercel project disconnected / domain detached so the registrar
      isn't routing TLS at the old host.

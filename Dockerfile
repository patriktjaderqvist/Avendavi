# syntax=docker/dockerfile:1.7
# ---- Builder ---------------------------------------------------------------
# Pinned to match the Node version the project is developed with (>=20.19 for
# Vite 6) and the npm lockfileVersion 3 that's checked in.
FROM node:22.11.0-alpine AS builder

WORKDIR /app

# Install dependencies first so the layer caches when only source changes.
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Copy the rest of the source and build the static SPA.
COPY . .
RUN npm run build

# Strip dev dependencies — the runner stage only needs the compiled output,
# but keeping this step makes it obvious that no dev deps reach production.
RUN npm prune --omit=dev


# ---- Runner ----------------------------------------------------------------
# nginx-unprivileged runs as uid 101 (nginx) by default and listens on 8080,
# so we don't have to bind any privileged ports.
FROM nginxinc/nginx-unprivileged:1.27-alpine AS runner

# Drop the default site config and replace with the SPA-aware one.
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf

# Static build output owned by the unprivileged user.
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/ >/dev/null 2>&1 || exit 1

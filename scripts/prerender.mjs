// Build-time prerendering: renders every sitemap route to static HTML with
// per-route <title>, description, canonical, and og/twitter tags.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PROJECTS } from '../src/data/projects.js'
import { render } from '../dist/server/entry-server.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ORIGIN = 'https://avendavi.com'

const esc = (s) => s
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')

// Fit a description into ~160 chars: whole sentences if possible, otherwise
// cut at a word boundary.
const clip = (text) => {
  if (text.length <= 160) return text
  let out = ''
  for (const s of text.match(/[^.!?]*[.!?]+/g) || []) {
    if ((out + s).trim().length > 160) break
    out += s
  }
  out = out.trim()
  return out || text.slice(0, 157).replace(/\s+\S*$/, '') + '…'
}

// All metadata in one place. `/` keeps the head already in index.html — that
// template is the homepage head — so it only gets its body prerendered.
const META = [
  { route: '/' },
  { route: '/story', title: 'The Avendavi Story | A House of One',
    description: 'A practice for finding what can be better, then building it. The name, the person, and the approach behind Avendavi — one mind, one standard.' },
  { route: '/services', title: 'Services | What Avendavi Does',
    description: 'Seven engagements, from sales and GTM consulting to custom builds and AI integration. The right shape comes out of the first conversation.' },
  { route: '/process', title: 'The Avendavi Process | A Method, Not a Methodology',
    description: 'Listen, diagnose, build — three movements, repeated until the answer is obvious. How Avendavi runs every engagement, without decks or frameworks.' },
  { route: '/work', title: 'Work | Avendavi Ventures',
    description: 'Products built from the ground up. EasyKVM and Tradeshot are on sale now, with DLetter and Proprinse next. All under the Avendavi umbrella.' },
  { route: '/experience', title: 'Experience | Avendavi Client Work',
    description: 'Work done for clients who needed a sharper eye on their product, process, or strategy. Some outcomes are public, most are not.' },
  { route: '/academic', title: 'Academic Work | Avendavi Foundations',
    description: 'Early work from the Nackademin years — including Liatch, a three-sided marketplace pairing Swedish vocational students, schools, and companies.' },
  { route: '/connect', title: 'Connect | Book a Call with Avendavi',
    description: 'Working together starts with a thirty-minute call — no agenda, enough to see whether the fit is right. Book a call or write directly to Patrik Tjäderqvist.' },
  ...PROJECTS.map(p => ({
    route: `/work/${p.slug}`,
    title: `${p.title} | Avendavi Work`,
    description: clip(p.short),
  })),
]

// Replace exactly one occurrence, or fail the build loudly.
const sub = (html, re, replacement, what, route) => {
  if (!re.test(html)) throw new Error(`prerender: no match for ${what} on ${route}`)
  return html.replace(re, () => replacement)
}

const template = await readFile(join(dist, 'index.html'), 'utf8')

for (const { route, title, description } of META) {
  let page = template
  if (title) {
    const url = ORIGIN + route
    page = sub(page, /<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`, 'title', route)
    page = sub(page, /<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${esc(description)}" />`, 'description', route)
    page = sub(page, /<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${url}" />`, 'canonical', route)
    page = sub(page, /<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${esc(title)}" />`, 'og:title', route)
    page = sub(page, /<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${esc(description)}" />`, 'og:description', route)
    page = sub(page, /<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${url}" />`, 'og:url', route)
    page = sub(page, /<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${esc(title)}" />`, 'twitter:title', route)
    page = sub(page, /<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${esc(description)}" />`, 'twitter:description', route)
  }
  const body = render(route)
  page = sub(page, /<div id="root"><\/div>/, `<div id="root" data-ssr-path="${route}">${body}</div>`, 'root div', route)

  const outDir = route === '/' ? dist : join(dist, ...route.slice(1).split('/'))
  await mkdir(outDir, { recursive: true })
  await writeFile(join(outDir, 'index.html'), page)
  console.log(`prerendered ${route}`)
}

// The SSR bundle must not ship with the site.
await rm(join(dist, 'server'), { recursive: true, force: true })
console.log(`prerendered ${META.length} routes, removed dist/server`)

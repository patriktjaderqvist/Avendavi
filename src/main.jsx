import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

const container = document.getElementById('root')
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// Prerendered documents carry the path they were rendered for. Hydrate only
// when it matches the current path — otherwise (dev server, or the SPA
// fallback serving the "/" document for an unknown path) render from scratch.
const { pathname } = window.location
const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
if (container.getAttribute('data-ssr-path') === normalized) {
  hydrateRoot(container, app)
} else {
  container.replaceChildren()
  createRoot(container).render(app)
}

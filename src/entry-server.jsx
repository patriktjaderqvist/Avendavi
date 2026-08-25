import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'

export function render(location) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={location}>
        <App />
      </StaticRouter>
    </StrictMode>
  )
}

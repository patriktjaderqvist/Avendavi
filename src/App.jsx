import { useCallback, useRef } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import FolderLanding from './components/FolderLanding'
import {
  StoryTab,
  ServicesTab,
  ProcessTab,
  WorkTab,
  ConnectTab,
  ProjectDetail,
  NotFoundTab,
} from './components/Sections'
import { PROJECTS } from './data/projects'

const TABS = [
  { id: 'story', label: 'Story', path: '/story' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'process', label: 'Process', path: '/process' },
  { id: 'ventures', label: 'Work', path: '/work' },
  { id: 'consulting', label: 'Experience', path: '/experience' },
  { id: 'academic', label: 'Academic', path: '/academic' },
  { id: 'connect', label: 'Connect', path: '/connect' },
]

const SHOW_FOLDER = true
const SHOW_WATERMARK = true
const SHOW_GRAIN = true

export default function App() {
  const { pathname, state } = useLocation()
  const navigate = useNavigate()
  const tabRefs = useRef([])

  const handleOpen = useCallback(() => navigate('/story'), [navigate])
  const handleClose = useCallback(() => navigate('/'), [navigate])
  const goConnect = useCallback(() => navigate('/connect'), [navigate])
  const closeProject = useCallback(() => navigate(state?.from || '/work', { replace: true }), [navigate, state])

  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  const slug = path.startsWith('/work/') ? path.slice(6) : ''
  const openProject = slug ? PROJECTS.find(p => p.slug === slug) : null
  const matched = TABS.find(t => t.path === path)
  const landing = SHOW_FOLDER && pathname === '/'
  const tab = matched ? matched.id : (openProject ? 'ventures' : null)
  const notFound = !landing && !tab

  const onTabKeyDown = useCallback((e) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(e.key)) return
    e.preventDefault()
    const from = TABS.findIndex(t => t.id === tab)
    let next
    if (e.key === 'Home') {
      next = 0
    } else if (e.key === 'End') {
      next = TABS.length - 1
    } else if (from === -1) {
      next = e.key === 'ArrowRight' ? 0 : TABS.length - 1
    } else {
      const step = e.key === 'ArrowRight' ? 1 : -1
      next = (from + step + TABS.length) % TABS.length
    }
    navigate(TABS[next].path)
    tabRefs.current[next]?.focus()
  }, [tab, navigate])

  if (slug && !openProject) return <Navigate to="/work" replace />

  const focusable = tab || TABS[0].id
  const panel = (id) => ({
    id: `panel-${id}`,
    role: 'tabpanel',
    'aria-labelledby': `tab-${id}`,
    hidden: tab !== id,
  })

  return (
    <div
      className={`paper-warm ${SHOW_GRAIN ? 'grain' : ''}`}
      style={{ minHeight: '100dvh' }}
    >
      <a className="skip-link" href="#main">Skip to content</a>

      {landing && <FolderLanding onOpen={handleOpen} />}

      <div className="gallery" hidden={landing}>
        <div className="gallery-paper-frame">
          <div className="gallery-paper theme-paper">
            <nav className="tabs" aria-label="Sections">
              <div className="tab-row" role="tablist" aria-label="Sections" onKeyDown={onTabKeyDown}>
                {TABS.map((t, i) => (
                  <button
                    key={t.id}
                    ref={el => { tabRefs.current[i] = el }}
                    type="button"
                    id={`tab-${t.id}`}
                    role="tab"
                    aria-selected={tab === t.id}
                    aria-controls={`panel-${t.id}`}
                    tabIndex={focusable === t.id ? 0 : -1}
                    className={`tab ${tab === t.id ? 'active' : ''}`}
                    onClick={() => navigate(t.path)}
                  >{t.label}</button>
                ))}
              </div>
              {SHOW_FOLDER && (
                <button type="button" className="tab-close" onClick={handleClose}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                  Close
                </button>
              )}
            </nav>

            <main id="main" tabIndex={-1}>
              <section {...panel('story')}>
                {SHOW_WATERMARK
                  ? <StoryTab />
                  : <div className="no-mark"><StoryTab /></div>}
              </section>
              <section {...panel('services')}>
                <ServicesTab onGoConnect={goConnect} />
              </section>
              <section {...panel('process')}>
                <ProcessTab />
              </section>
              <section {...panel('ventures')}>
                <WorkTab category="ventures" />
              </section>
              <section {...panel('consulting')}>
                <WorkTab category="consulting" />
              </section>
              <section {...panel('academic')}>
                <WorkTab category="academic" />
              </section>
              <section {...panel('connect')}>
                <ConnectTab />
              </section>
              {notFound && <NotFoundTab />}
            </main>
          </div>
        </div>
      </div>

      <ProjectDetail project={openProject} onClose={closeProject} />
    </div>
  )
}

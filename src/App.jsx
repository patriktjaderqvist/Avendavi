import { useState, useEffect, useCallback } from 'react'
import FolderLanding from './components/FolderLanding'
import {
  StoryTab,
  ServicesTab,
  ProcessTab,
  WorkTab,
  ConnectTab,
  ProjectDetail,
} from './components/Sections'

const TABS = [
  { id: 'story', label: 'Story' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'ventures', label: 'Work' },
  { id: 'consulting', label: 'Consulting' },
  { id: 'academic', label: 'Academic' },
  { id: 'connect', label: 'Connect' },
]

const SHOW_FOLDER = true
const SHOW_WATERMARK = true
const SHOW_GRAIN = true

export default function App() {
  const [state, setState] = useState(SHOW_FOLDER ? 'closed' : 'open')
  const [tab, setTab] = useState('story')
  const [openProject, setOpenProject] = useState(null)

  const handleOpen = useCallback(() => setState('open'), [])
  const handleClose = useCallback(() => {
    if (!SHOW_FOLDER) return
    setState('closed')
  }, [])

  const goConnect = useCallback(() => setTab('connect'), [])

  return (
    <div
      className={`paper-warm ${SHOW_GRAIN ? 'grain' : ''}`}
      style={{ minHeight: '100dvh' }}
    >
      {SHOW_FOLDER && state === 'closed' && (
        <FolderLanding onOpen={handleOpen} />
      )}

      {state === 'open' && (
        <div className="gallery">
          <div className="gallery-paper-frame">
            <div className="gallery-paper theme-paper">
              <div className="tabs">
                <div className="tab-row">
                  {TABS.map(t => (
                    <button
                      key={t.id}
                      className={`tab ${tab === t.id ? 'active' : ''}`}
                      onClick={() => setTab(t.id)}
                    >{t.label}</button>
                  ))}
                </div>
                {SHOW_FOLDER && (
                  <button className="tab-close" onClick={handleClose}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    Close
                  </button>
                )}
              </div>

              {tab === 'story' && (SHOW_WATERMARK
                ? <StoryTab />
                : <div className="no-mark"><StoryTab /></div>)}
              {tab === 'services' && <ServicesTab onGoConnect={goConnect} />}
              {tab === 'process' && <ProcessTab />}
              {tab === 'ventures' && <WorkTab category="ventures" onOpenProject={setOpenProject} />}
              {tab === 'consulting' && <WorkTab category="consulting" onOpenProject={setOpenProject} />}
              {tab === 'academic' && <WorkTab category="academic" onOpenProject={setOpenProject} />}
              {tab === 'connect' && <ConnectTab />}
            </div>
          </div>
        </div>
      )}

      <ProjectDetail project={openProject} onClose={() => setOpenProject(null)} />
    </div>
  )
}

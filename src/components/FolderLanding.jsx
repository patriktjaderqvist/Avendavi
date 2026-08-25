import { useState, useEffect, useRef, useCallback } from 'react'

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const isTouchDevice = () => window.matchMedia('(hover: none)').matches

export default function FolderLanding({ onOpen }) {
  const [opening, setOpening] = useState(false)
  const [touch, setTouch] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setTouch(isTouchDevice())
  }, [])
  const dragRot = useRef({ x: 0, y: 0 })
  const isDragging = useRef(false)
  const lastPointer = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (reducedMotion()) return
    const onMove = (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1
      const ny = -(e.clientY / window.innerHeight) * 2 + 1
      const clamp = (v, min, max) => Math.min(Math.max(v, min), max)
      if (isDragging.current) {
        const dx = nx - lastPointer.current.x
        const dy = ny - lastPointer.current.y
        dragRot.current.x = clamp(dragRot.current.x + dy * 40, -45, 45)
        dragRot.current.y = clamp(dragRot.current.y + dx * 40, -55, 55)
        setRotation({ x: dragRot.current.x, y: dragRot.current.y })
      } else {
        setRotation({ x: ny * -4, y: nx * 6 })
      }
      lastPointer.current = { x: nx, y: ny }
    }
    const onDown = () => { isDragging.current = true; dragRot.current = { ...rotation } }
    const onUp = () => { isDragging.current = false }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
    }
  }, [rotation])

  const handleClick = useCallback(() => {
    if (opening) return
    setOpening(true)
    setTimeout(() => onOpen(), reducedMotion() ? 0 : 750)
  }, [opening, onOpen])

  return (
    <div className="landing">
      <div className="landing-wordmark"><span>Avendavi</span></div>

      <div className="folder-perspective">
        <div
          className="folder-scene"
          style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
        >
          <div className="folder-float">
            <button
              type="button"
              aria-label="Open Avendavi"
              className="folder-body"
              onClick={handleClick}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="folder-shadow" />
              <div className="folder-panel folder-back leather-surface" />
              <div className="folder-tab leather-surface" />
              <div className="folder-panel folder-inner" />
              <div className="folder-paper folder-paper-front" />
              <div className={`folder-strap ${opening ? 'open' : ''}`} />
              <div className={`folder-panel folder-front leather-surface ${opening ? 'open' : ''}`} />
              <SilverBuckle isOpen={opening} />
            </button>
          </div>
        </div>
      </div>

      <div className="hint">{touch ? 'Tap to open' : 'Click to open · Drag to explore'}</div>
    </div>
  )
}

function SilverBuckle({ isOpen }) {
  return (
    <svg
      className={`folder-buckle ${isOpen ? 'open' : ''}`}
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="buckleMetal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4f6f9" />
          <stop offset="0.25" stopColor="#c8cdd3" />
          <stop offset="0.5" stopColor="#7e838b" />
          <stop offset="0.75" stopColor="#acb1b9" />
          <stop offset="1" stopColor="#3d4046" />
        </linearGradient>
      </defs>
      <text
        x="19" y="30"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight="700"
        fontSize="36"
        fill="url(#buckleMetal)"
        stroke="rgba(0,0,0,0.35)"
        strokeWidth="0.4"
        transform="rotate(180 19 19)"
      >A</text>
    </svg>
  )
}

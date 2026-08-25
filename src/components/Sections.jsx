import { Fragment, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PROJECTS, SERVICES, PROCESS } from '../data/projects'

/* ─────────────  STORY  ───────────── */
export function StoryTab() {
  return (
    <div className="page-fade" style={{ position: 'relative' }}>
      <div className="watermark-A"><span className="watermark-glyph" /></div>

      <div className="story-masthead">
        <div className="masthead-rule">
          <span className="masthead-eyebrow">A house of one</span>
        </div>
        <h1 className="masthead-title">Avendavi</h1>
        <div className="masthead-pron"><em>a</em>&middot;<em>vend</em>&middot;<em>a</em>&middot;<em>vi</em></div>
        <div className="masthead-rule masthead-rule-bottom" />
      </div>

      <div className="story-lede">
        <p>
          A practice for finding what can be <em>better</em>,<br/>
          then building it.
        </p>
      </div>

      <div className="story-article">
        <article className="story-essay">
          <div className="chapter-mark">
            <span className="chapter-num">I</span>
            <span className="chapter-name">The Name</span>
          </div>
          <p className="story-dropcap">
            <em>Vendere</em> — to sell. <em>Avis</em> — bird. Run together, the two roots become Avendavi —
            a name that lands in two places at once. A career built in sales, and a surname,
            <em> Tjäderqvist</em>, that already carries a bird inside it: <em>tjäder</em>, the capercaillie,
            a forest grouse native to the Nordics. The bird was there before the brand was.
          </p>

          <div className="chapter-mark">
            <span className="chapter-num">II</span>
            <span className="chapter-name">The Person</span>
          </div>
          <p>
            Avendavi is one person. Every venture, every engagement, every product carries the same mind
            and the same standard. There is no team page because there is no distance between the brand
            and the person behind it.
          </p>
          <p>
            The foundation is sales — years of cold calls, objections, and closing taught what no
            classroom can. How to <em>listen</em> past what people say to what they actually need.
            That gap is where real value lives, and it is the lens through which every problem gets solved.
          </p>

          <div className="chapter-mark">
            <span className="chapter-num">III</span>
            <span className="chapter-name">The Approach</span>
          </div>
          <p>
            Most problems hide in plain sight. A workflow everyone tolerates. A product that almost
            works. A process that exists because nobody questioned it. Avendavi steps in where others
            see normal, and finds what can be <em>better</em>.
          </p>
          <p>
            Consulting and product development under one roof. Client work is informed by the discipline
            of building real products. Ventures are shaped by the clarity that comes from solving other
            people&rsquo;s problems first. The two sharpen each other.
          </p>
        </article>
      </div>

      <div className="story-toolbox-wrap">
        <div className="chapter-mark chapter-mark-center">
          <span className="chapter-num">IV</span>
          <span className="chapter-name">Inventory</span>
        </div>
        <div className="toolbox-columns">
          <div className="tool-col">
            <div className="tool-col-head">Commerce</div>
            <ul>
              <li>Sales &amp; Account Management</li>
              <li>Business Development</li>
              <li>Consulting</li>
              <li>Investor Relations</li>
            </ul>
          </div>
          <div className="tool-col">
            <div className="tool-col-head">Craft</div>
            <ul>
              <li>Python</li>
              <li>Full-Stack Development</li>
              <li>Agentic Coding</li>
              <li>AI / ML</li>
              <li>React &middot; Node.js</li>
              <li>PostgreSQL &middot; REST APIs</li>
            </ul>
          </div>
          <div className="tool-col">
            <div className="tool-col-head">Capital</div>
            <ul>
              <li>Entrepreneurship</li>
              <li>CRM Systems</li>
              <li>Crypto &amp; Trading</li>
              <li>Nordic Networks</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 'clamp(60px, 8vw, 100px)', display: 'flex', justifyContent: 'center' }}>
        <Link to="/connect" className="cta">
          Continue the conversation
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </div>
  )
}

/* ─────────────  SERVICES  ───────────── */
export function ServicesTab({ onGoConnect }) {
  return (
    <div className="page-fade">
      <div className="section section-narrow">
        <div className="section-eyebrow-row">
          <span className="num">§ Practice</span>
          <span className="line" />
          <span className="eyebrow">Seven engagements</span>
        </div>
        <h2 className="display" style={{ fontSize: 'clamp(2.4rem, 5.4vw, 4.4rem)', marginBottom: 'clamp(28px, 4vw, 56px)' }}>
          What Avendavi <em className="display-italic">does</em>.
        </h2>
        <p className="body-text" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', maxWidth: 560, marginBottom: 'clamp(60px, 8vw, 100px)' }}>
          Engagements range from a single call to a built-and-shipped product.
          The right shape comes out of the first conversation.
        </p>

        <div className="services-list">
          {SERVICES.map((s) => (
            <div key={s.num} className="service-row">
              <div className="num">{s.num}.</div>
              <div>
                <div className="title">{s.title}</div>
                <div className="description">{s.desc}</div>
              </div>
              <div className="marker">{s.marker}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'clamp(60px, 8vw, 100px)', display: 'flex', justifyContent: 'center' }}>
          <a href="#connect" className="cta" onClick={(e) => { e.preventDefault(); onGoConnect?.() }}>
            Begin a conversation
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
  )
}

/* ─────────────  PROCESS  ───────────── */
export function ProcessTab() {
  return (
    <div className="page-fade">
      <div className="section">
        <div className="section-eyebrow-row">
          <span className="num">§ Method</span>
          <span className="line" />
          <span className="eyebrow">Three movements</span>
        </div>
        <h2 className="display" style={{ fontSize: 'clamp(2.4rem, 5.4vw, 4.4rem)', marginBottom: 'clamp(28px, 4vw, 56px)', maxWidth: '14ch' }}>
          A method, not a <em className="display-italic">methodology</em>.
        </h2>
        <p className="body-text" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', maxWidth: 560, marginBottom: 'clamp(60px, 8vw, 120px)' }}>
          Decks and frameworks tend to flatter the consultant. Avendavi uses three movements,
          repeated until the answer is obvious.
        </p>

        <div className="process">
          {PROCESS.map(p => (
            <div key={p.num} className="process-step">
              <div className="num">{p.num}.</div>
              <h3>{p.title}.</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'clamp(60px, 8vw, 100px)', display: 'flex', justifyContent: 'center' }}>
          <Link to="/connect" className="cta">
            Talk through the method
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

/* ─────────────  WORK  ───────────── */
export function WorkTab({ category }) {
  const { pathname } = useLocation()
  const list = PROJECTS.filter(p => p.category === category)
  const intros = {
    ventures: { sec: '§ Portfolio', eyebrow: 'Built from zero', heading: 'Our ventures.', body: 'Products built from the ground up. Each with its own brand, its own audience, all under the Avendavi umbrella.', cta: 'Ask about a venture' },
    consulting: { sec: '§ Engagements', eyebrow: 'Selected work', heading: 'Experience.', body: 'Work done for clients who needed a sharper eye on their product, process, or strategy. Some outcomes are public, most are not.', cta: 'Discuss an engagement' },
    academic: { sec: '§ Foundations', eyebrow: 'Earlier work', heading: 'Academic.', body: 'Early work from the Nackademin years. The foundations.', cta: 'Ask about the foundations' }
  }
  const intro = intros[category]

  return (
    <div className="page-fade">
      <div className="section">
        <div className="section-eyebrow-row">
          <span className="num">{intro.sec}</span>
          <span className="line" />
          <span className="eyebrow">{intro.eyebrow}</span>
        </div>
        <h2 className="display" style={{ fontSize: 'clamp(2.4rem, 5.4vw, 4.4rem)', marginBottom: 'clamp(20px, 3vw, 36px)' }}>
          {intro.heading}
        </h2>
        <p className="body-text" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', maxWidth: 560, marginBottom: 'clamp(60px, 8vw, 100px)' }}>
          {intro.body}
        </p>

        {list.length === 0 ? (
          <p className="body-text" style={{ textAlign: 'center', padding: '80px 0' }}>Coming soon.</p>
        ) : (
          <div className="work-index">
            {list.map((p, i) => (
              <Link
                key={p.id}
                to={`/work/${p.slug}`}
                state={{ from: pathname }}
                className="index-row"
              >
                <div className="idx-head">
                  <span className="idx-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="idx-title">{p.title}</span>
                  <span className="idx-role">{p.role}</span>
                  <span className="idx-year">{p.year}</span>
                  <span className="idx-arrow" aria-hidden>→</span>
                </div>
                <div className="idx-body">
                  <span className="idx-thumb">
                    <img
                      src={p.imageSmall}
                      alt={p.imageAlt}
                      width={p.imageW}
                      height={p.imageH}
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
                  <p className="idx-desc">{p.short}</p>
                  <div className="idx-meta">
                    {p.stack && p.stack.length > 0 && (
                      <div className="idx-stack">
                        <span className="idx-meta-label">Tools</span>
                        <span className="idx-stack-list">
                          {p.stack.slice(0, 6).map((s, k) => (
                            <span key={k} className="idx-chip">{s}</span>
                          ))}
                        </span>
                      </div>
                    )}
                    {p.highlights && p.highlights.length > 0 && (
                      <div className="idx-highlights">
                        <span className="idx-meta-label">Highlights</span>
                        <ul>
                          {p.highlights.slice(0, 3).map((h, k) => (
                            <li key={k}>{h}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <span className="idx-readmore">Read the full case &nbsp;→</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div style={{ marginTop: 'clamp(60px, 8vw, 100px)', display: 'flex', justifyContent: 'center' }}>
          <Link to="/connect" className="cta">
            {intro.cta}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

/* ─────────────  CONNECT  ───────────── */
const srOnlyStyle = {
  position: 'absolute', width: 1, height: 1, padding: 0, margin: -1,
  overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0,
}
const honeypotStyle = { position: 'absolute', left: -9999, top: 'auto', width: 1, height: 1, overflow: 'hidden' }

export function ConnectTab() {
  const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const botcheckRef = useRef(null)

  const mailtoHref = () => {
    const subj = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    return `mailto:patriktjaderqvist@gmail.com?subject=${subj}&body=${body}`
  }

  const submit = (e) => {
    e.preventDefault()

    if (!WEB3FORMS_KEY) {
      window.location.href = mailtoHref()
      return
    }

    setStatus('submitting')
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Portfolio contact from ${form.name}`,
        name: form.name,
        email: form.email,
        message: form.message,
        botcheck: botcheckRef.current?.value || '',
      }),
    })
      .then((res) => res.json())
      .then((data) => setStatus(data && data.success ? 'success' : 'error'))
      .catch(() => setStatus('error'))
  }

  return (
    <div className="page-fade">
      <div className="section section-narrow">
        <div className="connect-hero">
          <div className="section-eyebrow-row" style={{ justifyContent: 'center' }}>
            <span className="line" style={{maxWidth: 80}} />
            <span className="eyebrow">By appointment</span>
            <span className="line" style={{maxWidth: 80}} />
          </div>
          <h2>Begin a <em>conversation</em>.</h2>
          <p>
            Working together starts with a call. Thirty minutes, no agenda — enough to see whether the fit is right.
            If it is, the work follows. If not, the conversation was still worth having.
          </p>

          <div className="cta-row">
            <a href="https://calendly.com/patriktjaderqvist" target="_blank" rel="noopener noreferrer" className="cta">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Book a 30-min call
            </a>
            <a href="mailto:patriktjaderqvist@gmail.com" className="cta ghost">
              Write directly
            </a>
          </div>
        </div>

        <div className="connect-form">
          <div className="section-eyebrow-row" style={{ justifyContent: 'center', marginBottom: 32 }}>
            <span className="line" style={{maxWidth: 80}} />
            <span className="eyebrow">Or send a note</span>
            <span className="line" style={{maxWidth: 80}} />
          </div>

          {status === 'success' ? (
            <div role="status" aria-live="polite" style={{ textAlign: 'center', padding: '40px 0' }}>
              <div className="display-italic" style={{ fontSize: '1.4rem', color: 'var(--ink)' }}>Thank you.</div>
              <div className="body-text" style={{ marginTop: 8 }}>Patrik replies within 24 hours.</div>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div style={honeypotStyle} aria-hidden="true">
                <label htmlFor="contact-botcheck" style={srOnlyStyle}>Leave this field empty</label>
                <input type="text" id="contact-botcheck" name="botcheck" tabIndex={-1} autoComplete="off" ref={botcheckRef}/>
              </div>
              <div className="field">
                <label htmlFor="contact-name" style={srOnlyStyle}>Name</label>
                <input type="text" id="contact-name" name="name" placeholder="Name" required autoComplete="name" value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}/>
              </div>
              <div className="field">
                <label htmlFor="contact-email" style={srOnlyStyle}>Email</label>
                <input type="email" id="contact-email" name="email" placeholder="Email" required autoComplete="email" value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}/>
              </div>
              <div className="field">
                <label htmlFor="contact-message" style={srOnlyStyle}>What can be made better?</label>
                <textarea id="contact-message" name="message" placeholder="What can be made better?" required autoComplete="off" value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}/>
              </div>

              {status === 'error' && (
                <div role="alert" style={{ textAlign: 'center', marginTop: 20 }}>
                  <div className="body-text" style={{ color: 'var(--ink)' }}>
                    Something went wrong sending that. Please try again, or reach out directly.
                  </div>
                  <div className="cta-row" style={{ marginTop: 16 }}>
                    <a href={mailtoHref()} className="cta ghost">Write directly</a>
                    <a href="https://calendly.com/patriktjaderqvist" target="_blank" rel="noopener noreferrer" className="cta ghost">Book a call</a>
                  </div>
                </div>
              )}

              <div style={{textAlign: 'center', marginTop: 28}}>
                <button type="submit" className="cta" disabled={status === 'submitting'} aria-busy={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending…' : 'Send →'}
                </button>
              </div>
            </form>
          )}
        </div>

        <div style={{ marginTop: 'clamp(60px, 8vw, 100px)', display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap' }}>
          {[
            { href: 'https://www.linkedin.com/in/patriktjaderqvist/', label: 'LinkedIn' },
            { href: 'https://github.com/patriktjaderqvist', label: 'GitHub' },
            { href: '/cv.pdf', label: 'Résumé' },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="eyebrow"
              style={{textDecoration: 'none', borderBottom: '1px solid var(--ink-muted)', paddingBottom: 4, color: 'var(--ink-soft)' }}>
              {l.label}
            </a>
          ))}
        </div>

        <footer className="connect-footer">
          <div className="monogram" />
          <div className="marque">Avendavi AB</div>
          <div className="copy">Stockholm · MMXXV</div>
        </footer>
      </div>
    </div>
  )
}

/* ─────────────  NOT FOUND  ───────────── */
export function NotFoundTab() {
  return (
    <div className="page-fade">
      <div className="section section-narrow">
        <div className="section-eyebrow-row">
          <span className="num">§ 404</span>
          <span className="line" />
          <span className="eyebrow">Off the index</span>
        </div>
        <h2 className="display" style={{ fontSize: 'clamp(2.4rem, 5.4vw, 4.4rem)', marginBottom: 'clamp(28px, 4vw, 56px)' }}>
          Page <em className="display-italic">not found</em>.
        </h2>
        <p className="body-text" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', maxWidth: 560, marginBottom: 'clamp(40px, 6vw, 72px)' }}>
          Nothing lives at this address.
        </p>
        <Link to="/" className="cta">
          Back to the beginning
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </Link>
      </div>
    </div>
  )
}

/* ─────────────  PROJECT DETAIL DRAWER  ───────────── */
export function ProjectDetail({ project, onClose }) {
  const drawerRef = useRef(null)

  useEffect(() => {
    if (!project) return
    const drawer = drawerRef.current
    const trigger = document.activeElement
    const SEL = 'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    drawer.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab') return
      const items = drawer.querySelectorAll(SEL)
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && (document.activeElement === first || document.activeElement === drawer)) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('keydown', onKey)
      const visible = trigger && trigger.isConnected && trigger.offsetParent !== null
      const fallback = document.querySelector('[role="tab"][aria-selected="true"]')
      ;(visible ? trigger : fallback)?.focus?.()
    }
  }, [project, onClose])

  if (!project) return null
  return (
    <Fragment>
      <div className={`detail-overlay ${project ? 'open' : ''}`} onClick={onClose} />
      <div
        ref={drawerRef}
        className={`detail-drawer ${project ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-title"
        tabIndex={-1}
      >
        <button type="button" className="close" onClick={onClose}>Close ×</button>
        <div className="detail-content">
          <div className="eyebrow" style={{marginBottom: 16}}>{project.category} · {project.year}</div>
          <h2 id="detail-title">{project.title}</h2>
          <div className="role">{project.role}</div>

          {project.imageLarge && (
            <div className="detail-thumb">
              <img
                src={project.imageLarge}
                alt={project.imageAlt}
                width={project.imageW}
                height={project.imageH}
                decoding="async"
              />
            </div>
          )}

          <h3>The Goal</h3>
          <p>{project.goal}</p>

          <h3>Highlights</h3>
          <ul>
            {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>

          <h3>Stack</h3>
          <div className="detail-stack">
            {project.stack.map(s => <span key={s}>{s}</span>)}
          </div>

          {(project.links.live || project.links.github) && (
            <div className="detail-links">
              {project.links.live && <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="cta ghost">Visit Live →</a>}
              {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="cta ghost">GitHub →</a>}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  )
}

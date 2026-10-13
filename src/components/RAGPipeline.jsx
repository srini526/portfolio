import { useLayoutEffect, useRef, useState } from 'react'
import { ragStages } from '../data/projects.js'
import { useMedia, useReduced } from '../hooks.jsx'
export default function RAGPipeline({ stages = ragStages }) {
  const wrap = useRef(null), cards = useRef([])
  const cols = useMedia('(max-width: 899px)') ? 2 : Math.min(4, stages.length)
  const reduce = useReduced()
  const [g, setG] = useState({ w: 0, h: 0, pts: [] })
  useLayoutEffect(() => {
    const m = () => {
      if (!wrap.current) return
      const b = wrap.current.getBoundingClientRect()
      setG({ w: b.width, h: b.height, pts: cards.current.map((c) => { const r = c.getBoundingClientRect(); return [+(r.left - b.left + r.width / 2).toFixed(1), +(r.top - b.top + r.height / 2).toFixed(1)] }) })
    }
    m(); const ro = new ResizeObserver(m); ro.observe(wrap.current); window.addEventListener('load', m)
    return () => { ro.disconnect(); window.removeEventListener('load', m) }
  }, [cols, stages])
  const d = g.pts.map((p, i) => `${i ? 'L' : 'M'}${p[0]},${p[1]}`).join(' ')
  return (
    <div className="pipe" ref={wrap} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {stages.map(([n, t, s], i) => {
        const row = Math.floor(i / cols), k = i % cols, col = row % 2 ? cols - k : k + 1 // snake route
        return (
          <div key={n} ref={(el) => (cards.current[i] = el)} className="stage" style={{ gridRow: row + 1, gridColumn: col }}>
            <b>{n}</b><h4>{t}</h4><span>{s}</span>
          </div>
        )
      })}
      {g.pts.length === stages.length && (
        <svg className="pipe-svg" width={g.w} height={g.h} viewBox={`0 0 ${g.w} ${g.h}`} aria-hidden="true">
          <path d={d} className="route" />
          {!reduce && <circle r="5" className="particle"><animateMotion dur={`${stages.length * 1.25}s`} repeatCount="indefinite" path={d} calcMode="linear" /></circle>}
        </svg>
      )}
    </div>
  )
}
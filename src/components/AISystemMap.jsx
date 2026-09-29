import { useMedia, useReduced } from '../hooks.jsx'
const ALL = ['RAG','Embeddings','LLMs','Python','Flask','Whisper','React','Docker','AWS']
const SMALL = ['RAG','LLMs','Embeddings','Python','Whisper','React']
const C = 200, R = 138
export default function AISystemMap() {
  const small = useMedia('(max-width: 899px)'); const reduce = useReduced()
  const labels = small ? SMALL : ALL, n = labels.length
  // single source of truth: every line, node and particle path is derived from these coordinates
  const nodes = labels.map((l, i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / n; return { l, x: +(C + R * Math.cos(a)).toFixed(1), y: +(C + R * Math.sin(a)).toFixed(1) } })
  const D = 9 // seconds for one core → node → core trip (4.5s per leg)
  return (
    <svg className="aimap" viewBox="0 0 400 400" role="img" aria-label="AI system map: an AI core connected to RAG, Embeddings, LLMs, Python, Flask, Whisper, React, Docker and AWS">
      <defs>
        <radialGradient id="core"><stop offset="0" stopColor="#67e8f9" /><stop offset=".6" stopColor="#3b82f6" /><stop offset="1" stopColor="#8b5cf6" stopOpacity=".2" /></radialGradient>
        <filter id="blur"><feGaussianBlur stdDeviation="6" /></filter>
      </defs>
      <g className={reduce ? '' : 'spin'} style={{ transformOrigin: '200px 200px' }}>
        <circle cx={C} cy={C} r="60" className="ring" /><circle cx={C} cy={C} r={R} className="ring dash" />
        <circle cx={C} cy={C - 60} r="3" fill="#a78bfa" /><circle cx={C + R} cy={C} r="3" fill="#22d3ee" />
      </g>
      {nodes.map((p) => <line key={p.l} x1={C} y1={C} x2={p.x} y2={p.y} className="spoke" />)}
      {!reduce && nodes.flatMap((p, i) => [0, 1, 2].map((k) => {
        const begin = `${((i * 0.55 + k * 3) % D).toFixed(2)}s`, path = `M${C},${C} L${p.x},${p.y}`
        return (
          <circle key={`${p.l}-${k}`} r={k === 0 ? 4 : 3} className="particle" opacity="0">
            <animateMotion dur={`${D}s`} begin={begin} repeatCount="indefinite" calcMode="spline" keyPoints="0;1;0" keyTimes="0;.5;1" keySplines=".45 0 .55 1;.45 0 .55 1" path={path} />
            <animate attributeName="opacity" dur={`${D}s`} begin={begin} repeatCount="indefinite" values="1;1" />
          </circle>
        )
      }))}
      <circle cx={C} cy={C} r="34" fill="#22d3ee" opacity=".35" filter="url(#blur)" className={reduce ? '' : 'pulse'} />
      <circle cx={C} cy={C} r="30" fill="url(#core)" />
      <text x={C} y={C + 4} className="core-t">AI CORE</text>
      {nodes.map((p) => (
        <g key={p.l}><rect x={p.x - 36} y={p.y - 13} width="72" height="26" rx="13" className="node" /><text x={p.x} y={p.y + 4} className="node-t">{p.l}</text></g>
      ))}
    </svg>
  )
}

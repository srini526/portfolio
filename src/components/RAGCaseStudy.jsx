import { Github } from 'lucide-react'
import Modal from './Modal.jsx'
import RAGPipeline from './RAGPipeline.jsx'
import { rag } from '../data/projects.js'
import { profile } from '../data/profile.js'
export default function RAGCaseStudy({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} label="RAG-Based AI Teaching Assistant case study" className="case">
      <p className="eyebrow">Case study · {rag.category}</p>
      <h2>{rag.title}</h2>
      {rag.study.map(([h, t]) => (
        <div key={h} className="cs-block">
          <h3>{h}</h3><p>{t}</p>
          {h === 'Architecture' && <RAGPipeline />}
        </div>
      ))}
      <a className="btn primary" href={profile.ragRepo} target="_blank" rel="noopener"><Github size={15} />View on GitHub</a>
    </Modal>
  )
}

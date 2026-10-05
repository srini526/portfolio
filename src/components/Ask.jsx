import RAGPlayground from './RAGPlayground.jsx'
import { Reveal } from '../hooks.jsx'
export default function Ask() {
  return (
    <section id="ask" className="container sec">
      <p className="eyebrow"><i />Live RAG demo</p>
      <h2>Ask my <em>portfolio.</em></h2>
      <p className="muted sub">A small retrieval-augmented chat. It searches my profile, then answers from what it finds.</p>
      <Reveal><RAGPlayground /></Reveal>
    </section>
  )
}
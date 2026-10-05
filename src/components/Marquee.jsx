const a = ['RAG', 'LLMs', 'Embeddings', 'Whisper', 'BGE-M3', 'Ollama', 'Groq', 'Semantic search', 'Prompt engineering']
const b = ['Flask', 'React', 'TensorFlow', 'InceptionV3', 'Docker', 'Kubernetes', 'AWS', 'FastAPI', 'Python']
const Row = ({ items, rev }) => (
  <div className={`mq ${rev ? 'rev' : ''}`} aria-hidden="true">
    <div className="track">{[...items, ...items].map((t, i) => <span key={i}>{t}<b>✦</b></span>)}</div>
  </div>
)
export default function Marquee() { return <div className="marquee"><Row items={a} /><Row items={b} rev /></div> }
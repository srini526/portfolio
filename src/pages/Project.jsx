import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react'
import { rag, brain } from '../data/projects.js'
import { profile } from '../data/profile.js'
import { Reveal } from '../hooks.jsx'
import RAGPipeline from '../components/RAGPipeline.jsx'
import NotFound from '../components/NotFound.jsx'

export default function Project() {
  const { slug } = useParams()
  const isRag = slug === 'rag-assistant'
  if (!isRag && slug !== 'brain-tumor') return <NotFound />
  const p = isRag ? rag : brain, next = isRag ? brain : rag
  return (
    <article className="container proj">
      <Link className="back" to="/#work"><ArrowLeft size={16} /> All work</Link>
      <p className="eyebrow"><i />{p.category}</p>
      <h1 className="ptitle">{p.title}</h1>
      <p className="plead">{p.desc}</p>
      <div className="cta">
        {isRag
          ? <a className="btn pop" href={profile.ragRepo} target="_blank" rel="noopener"><Github size={15} />View on GitHub</a>
          : <a className="btn pop" href={profile.kaggle} target="_blank" rel="noopener">View on Kaggle <ArrowUpRight size={16} /></a>}
      </div>
      <ul className="tags big-tags">{[...p.tech, ...(isRag ? [] : [p.presented])].map((t) => <li key={t}>{t}</li>)}</ul>

      {!isRag && (
        <>
          <div className="mri-big">{brain.samples.map(([l, s]) => <figure key={l}><div><img src={s} alt={`${l} MRI sample`} loading="lazy" /></div><figcaption>{l}</figcaption></figure>)}</div>
          <div className="acc"><strong>{brain.accuracy}</strong><span>accuracy</span><em>InceptionV3 → Classifier</em></div>
        </>
      )}

      <div className="cs">
        {p.study.map(([h, t]) => (
          <Reveal key={h} className="csrow"><h3>{h}</h3><div><p>{t}</p>{isRag && h === 'Architecture' && <RAGPipeline />}</div></Reveal>
        ))}
      </div>

      <Link className="nextp" to={`/projects/${next.slug}`} data-cursor="Next"><span className="muted">Next project</span><strong>{next.title}</strong><ArrowUpRight size={28} /></Link>
    </article>
  )
}
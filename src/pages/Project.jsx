import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react'
import { rag, research, brain, researchStages } from '../data/projects.js'
import { profile } from '../data/profile.js'
import { Reveal } from '../hooks.jsx'
import RAGPipeline from '../components/RAGPipeline.jsx'
import NotFound from '../components/NotFound.jsx'

const all = [rag, research, brain] // order shown in Featured work; "Next project" follows this order

export default function Project() {
  const { slug } = useParams()
  const i = all.findIndex((p) => p.slug === slug)
  if (i < 0) return <NotFound />
  const p = all[i], next = all[(i + 1) % all.length]
  const isRag = slug === 'rag-assistant', isResearch = slug === 'research-desk', isBrain = slug === 'brain-tumor'
  return (
    <article className="container proj">
      <Link className="back" to="/#work"><ArrowLeft size={16} /> All work</Link>
      <p className="eyebrow"><i />{p.category}</p>
      <h1 className="ptitle">{p.title}</h1>
      <p className="plead">{p.desc}</p>
      <div className="cta">
        {isRag && ( 
          <>
            <a className="btn pop" href={profile.ragRepo} target="_blank" rel="noopener"><Github size={15} />View on GitHub</a> 
            <a className='btn ghost' href={profile.ragDemo} target="_blank" rel="noopener">Live demo <ArrowUpRight size={16} /></a>
          </>
        ) }
        {isRag && (
          <figure className='shot'>
            <img src='\images\rag-ai-notebook-screenshot.webp'width="2000" height="550" alt="RAG-Based AI Notebook interface showing source uploads, AI-powered question answering with citations, and study tools."/>
            <figcaption>RAG-Based AI Notebook — Interactive workspace for source-grounded Q&A and AI-powered study materials.</figcaption>
          </figure>
        )}
        {isResearch && (
          <>
            <a className="btn pop" href={profile.researchDemo} target="_blank" rel="noopener">Live demo <ArrowUpRight size={16} /></a>
            <a className="btn ghost" href={profile.researchRepo} target="_blank" rel="noopener"><Github size={15} />View on GitHub</a>
          </>
        )}
        {isResearch && (
        <figure className="shot">
          <img src="/images/research-lab.jpg" width="1600" height="804" alt="The Research Lab interface: four animated agents named Scout, Bookworm, Scribbles and Prof. Red" loading="lazy" />
          <figcaption>The Research Lab interface: Scout, Bookworm, Scribbles and Prof. Red</figcaption>
        </figure>
      )}
        {isBrain && <a className="btn pop" href={profile.kaggle} target="_blank" rel="noopener">View on Kaggle <ArrowUpRight size={16} /></a>}
      </div>
      <ul className="tags big-tags">{[...p.tech, ...(isBrain ? [p.presented] : [])].map((t) => <li key={t}>{t}</li>)}</ul>

      {isBrain && (
        <>
          <div className="mri-big">{brain.samples.map(([l, s]) => <figure key={l}><div><img src={s} alt={`${l} MRI sample`} loading="lazy" /></div><figcaption>{l}</figcaption></figure>)}</div>
          <div className="acc"><strong>{brain.accuracy}</strong><span>accuracy</span><em>InceptionV3 → Classifier</em></div>
        </>
      )}

      <div className="cs">
        {p.study.map(([h, t]) => (
          <Reveal key={h} className="csrow">
            <h3>{h}</h3>
            <div>
              <p>{t}</p>
              {isRag && h === 'Architecture' && <RAGPipeline />}
              {isResearch && h === 'Architecture' && <RAGPipeline stages={researchStages} />}
            </div>
          </Reveal>
        ))}
      </div>

      <Link className="nextp" to={`/projects/${next.slug}`} data-cursor="Next"><span className="muted">Next project</span><strong>{next.title}</strong><ArrowUpRight size={28} /></Link>
    </article>
  )
}
import { profile } from '../data/profile.js'
import { Reveal } from '../hooks.jsx'
export default function Journey() {
  const e = profile.education
  return (
    <>
      <Reveal as="section" id="journey" className="container sec">
        <p className="eyebrow">06 · Journey</p><h2>Internship and studies</h2>
        <ol className="tl">{profile.journey.map((j) => (
          <li key={j.title}><h3>{j.title}</h3><p className="muted">{j.org} · {j.when}</p>{j.points.map((p) => <p key={p}>{p}</p>)}{j.tech && <ul className="tags">{j.tech.map((t) => <li key={t}>{t}</li>)}</ul>}</li>
        ))}</ol>
      </Reveal>
      <Reveal as="section" id="education" className="container sec">
        <p className="eyebrow">07 · Education</p>
        <div className="edu"><h3>{e.degree}</h3><p>{e.school}</p><p className="muted">{e.univ} · {e.years}</p><p className="cgpa">CGPA <strong>{e.cgpa}</strong></p></div>
      </Reveal>
    </>
  )
}

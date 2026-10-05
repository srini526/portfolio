import { profile } from '../data/profile.js'
import { Reveal } from '../hooks.jsx'
export default function Journey() {
  const e = profile.education
  return (
    <section id="journey" className="container sec">
      <p className="eyebrow"><i />Journey</p><h2>Internship &amp; <em>studies.</em></h2>
      <div className="jlist">
        {profile.journey.map((j) => (
          <Reveal key={j.title} className="jrow"><p className="when">{j.when}</p>
            <div><h3>{j.title}</h3><p className="muted">{j.org}</p>{j.points.map((p) => <p key={p}>{p}</p>)}{j.tech && <ul className="tags">{j.tech.map((t) => <li key={t}>{t}</li>)}</ul>}</div></Reveal>
        ))}
        <Reveal className="jrow"><p className="when">{e.years}</p><div><h3>{e.degree}</h3><p className="muted">{e.school} · {e.univ}</p><p>CGPA <strong className="pop-t">{e.cgpa}</strong></p></div></Reveal>
      </div>
    </section>
  )
}
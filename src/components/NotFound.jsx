import { Link, useLocation } from 'react-router-dom'
export default function NotFound() {
  const { pathname } = useLocation()
  return (
    <section className="container nf">
      <p className="eyebrow"><i />System error</p><h1>404</h1>
      <p className="muted">The requested route could not be found.</p>
      <p className="muted"><code>{pathname}</code></p>
      <Link className="btn pop" to="/">Return home</Link>
    </section>
  )
}
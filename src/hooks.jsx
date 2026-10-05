import { useEffect, useRef, useState } from 'react'
export function useMedia(q) {
  const [m, setM] = useState(() => typeof window !== 'undefined' && window.matchMedia(q).matches)
  useEffect(() => { const mq = window.matchMedia(q); const f = () => setM(mq.matches); f(); mq.addEventListener('change', f); return () => mq.removeEventListener('change', f) }, [q])
  return m
}
export const useReduced = () => useMedia('(prefers-reduced-motion: reduce)')
export const useFine = () => useMedia('(hover: hover) and (pointer: fine)')
const SEL = 'a[href],button:not([disabled]),input,textarea,[tabindex]:not([tabindex="-1"])'
export function useModalA11y(ref, open, onClose) {
  const closeRef = useRef(onClose); closeRef.current = onClose
  useEffect(() => {
    if (!open || !ref.current) return
    const el = ref.current, prev = document.activeElement, ov = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    ;(el.querySelector('input') || el.querySelector(SEL) || el).focus()
    const onKey = (e) => {
      if (e.key === 'Escape') { e.stopPropagation(); closeRef.current(); return }
      if (e.key !== 'Tab') return
      const f = [...el.querySelectorAll(SEL)].filter((x) => x.offsetParent !== null)
      if (!f.length) { e.preventDefault(); return }
      const a = f[0], z = f[f.length - 1]
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus() }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ov; prev && prev.focus && prev.focus() }
  }, [open, ref])
}
export function Reveal({ children, className = '', as: T = 'div', ...p }) {
  const r = useRef(null); const [v, setV] = useState(false)
  useEffect(() => {
    if (!('IntersectionObserver' in window)) { setV(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); io.disconnect() } }, { threshold: 0.08 })
    io.observe(r.current); return () => io.disconnect()
  }, [])
  return <T ref={r} className={`reveal ${v ? 'in' : ''} ${className}`} {...p}>{children}</T>
}
// Scroll progress bar, parallax ([data-parallax]) and scroll-linked word reveal ([data-words]) in one rAF-throttled listener.
export function useScrollFx(dep) {
  const reduce = useReduced()
  useEffect(() => {
    let raf = 0
    const run = () => {
      raf = 0
      const h = document.documentElement, vh = window.innerHeight
      h.style.setProperty('--sp', (h.scrollTop / Math.max(h.scrollHeight - vh, 1)).toFixed(4))
      document.querySelectorAll('[data-words]').forEach((el) => {
        const r = el.getBoundingClientRect()
        el.style.setProperty('--p', (reduce ? 1 : Math.min(Math.max((vh * 0.85 - r.top) / (r.height + vh * 0.3), 0), 1)).toFixed(3))
      })
      if (!reduce) document.querySelectorAll('[data-parallax]').forEach((el) => {
        const r = el.getBoundingClientRect()
        el.style.setProperty('--py', (-(r.top + r.height / 2 - vh / 2) * parseFloat(el.dataset.parallax)).toFixed(1) + 'px')
      })
    }
    const on = () => { if (!raf) raf = requestAnimationFrame(run) }
    run(); const t = setTimeout(run, 250)
    window.addEventListener('scroll', on, { passive: true }); window.addEventListener('resize', on)
    return () => { clearTimeout(t); cancelAnimationFrame(raf); window.removeEventListener('scroll', on); window.removeEventListener('resize', on) }
  }, [dep, reduce])
}
export function Magnetic({ children, strength = 0.28 }) {
  const ref = useRef(null), fine = useFine(), reduce = useReduced()
  const move = (e) => { const r = ref.current.getBoundingClientRect(); ref.current.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * strength}px, ${(e.clientY - r.top - r.height / 2) * strength}px)` }
  const off = () => { if (ref.current) ref.current.style.transform = '' }
  if (!fine || reduce) return <span className="mag">{children}</span>
  return <span className="mag" ref={ref} onMouseMove={move} onMouseLeave={off}>{children}</span>
}
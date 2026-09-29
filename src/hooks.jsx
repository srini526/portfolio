import { useEffect, useRef, useState } from 'react'
export function useMedia(q) {
  const [m, setM] = useState(() => typeof window !== 'undefined' && window.matchMedia(q).matches)
  useEffect(() => { const mq = window.matchMedia(q); const f = () => setM(mq.matches); f(); mq.addEventListener('change', f); return () => mq.removeEventListener('change', f) }, [q])
  return m
}
export const useReduced = () => useMedia('(prefers-reduced-motion: reduce)')
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
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); io.disconnect() } }, { threshold: 0.1 })
    io.observe(r.current); return () => io.disconnect()
  }, [])
  return <T ref={r} className={`reveal ${v ? 'in' : ''} ${className}`} {...p}>{children}</T>
}

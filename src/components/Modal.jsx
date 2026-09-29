import { useRef } from 'react'
import { X } from 'lucide-react'
import { useModalA11y } from '../hooks.jsx'
export default function Modal({ open, onClose, label, className = '', children }) {
  const ref = useRef(null)
  useModalA11y(ref, open, onClose)
  if (!open) return null
  return (
    <div className="backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div ref={ref} className={`modal ${className}`} role="dialog" aria-modal="true" aria-label={label} tabIndex={-1}>
        <button className="close" onClick={onClose} aria-label="Close dialog"><X size={18} /></button>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}

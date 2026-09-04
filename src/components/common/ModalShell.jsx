import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import './ModalShell.css'

const FOCUSABLE =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function ModalShell({
  id,
  open,
  onClose,
  labelledBy,
  closeLabel,
  header,
  children,
  scrollKey,
  size,
}) {
  const dialogRef = useRef(null)
  const bodyRef = useRef(null)
  const closeRef = useRef(null)
  const onCloseRef = useRef(onClose)
  const previousFocusRef = useRef(null)

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    if (!open) return undefined

    const dialog = dialogRef.current
    const root = document.getElementById('root')
    previousFocusRef.current = document.activeElement

    document.body.classList.add('is-modal-open')
    root?.setAttribute('aria-hidden', 'true')
    closeRef.current?.focus()

    function getFocusable() {
      if (!dialog) return []
      return [...dialog.querySelectorAll(FOCUSABLE)].filter((node) => {
        return node.getClientRects().length > 0
      })
    }

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onCloseRef.current()
        return
      }

      if (event.key !== 'Tab') return

      const nodes = getFocusable()
      if (nodes.length === 0) {
        event.preventDefault()
        dialog?.focus()
        return
      }

      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      const active = document.activeElement

      if (event.shiftKey && (active === first || !dialog?.contains(active))) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && (active === last || !dialog?.contains(active))) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      root?.removeAttribute('aria-hidden')
      document.body.classList.remove('is-modal-open')

      const trigger = previousFocusRef.current
      previousFocusRef.current = null
      const hidden = trigger?.closest?.('[hidden]')
      if (trigger && !hidden && trigger.getClientRects().length > 0) {
        trigger.focus()
      } else {
        const toggle = document.querySelector('.site-header__toggle')
        if (toggle && toggle.getClientRects().length > 0) {
          toggle.focus()
        }
      }
    }
  }, [open])

  useEffect(() => {
    if (open && bodyRef.current) {
      bodyRef.current.scrollTop = 0
    }
  }, [open, scrollKey])

  if (!open) return null

  return createPortal(
    <div className="site-modal-overlay" onClick={onClose}>
      <div
        ref={dialogRef}
        id={id}
        className={[
          'site-modal',
          size === 'compact' ? 'site-modal--compact' : '',
          size === 'wide' ? 'site-modal--wide' : '',
          size === 'article' ? 'site-modal--article' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="site-modal__header">
          <div className="site-modal__heading">{header}</div>
          <button
            ref={closeRef}
            type="button"
            className="site-modal__close"
            aria-label={closeLabel}
            onClick={onClose}
          >
            <X size={22} strokeWidth={2.25} aria-hidden="true" />
          </button>
        </div>
        <div ref={bodyRef} className="site-modal__body">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  )
}

import { useId } from 'react'
import { ArrowRight } from 'lucide-react'
import { CONTACT_MODAL_CONTENT as CONTENT } from '../../data/home'
import Button from './Button'
import ModalShell from './ModalShell'
import './ContactModal.css'

export default function ContactModal({ id, open, onClose }) {
  const titleId = useId()

  return (
    <ModalShell
      id={id}
      open={open}
      onClose={onClose}
      labelledBy={titleId}
      closeLabel="İletişim penceresini kapat"
      size="compact"
      header={
        <>
          <p className="site-modal__eyebrow">{CONTENT.eyebrow}</p>
          <h2 id={titleId} className="site-modal__title">
            {CONTENT.title}
          </h2>
          <p className="site-modal__lead">{CONTENT.description}</p>
        </>
      }
    >
      <div className="contact-modal__grid">
        <div className="contact-modal__block">
          <p className="contact-modal__label">{CONTENT.addressLabel}</p>
          <p className="contact-modal__value">{CONTENT.venue}</p>
          {CONTENT.addressLines.map((line) => (
            <p key={line} className="contact-modal__meta">
              {line}
            </p>
          ))}
        </div>

        <div className="contact-modal__stack">
          <div className="contact-modal__block">
            <p className="contact-modal__label">{CONTENT.phoneLabel}</p>
            <a
              className="contact-modal__value contact-modal__link"
              href={CONTENT.phoneHref}
              aria-label={CONTENT.phoneAriaLabel}
            >
              {CONTENT.phone}
            </a>
          </div>

          <div className="contact-modal__block">
            <p className="contact-modal__label">{CONTENT.websiteLabel}</p>
            <a
              className="contact-modal__value contact-modal__link"
              href={CONTENT.websiteHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {CONTENT.website}
            </a>
          </div>

          <div className="contact-modal__block">
            <p className="contact-modal__label">{CONTENT.instagramLabel}</p>
            <a
              className="contact-modal__value contact-modal__link"
              href={CONTENT.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={CONTENT.instagramAriaLabel}
            >
              {CONTENT.instagram}
            </a>
          </div>
        </div>
      </div>

      <div className="contact-modal__actions">
        <Button
          href={CONTENT.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {CONTENT.mapsLabel}
          <ArrowRight size={16} strokeWidth={2.25} aria-hidden="true" />
        </Button>
      </div>

      <div className="contact-modal__note">
        <p>{CONTENT.note}</p>
        <a
          className="contact-modal__value contact-modal__link"
          href={CONTENT.phoneHref}
          aria-label={CONTENT.phoneAriaLabel}
        >
          {CONTENT.phone}
        </a>
      </div>
    </ModalShell>
  )
}

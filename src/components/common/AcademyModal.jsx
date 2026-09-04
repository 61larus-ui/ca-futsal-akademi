import { useId } from 'react'
import { ACADEMY_MODAL_CONTENT as CONTENT } from '../../data/home'
import ModalShell from './ModalShell'
import './AcademyModal.css'

export default function AcademyModal({ id, open, onClose }) {
  const titleId = useId()

  return (
    <ModalShell
      id={id}
      open={open}
      onClose={onClose}
      labelledBy={titleId}
      closeLabel="Akademi penceresini kapat"
      header={
        <>
          <p className="site-modal__eyebrow">{CONTENT.eyebrow}</p>
          <h2 id={titleId} className="site-modal__title">
            {CONTENT.titleLines.map((line) => (
              <span key={line} className="site-modal__title-line">
                {line}
              </span>
            ))}
          </h2>
        </>
      }
    >
      <div className="academy-modal__intro">
        {CONTENT.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {CONTENT.sections.map((section) => (
        <section key={section.id} className="academy-modal__section">
          <h3 className="academy-modal__section-title">{section.title}</h3>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}

      <blockquote className="academy-modal__manifesto">
        {CONTENT.manifesto.map((line) => (
          <span key={line} className="academy-modal__manifesto-line">
            {line}
          </span>
        ))}
      </blockquote>

      <p className="academy-modal__closing">{CONTENT.closing}</p>
    </ModalShell>
  )
}

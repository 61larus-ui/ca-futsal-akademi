import { useId } from 'react'
import { WHY_FUTSAL_MODAL_CONTENT as CONTENT } from '../../data/home'
import ModalShell from './ModalShell'
import './WhyFutsalModal.css'

export default function WhyFutsalModal({ id, open, onClose }) {
  const titleId = useId()

  return (
    <ModalShell
      id={id}
      open={open}
      onClose={onClose}
      labelledBy={titleId}
      closeLabel="Neden Futsal penceresini kapat"
      size="article"
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
      <div className="why-futsal-modal__intro">
        {CONTENT.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {CONTENT.sections.map((section) => (
        <section key={section.id} className="why-futsal-modal__section">
          <h3 className="why-futsal-modal__section-title">
            {section.titleLines
              ? section.titleLines.map((line) => (
                  <span key={line} className="why-futsal-modal__section-title-line">
                    {line}
                  </span>
                ))
              : section.title}
          </h3>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.lead ? <p>{section.lead}</p> : null}
          {section.highlights ? (
            <ul className="why-futsal-modal__highlights">
              {section.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {section.closing ? <p>{section.closing}</p> : null}
        </section>
      ))}

      <section className="why-futsal-modal__section">
        <h3 className="why-futsal-modal__section-title">
          {CONTENT.finale.titleLines.map((line) => (
            <span key={line} className="why-futsal-modal__section-title-line">
              {line}
            </span>
          ))}
        </h3>
        {CONTENT.finale.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <blockquote className="why-futsal-modal__manifesto">
          <p className="why-futsal-modal__manifesto-heading">
            {CONTENT.finale.manifesto.heading}
          </p>
          {CONTENT.finale.manifesto.lines.map((line) => (
            <span key={line} className="why-futsal-modal__manifesto-line">
              {line}
            </span>
          ))}
        </blockquote>
      </section>
    </ModalShell>
  )
}

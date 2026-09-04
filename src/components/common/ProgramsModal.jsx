import { useEffect, useId, useRef } from 'react'
import { PROGRAM_MODAL_CONTENT as CONTENT } from '../../data/home'
import ModalShell from './ModalShell'
import './ProgramsModal.css'

const PROGRAMS = [CONTENT.development, CONTENT.performance]

export default function ProgramsModal({ id, open, view, onViewChange, onClose }) {
  const titleId = useId()
  const backRef = useRef(null)
  const cardRefs = useRef({})
  const wasOpenRef = useRef(false)
  const program = view === 'selection' ? null : CONTENT[view]
  const isDetail = Boolean(program)

  useEffect(() => {
    if (!open) {
      wasOpenRef.current = false
      return undefined
    }

    if (!wasOpenRef.current) {
      wasOpenRef.current = true
      return undefined
    }

    const frame = window.requestAnimationFrame(() => {
      if (view === 'selection') {
        const last = cardRefs.current.last
        const node = (last && cardRefs.current[last]) || cardRefs.current.development
        node?.focus()
      } else {
        backRef.current?.focus()
      }
    })

    return () => window.cancelAnimationFrame(frame)
  }, [open, view])

  function openProgram(nextView) {
    cardRefs.current.last = nextView
    onViewChange(nextView)
  }

  const header = isDetail ? (
    <>
      <button
        ref={backRef}
        type="button"
        className="site-modal__back"
        aria-label={CONTENT.backAriaLabel}
        onClick={() => onViewChange('selection')}
      >
        {CONTENT.backLabel}
      </button>
      <p className="site-modal__eyebrow">{program.eyebrow}</p>
      <h2 id={titleId} className="site-modal__title">
        {program.title}
      </h2>
      <p className="programs-modal__slogan">{program.slogan}</p>
    </>
  ) : (
    <>
      <p className="site-modal__eyebrow">{CONTENT.eyebrow}</p>
      <h2 id={titleId} className="site-modal__title">
        {CONTENT.titleLines.map((line) => (
          <span key={line} className="site-modal__title-line">
            {line}
          </span>
        ))}
      </h2>
      <p className="site-modal__lead">{CONTENT.commonStatement}</p>
    </>
  )

  return (
    <ModalShell
      id={id}
      open={open}
      onClose={onClose}
      labelledBy={titleId}
      closeLabel="Programlar penceresini kapat"
      scrollKey={view}
      header={header}
    >
      {isDetail ? (
        <ProgramDetail program={program} />
      ) : (
        <div className="programs-modal__cards">
          {PROGRAMS.map((item) => (
            <button
              key={item.id}
              ref={(node) => {
                cardRefs.current[item.id] = node
              }}
              type="button"
              className="programs-modal__card"
              onClick={() => openProgram(item.id)}
            >
              <span className="programs-modal__card-kicker">{item.eyebrow}</span>
              <span className="programs-modal__card-age">{item.title}</span>
              <span className="programs-modal__card-slogan">{item.slogan}</span>
            </button>
          ))}
        </div>
      )}
    </ModalShell>
  )
}

function ProgramDetail({ program }) {
  const [lead, ...rest] = program.paragraphs

  return (
    <div className="programs-modal__detail">
      <p className="programs-modal__lead-copy">{lead}</p>
      {rest.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      <section className="programs-modal__topics" aria-labelledby={`${program.id}-topics`}>
        <h3 id={`${program.id}-topics`} className="programs-modal__topics-title">
          {CONTENT.topicsTitle}
        </h3>
        <ul className="programs-modal__list">
          {program.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </section>

      <blockquote className="programs-modal__manifesto">{program.manifesto}</blockquote>
      <p className="programs-modal__brand">{CONTENT.commonStatement}</p>
    </div>
  )
}

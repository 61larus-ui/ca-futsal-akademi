import { useId, useRef, useState } from 'react'
import { REGISTRATION_CONTENT as CONTENT } from '../../data/home'
import {
  AGE_MAX,
  AGE_MIN,
  buildRegistrationMessage,
  buildWhatsAppUrl,
  openWhatsApp,
  suggestedProgram,
  validateRegistration,
} from '../../utils/registration'
import Button from '../common/Button'
import './Registration.css'

const INITIAL = {
  parentName: '',
  athleteName: '',
  age: '',
  phone: '',
  program: '',
  note: '',
  consent: false,
}

export default function RegistrationForm({ headingId }) {
  const generatedId = useId()
  const titleId = headingId || `${generatedId}-title`
  const baseId = useId()
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const fieldRefs = useRef({})

  function fieldId(name) {
    return `${baseId}-${name}`
  }

  function errorId(name) {
    return `${baseId}-${name}-error`
  }

  function update(name, value) {
    setValues((current) => {
      const next = { ...current, [name]: value }
      if (name === 'age') {
        const suggested = suggestedProgram(Number(value))
        if (suggested) next.program = suggested
      }
      return next
    })
    setErrors((current) => {
      if (!current[name]) return current
      const next = { ...current }
      delete next[name]
      return next
    })
  }

  function onSubmit(event) {
    event.preventDefault()
    const nextErrors = validateRegistration(values)
    setErrors(nextErrors)

    const order = ['parentName', 'athleteName', 'age', 'phone', 'program', 'consent']
    const firstInvalid = order.find((name) => nextErrors[name])
    if (firstInvalid) {
      fieldRefs.current[firstInvalid]?.focus()
      return
    }

    const programLabel = CONTENT.programs.find((item) => item.id === values.program)?.label
    const message = buildRegistrationMessage({
      parentName: values.parentName,
      athleteName: values.athleteName,
      age: values.age,
      phone: values.phone,
      programLabel,
      note: values.note,
    })
    openWhatsApp(buildWhatsAppUrl(CONTENT.whatsappNumber, message))
  }

  return (
    <div className="registration__grid">
      <div className="registration__info">
        <p className="registration__eyebrow">{CONTENT.eyebrow}</p>
        <h2 id={titleId} className="registration__title">
          {CONTENT.titleLines.map((line) => (
            <span key={line} className="registration__title-line">
              {line}
            </span>
          ))}
        </h2>
        <p className="registration__lead">{CONTENT.lead}</p>

        <dl className="registration__facts">
          <div>
            <dt>{CONTENT.phoneLabel}</dt>
            <dd>
              <a href={CONTENT.phoneHref} aria-label={CONTENT.phoneAriaLabel}>
                {CONTENT.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt>{CONTENT.locationLabel}</dt>
            <dd>
              {CONTENT.venue}
              <span>{CONTENT.city}</span>
            </dd>
          </div>
          <div>
            <dt>{CONTENT.programsLabel}</dt>
            <dd>
              {CONTENT.programs.map((item) => (
                <span key={item.id}>{item.label}</span>
              ))}
            </dd>
          </div>
        </dl>
      </div>

      <form className="registration__form" onSubmit={onSubmit} noValidate>
        <div className="registration__field">
          <label htmlFor={fieldId('parentName')}>{CONTENT.fields.parentName}</label>
          <input
            ref={(node) => {
              fieldRefs.current.parentName = node
            }}
            id={fieldId('parentName')}
            name="parentName"
            type="text"
            autoComplete="name"
            value={values.parentName}
            aria-invalid={errors.parentName ? 'true' : undefined}
            aria-describedby={errors.parentName ? errorId('parentName') : undefined}
            onChange={(event) => update('parentName', event.target.value)}
          />
          {errors.parentName ? (
            <p id={errorId('parentName')} className="registration__error">
              {errors.parentName}
            </p>
          ) : null}
        </div>

        <div className="registration__field">
          <label htmlFor={fieldId('athleteName')}>{CONTENT.fields.athleteName}</label>
          <input
            ref={(node) => {
              fieldRefs.current.athleteName = node
            }}
            id={fieldId('athleteName')}
            name="athleteName"
            type="text"
            value={values.athleteName}
            aria-invalid={errors.athleteName ? 'true' : undefined}
            aria-describedby={errors.athleteName ? errorId('athleteName') : undefined}
            onChange={(event) => update('athleteName', event.target.value)}
          />
          {errors.athleteName ? (
            <p id={errorId('athleteName')} className="registration__error">
              {errors.athleteName}
            </p>
          ) : null}
        </div>

        <div className="registration__row">
          <div className="registration__field">
            <label htmlFor={fieldId('age')}>{CONTENT.fields.age}</label>
            <input
              ref={(node) => {
                fieldRefs.current.age = node
              }}
              id={fieldId('age')}
              name="age"
              type="number"
              inputMode="numeric"
              min={AGE_MIN}
              max={AGE_MAX}
              value={values.age}
              aria-invalid={errors.age ? 'true' : undefined}
              aria-describedby={errors.age ? errorId('age') : undefined}
              onChange={(event) => update('age', event.target.value)}
            />
            {errors.age ? (
              <p id={errorId('age')} className="registration__error">
                {errors.age}
              </p>
            ) : null}
          </div>

          <div className="registration__field">
            <label htmlFor={fieldId('phone')}>{CONTENT.fields.phone}</label>
            <input
              ref={(node) => {
                fieldRefs.current.phone = node
              }}
              id={fieldId('phone')}
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              aria-invalid={errors.phone ? 'true' : undefined}
              aria-describedby={errors.phone ? errorId('phone') : undefined}
              onChange={(event) => update('phone', event.target.value)}
            />
            {errors.phone ? (
              <p id={errorId('phone')} className="registration__error">
                {errors.phone}
              </p>
            ) : null}
          </div>
        </div>

        <fieldset className="registration__fieldset">
          <legend>{CONTENT.fields.program}</legend>
          <div className="registration__radios">
            {CONTENT.programs.map((item, index) => (
              <label key={item.id} className="registration__radio">
                <input
                  ref={(node) => {
                    if (index === 0) fieldRefs.current.program = node
                  }}
                  type="radio"
                  name="program"
                  value={item.id}
                  checked={values.program === item.id}
                  aria-invalid={errors.program ? 'true' : undefined}
                  aria-describedby={errors.program ? errorId('program') : undefined}
                  onChange={() => update('program', item.id)}
                />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
          {errors.program ? (
            <p id={errorId('program')} className="registration__error">
              {errors.program}
            </p>
          ) : null}
        </fieldset>

        <div className="registration__field">
          <label htmlFor={fieldId('note')}>
            {CONTENT.fields.note}{' '}
            <span className="registration__optional">{CONTENT.fields.noteOptional}</span>
          </label>
          <textarea
            id={fieldId('note')}
            name="note"
            rows={3}
            value={values.note}
            onChange={(event) => update('note', event.target.value)}
          />
        </div>

        <label className="registration__consent">
          <input
            ref={(node) => {
              fieldRefs.current.consent = node
            }}
            type="checkbox"
            name="consent"
            checked={values.consent}
            aria-invalid={errors.consent ? 'true' : undefined}
            aria-describedby={errors.consent ? errorId('consent') : undefined}
            onChange={(event) => update('consent', event.target.checked)}
          />
          <span>{CONTENT.consent}</span>
        </label>
        {errors.consent ? (
          <p id={errorId('consent')} className="registration__error">
            {errors.consent}
          </p>
        ) : null}

        <Button type="submit" className="registration__submit btn--block">
          {CONTENT.submit}
        </Button>
        <p className="registration__helper">{CONTENT.helper}</p>
      </form>
    </div>
  )
}

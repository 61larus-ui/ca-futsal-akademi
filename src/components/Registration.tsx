import { useId, useState, type FormEvent } from 'react'
import './Registration.css'

type ProgramValue = 'gelisim' | 'performans' | ''

type FormValues = {
  parentName: string
  athleteName: string
  athleteAge: string
  phone: string
  program: ProgramValue
  note: string
  consent: boolean
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const WHATSAPP_NUMBER = '905400010462'

const INITIAL_VALUES: FormValues = {
  parentName: '',
  athleteName: '',
  athleteAge: '',
  phone: '',
  program: '',
  note: '',
  consent: false,
}

function normalizePhone(value: string) {
  return value.replace(/[\s\-().]/g, '')
}

function isValidTurkishPhone(value: string) {
  const cleaned = normalizePhone(value)

  if (/^05\d{9}$/.test(cleaned)) return true
  if (/^\+905\d{9}$/.test(cleaned)) return true
  if (/^905\d{9}$/.test(cleaned)) return true

  return false
}

function getProgramLabel(program: ProgramValue) {
  if (program === 'gelisim') return '4–12 Yaş Gelişim Grubu'
  if (program === 'performans') return '12 Yaş ve Üzeri Performans Grubu'
  return ''
}

function buildWhatsAppMessage(values: FormValues) {
  const note = values.note.trim() || 'Belirtilmedi'

  return [
    'CA FUTSAL AKADEMİ - ÖN KAYIT',
    '',
    `Veli Adı Soyadı: ${values.parentName.trim()}`,
    `Sporcu Adı Soyadı: ${values.athleteName.trim()}`,
    `Sporcu Yaşı: ${values.athleteAge.trim()}`,
    `Telefon: ${values.phone.trim()}`,
    `Program: ${getProgramLabel(values.program)}`,
    `Not: ${note}`,
    '',
    'Web sitesi üzerinden ön kayıt talebi.',
  ].join('\n')
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (!values.parentName.trim()) {
    errors.parentName = 'Veli adı soyadı zorunludur.'
  }

  if (!values.athleteName.trim()) {
    errors.athleteName = 'Sporcu adı soyadı zorunludur.'
  }

  const age = Number(values.athleteAge)
  if (!values.athleteAge.trim()) {
    errors.athleteAge = 'Sporcu yaşı zorunludur.'
  } else if (!Number.isInteger(age) || age < 4 || age > 18) {
    errors.athleteAge = 'Lütfen 4 ile 18 arasında bir yaş girin.'
  }

  if (!values.phone.trim()) {
    errors.phone = 'Telefon numarası zorunludur.'
  } else if (!isValidTurkishPhone(values.phone)) {
    errors.phone =
      'Geçerli bir Türkiye cep telefonu girin. Örn: +90 540 001 0462'
  }

  if (!values.program) {
    errors.program = 'Lütfen bir program seçin.'
  }

  if (!values.consent) {
    errors.consent = 'Devam etmek için onay vermelisiniz.'
  }

  return errors
}

export function Registration() {
  const formId = useId()
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES)
  const [errors, setErrors] = useState<FormErrors>({})
  const [whatsappReady, setWhatsappReady] = useState(false)

  function fieldId(name: string) {
    return `${formId}-${name}`
  }

  function errorId(name: string) {
    return `${formId}-${name}-error`
  }

  function updateField<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[key]
        return next
      })
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)
    setWhatsappReady(false)

    if (Object.keys(nextErrors).length > 0) {
      const firstErrorField = Object.keys(nextErrors)[0]
      const el = document.getElementById(fieldId(firstErrorField))
      el?.focus()
      return
    }

    const message = buildWhatsAppMessage(values)
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

    // Open inside the same user gesture to avoid popup blockers
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setWhatsappReady(true)
  }

  return (
    <section
      id="kayit"
      className="section section-block registration"
      aria-labelledby="registration-heading"
    >
      <div className="container registration__layout">
        <div className="registration__intro">
          <p className="section-eyebrow">ÖN KAYIT</p>
          <h2 id="registration-heading" className="section-title">
            ÇOCUĞUNUZ İÇİN
            <br />
            İLK ADIMI ATIN.
          </h2>
          <p className="section-lead">
            Kısa ön kayıt formunu doldurun. Ekibimiz sizinle iletişime geçerek yaş
            grubuna uygun program hakkında bilgi versin.
          </p>

          <ul className="registration__info">
            <li className="registration__info-item">
              <span className="registration__info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7.5 4.5h3l1.2 3.2-1.8 1.4a10.5 10.5 0 0 0 5 5l1.4-1.8 3.2 1.2v3a1.5 1.5 0 0 1-1.5 1.5A13.5 13.5 0 0 1 6 6a1.5 1.5 0 0 1 1.5-1.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <span className="registration__info-label">Telefon</span>
                <a
                  className="registration__info-value"
                  href="tel:+905400010462"
                >
                  +90 540 001 0462
                </a>
              </div>
            </li>
            <li className="registration__info-item">
              <span className="registration__info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0 0 12 4.3a6.5 6.5 0 0 0-6.5 6.5C5.5 15.8 12 21 12 21Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="10.8"
                    r="2.2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </span>
              <div>
                <span className="registration__info-label">Konum</span>
                <span className="registration__info-value">
                  Trabzon Ortahisar Çukurçayır
                  <br />
                  Sınav Koleji Spor Salonu
                </span>
              </div>
            </li>
            <li className="registration__info-item">
              <span className="registration__info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 7.5h14M5 12h14M5 16.5h9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <div>
                <span className="registration__info-label">Programlar</span>
                <span className="registration__info-value">
                  <span className="registration__program">
                    <strong>4–12 Yaş</strong>
                    Gelişim Grubu
                  </span>
                  <span className="registration__program">
                    <strong>12 Yaş ve Üzeri</strong>
                    Performans Grubu
                  </span>
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div className="registration__panel">
          <form
            className="registration__form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-field">
              <label className="form-label" htmlFor={fieldId('parentName')}>
                Veli Adı Soyadı
              </label>
              <input
                id={fieldId('parentName')}
                className={`form-input${errors.parentName ? ' form-input--error' : ''}`}
                name="parentName"
                type="text"
                autoComplete="name"
                value={values.parentName}
                onChange={(e) => updateField('parentName', e.target.value)}
                aria-invalid={Boolean(errors.parentName)}
                aria-describedby={
                  errors.parentName ? errorId('parentName') : undefined
                }
                required
              />
              {errors.parentName ? (
                <p id={errorId('parentName')} className="form-error" role="alert">
                  {errors.parentName}
                </p>
              ) : null}
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor={fieldId('athleteName')}>
                Sporcu Adı Soyadı
              </label>
              <input
                id={fieldId('athleteName')}
                className={`form-input${errors.athleteName ? ' form-input--error' : ''}`}
                name="athleteName"
                type="text"
                autoComplete="off"
                value={values.athleteName}
                onChange={(e) => updateField('athleteName', e.target.value)}
                aria-invalid={Boolean(errors.athleteName)}
                aria-describedby={
                  errors.athleteName ? errorId('athleteName') : undefined
                }
                required
              />
              {errors.athleteName ? (
                <p id={errorId('athleteName')} className="form-error" role="alert">
                  {errors.athleteName}
                </p>
              ) : null}
            </div>

            <div className="form-row">
              <div className="form-field">
                <label className="form-label" htmlFor={fieldId('athleteAge')}>
                  Sporcu Yaşı
                </label>
                <input
                  id={fieldId('athleteAge')}
                  className={`form-input${errors.athleteAge ? ' form-input--error' : ''}`}
                  name="athleteAge"
                  type="number"
                  inputMode="numeric"
                  min={4}
                  max={18}
                  value={values.athleteAge}
                  onChange={(e) => updateField('athleteAge', e.target.value)}
                  aria-invalid={Boolean(errors.athleteAge)}
                  aria-describedby={
                    errors.athleteAge ? errorId('athleteAge') : undefined
                  }
                  required
                />
                {errors.athleteAge ? (
                  <p id={errorId('athleteAge')} className="form-error" role="alert">
                    {errors.athleteAge}
                  </p>
                ) : null}
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor={fieldId('phone')}>
                  Telefon Numarası
                </label>
                <input
                  id={fieldId('phone')}
                  className={`form-input${errors.phone ? ' form-input--error' : ''}`}
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="05XX XXX XX XX"
                  value={values.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? errorId('phone') : undefined}
                  required
                />
                {errors.phone ? (
                  <p id={errorId('phone')} className="form-error" role="alert">
                    {errors.phone}
                  </p>
                ) : null}
              </div>
            </div>

            <fieldset
              className={`form-fieldset${errors.program ? ' form-fieldset--error' : ''}`}
            >
              <legend className="form-label">Program</legend>
              <div
                className="form-options"
                role="radiogroup"
                aria-invalid={Boolean(errors.program)}
                aria-describedby={
                  errors.program ? errorId('program') : undefined
                }
              >
                <label className="form-option">
                  <input
                    id={fieldId('program')}
                    type="radio"
                    name="program"
                    value="gelisim"
                    checked={values.program === 'gelisim'}
                    onChange={() => updateField('program', 'gelisim')}
                    required
                  />
                  <span>4–12 Yaş Gelişim Grubu</span>
                </label>
                <label className="form-option">
                  <input
                    type="radio"
                    name="program"
                    value="performans"
                    checked={values.program === 'performans'}
                    onChange={() => updateField('program', 'performans')}
                  />
                  <span>12 Yaş ve Üzeri Performans Grubu</span>
                </label>
              </div>
              {errors.program ? (
                <p id={errorId('program')} className="form-error" role="alert">
                  {errors.program}
                </p>
              ) : null}
            </fieldset>

            <div className="form-field">
              <label className="form-label" htmlFor={fieldId('note')}>
                Kısa Not <span className="form-optional">(isteğe bağlı)</span>
              </label>
              <textarea
                id={fieldId('note')}
                className="form-input form-textarea"
                name="note"
                rows={3}
                value={values.note}
                onChange={(e) => updateField('note', e.target.value)}
              />
            </div>

            <div className="form-field">
              <label className="form-check" htmlFor={fieldId('consent')}>
                <input
                  id={fieldId('consent')}
                  type="checkbox"
                  name="consent"
                  checked={values.consent}
                  onChange={(e) => updateField('consent', e.target.checked)}
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={
                    errors.consent ? errorId('consent') : undefined
                  }
                  required
                />
                <span>
                  Kişisel bilgilerimin ön kayıt sürecinde iletişim amacıyla
                  kullanılmasını kabul ediyorum.
                </span>
              </label>
              {errors.consent ? (
                <p id={errorId('consent')} className="form-error" role="alert">
                  {errors.consent}
                </p>
              ) : null}
            </div>

            <div className="registration__submit">
              <button
                className="btn btn--gold btn--full registration__submit-btn"
                type="submit"
              >
                WhatsApp ile Ön Kaydı Gönder
              </button>
              <p className="registration__hint">
                Formu tamamladıktan sonra WhatsApp açılır. Mesajı göndererek ön
                kayıt talebinizi iletebilirsiniz.
              </p>
              {whatsappReady ? (
                <p
                  className="registration__ready"
                  role="status"
                  aria-live="polite"
                >
                  Formunuz hazır. WhatsApp açıldığında mesajı göndererek ön kayıt
                  talebinizi tamamlayabilirsiniz.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

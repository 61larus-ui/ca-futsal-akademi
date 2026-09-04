export const AGE_MIN = 4
export const AGE_MAX = 18

export function suggestedProgram(age) {
  if (!Number.isInteger(age)) return null
  if (age >= AGE_MIN && age <= 11) return 'development'
  if (age >= 13 && age <= AGE_MAX) return 'performance'
  return null
}

export function normalizePhoneDigits(value) {
  return String(value ?? '').replace(/[\s()-]/g, '')
}

export function isValidTrMobile(value) {
  let digits = normalizePhoneDigits(value)
  if (digits.startsWith('+90')) digits = digits.slice(3)
  else if (digits.startsWith('90') && digits.length >= 12) digits = digits.slice(2)
  else if (digits.startsWith('0')) digits = digits.slice(1)

  return /^5\d{9}$/.test(digits)
}

export function isValidName(value) {
  return String(value ?? '').trim().length >= 2
}

export function parseAge(value) {
  if (value === '' || value == null) return null
  const age = Number(value)
  if (!Number.isInteger(age)) return null
  return age
}

export function isValidAge(value) {
  const age = parseAge(value)
  return age != null && age >= AGE_MIN && age <= AGE_MAX
}

export function validateRegistration(values) {
  const errors = {}

  if (!isValidName(values.parentName)) {
    errors.parentName = 'Lütfen veli adını girin.'
  }

  if (!isValidName(values.athleteName)) {
    errors.athleteName = 'Lütfen sporcu adını girin.'
  }

  if (!isValidAge(values.age)) {
    errors.age = 'Lütfen geçerli bir yaş girin.'
  }

  if (!isValidTrMobile(values.phone)) {
    errors.phone = 'Lütfen geçerli bir telefon numarası girin.'
  }

  if (!values.program) {
    errors.program = 'Lütfen program seçin.'
  }

  if (!values.consent) {
    errors.consent = 'Devam etmek için iletişim onayını kabul edin.'
  }

  return errors
}

export function buildRegistrationMessage({
  parentName,
  athleteName,
  age,
  phone,
  programLabel,
  note,
}) {
  const lines = [
    'Merhaba, Cemre Atmaca Futsal Akademi için ön kayıt oluşturmak istiyorum.',
    '',
    `Veli Adı Soyadı: ${parentName.trim()}`,
    `Sporcu Adı Soyadı: ${athleteName.trim()}`,
    `Sporcu Yaşı: ${age}`,
    `Telefon: ${phone.trim()}`,
    `Program: ${programLabel}`,
  ]

  const trimmedNote = String(note ?? '').trim()
  if (trimmedNote) {
    lines.push('', 'Kısa Not:', trimmedNote)
  }

  lines.push('', 'Teşekkür ederim.')
  return lines.join('\n')
}

export function buildWhatsAppUrl(whatsappNumber, message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function openWhatsApp(url) {
  const opened = window.open(url, '_blank', 'noopener,noreferrer')
  if (opened == null) {
    window.location.assign(url)
  }
}

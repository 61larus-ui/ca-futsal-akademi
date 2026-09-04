export const REGISTRATION_ID = 'on-kayit'

export function scrollToRegistration() {
  const target = document.getElementById(REGISTRATION_ID)
  if (!target) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({
    behavior: reduceMotion ? 'auto' : 'smooth',
    block: 'start',
  })
}

export function onRegistrationCtaClick(event) {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  if (event.button && event.button !== 0) return

  event.preventDefault()
  scrollToRegistration()
}

import { FOOTER_CONTENT, LOCATION_INFO } from '../../data/home'
import { IMAGES } from '../../data/images'
import { useModals } from '../../context/useModals'
import Container from '../common/Container'
import Logo from '../common/Logo'
import './Footer.css'

export default function Footer() {
  const {
    openAcademy,
    academyDialogId,
    openPrograms,
    programsDialogId,
    openStaff,
    staffDialogId,
  } = useModals()

  function renderFooterAction(item, label, extra) {
    if (item.action === 'open-academy') {
      return (
        <button
          type="button"
          aria-haspopup="dialog"
          aria-controls={academyDialogId}
          onClick={openAcademy}
        >
          {label}
          {extra}
        </button>
      )
    }

    if (item.action === 'open-programs') {
      return (
        <button
          type="button"
          aria-haspopup="dialog"
          aria-controls={programsDialogId}
          onClick={() => openPrograms(item.view || 'selection')}
        >
          {label}
          {extra}
        </button>
      )
    }

    if (item.action === 'open-staff') {
      return (
        <button
          type="button"
          aria-haspopup="dialog"
          aria-controls={staffDialogId}
          onClick={openStaff}
        >
          {label}
          {extra}
        </button>
      )
    }

    return (
      <a href={item.href}>
        {label}
        {extra}
      </a>
    )
  }

  return (
    <footer className="site-footer">
      <img
        className="site-footer__eagle"
        src={IMAGES.eagleDark}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <Container>
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Logo variant="header" />
            <p className="site-footer__intro">{FOOTER_CONTENT.intro}</p>
            <a
              className="site-footer__social"
              href="https://www.instagram.com/atmaca61cemre/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CA Futsal Akademi Instagram hesabını aç"
            >
              <svg
                className="site-footer__social-icon"
                viewBox="0 0 24 24"
                width="14"
                height="14"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
              </svg>
              <span>{FOOTER_CONTENT.instagramLabel}</span>
            </a>
          </div>

          <nav aria-label="Akademi">
            <h2 className="site-footer__title">Akademi</h2>
            <ul className="site-footer__links">
              {FOOTER_CONTENT.academyLinks.map((item) => (
                <li key={item.id}>
                  {renderFooterAction(item, item.label)}
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Programlar">
            <h2 className="site-footer__title">Programlar</h2>
            <ul className="site-footer__links">
              {FOOTER_CONTENT.programLinks.map((item) => (
                <li key={item.id}>
                  {renderFooterAction(
                    item,
                    <span>{item.title}</span>,
                    <small>{item.meta}</small>,
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="site-footer__title">İletişim</h2>
            <ul className="site-footer__contact">
              <li>
                {LOCATION_INFO.city}
                <span>{LOCATION_INFO.venue}</span>
              </li>
              <li>
                <a
                  href={LOCATION_INFO.phone.href}
                  aria-label={LOCATION_INFO.phone.ariaLabel}
                >
                  {LOCATION_INFO.phone.label}
                </a>
              </li>
              <li>
                <a
                  href={LOCATION_INFO.web.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {LOCATION_INFO.web.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>{FOOTER_CONTENT.copyright}</p>
          <p>{FOOTER_CONTENT.rights}</p>
        </div>
      </Container>
    </footer>
  )
}

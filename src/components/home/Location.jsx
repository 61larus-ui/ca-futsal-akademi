import { ArrowRight, Globe, MapPin, Phone } from 'lucide-react'
import { LOCATION_INFO } from '../../data/home'
import Container from '../common/Container'
import './Location.css'

export default function Location() {
  return (
    <section className="location" id="iletisim" aria-labelledby="iletisim-title">
      <Container className="location__grid">
        <div className="location__content">
          <p className="location__eyebrow">{LOCATION_INFO.area}</p>
          <h2 id="iletisim-title" className="location__title">
            <span className="location__title-line">{LOCATION_INFO.titleLead}</span>
            <span className="location__title-line">{LOCATION_INFO.titleAccent}</span>
          </h2>
          <ul className="location__list">
            <li className="location__item">
              <span className="location__icon-slot" aria-hidden="true">
                <MapPin className="location__icon" size={18} strokeWidth={1.9} />
              </span>
              <div>
                <p className="location__label">{LOCATION_INFO.venue}</p>
                {LOCATION_INFO.addressLines.map((line) => (
                  <p key={line} className="location__meta">
                    {line}
                  </p>
                ))}
              </div>
            </li>
            <li className="location__item">
              <span className="location__icon-slot" aria-hidden="true">
                <Phone className="location__icon" size={18} strokeWidth={1.9} />
              </span>
              <div>
                <p className="location__kicker">{LOCATION_INFO.phone.kicker}</p>
                <a
                  href={LOCATION_INFO.phone.href}
                  aria-label={LOCATION_INFO.phone.ariaLabel}
                >
                  {LOCATION_INFO.phone.label}
                </a>
              </div>
            </li>
            <li className="location__item">
              <span className="location__icon-slot" aria-hidden="true">
                <Globe className="location__icon" size={18} strokeWidth={1.9} />
              </span>
              <div>
                <p className="location__kicker">{LOCATION_INFO.web.kicker}</p>
                <a
                  href={LOCATION_INFO.web.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {LOCATION_INFO.web.label}
                </a>
              </div>
            </li>
          </ul>
          <a
            className="location__directions"
            href={LOCATION_INFO.directions.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {LOCATION_INFO.directions.label}
            <ArrowRight size={16} strokeWidth={2.25} aria-hidden="true" />
          </a>
        </div>

        <div className="location__photo-wrap">
          <img
            className="location__photo"
            src={LOCATION_INFO.buildingImage}
            alt={LOCATION_INFO.buildingAlt}
            width="1600"
            height="1000"
            loading="lazy"
            decoding="async"
          />
          <div className="location__badge">
            <img
              className="location__school-logo"
              src={LOCATION_INFO.schoolLogo}
              alt=""
              width="120"
              height="160"
              loading="lazy"
              decoding="async"
            />
            <p>{LOCATION_INFO.venueLabel}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

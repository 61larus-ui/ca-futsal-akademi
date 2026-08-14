import './Footer.css'

const PHONE_HREF = 'tel:+905400010462'
const WEB_HREF = 'https://www.cafutsalakademi.com'

export function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <img
            className="site-footer__logo"
            src="/images/ca-futsal-logo.png"
            alt="CA Futsal Akademi"
            width={120}
            height={120}
          />
          <div className="site-footer__brand-text">
            <p className="site-footer__name">Cemre Atmaca Futsal Akademi</p>
            <p className="site-footer__tagline">Disiplin • Karakter • Başarı</p>
          </div>
        </div>

        <ul className="site-footer__meta">
          <li>
            <span className="site-footer__label">İletişim</span>
            <a href={PHONE_HREF}>+90 540 001 0462</a>
          </li>
          <li>
            <span className="site-footer__label">Konum</span>
            <span>
              Trabzon Ortahisar Çukurçayır
              <br />
              Sınav Koleji Spor Salonu
            </span>
          </li>
          <li>
            <span className="site-footer__label">Web</span>
            <a href={WEB_HREF} target="_blank" rel="noopener noreferrer">
              www.cafutsalakademi.com
            </a>
          </li>
        </ul>

        <p className="site-footer__copy">
          © 2026 Cemre Atmaca Futsal Akademi. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  )
}

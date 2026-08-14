import './Hero.css'

const PHONE_HREF = 'tel:+905400010462'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero__atmosphere" aria-hidden="true">
        <div className="hero__gradient" />
        <div className="hero__glow" />
        <div className="hero__texture" />
        <svg
          className="hero__court"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="courtStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4A017" stopOpacity="0.22" />
              <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#D4A017" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <rect
            x="120"
            y="90"
            width="960"
            height="620"
            rx="8"
            fill="none"
            stroke="url(#courtStroke)"
            strokeWidth="1.5"
          />
          <line
            x1="600"
            y1="90"
            x2="600"
            y2="710"
            stroke="url(#courtStroke)"
            strokeWidth="1.25"
          />
          <circle
            cx="600"
            cy="400"
            r="78"
            fill="none"
            stroke="url(#courtStroke)"
            strokeWidth="1.25"
          />
          <rect
            x="120"
            y="260"
            width="150"
            height="280"
            fill="none"
            stroke="url(#courtStroke)"
            strokeWidth="1.25"
          />
          <rect
            x="930"
            y="260"
            width="150"
            height="280"
            fill="none"
            stroke="url(#courtStroke)"
            strokeWidth="1.25"
          />
          <line
            x1="80"
            y1="160"
            x2="220"
            y2="160"
            stroke="#D4A017"
            strokeOpacity="0.28"
            strokeWidth="1"
          />
          <line
            x1="980"
            y1="640"
            x2="1120"
            y2="640"
            stroke="#D4A017"
            strokeOpacity="0.22"
            strokeWidth="1"
          />
        </svg>
        <img
          className="hero__watermark"
          src="/images/ca-futsal-logo.png"
          alt=""
          width={640}
          height={800}
          decoding="async"
        />
      </div>

      <div className="container hero__content">
        <p className="hero__brand-label">CA Futsal Akademi</p>

        <h1 id="hero-heading" className="hero__title">
          <span className="hero__title-line">GELECEĞİN</span>
          <span className="hero__title-line hero__title-line--accent">
            ŞAMPİYONLARINI
          </span>
          <span className="hero__title-line">YETİŞTİRİYORUZ.</span>
        </h1>

        <p className="hero__lead">
          4–12 yaş gelişim grubu ve 12 yaş üzeri performans grubu için futsal
          temelli profesyonel eğitim.
        </p>

        <p className="hero__pillars">
          Teknik gelişim <span aria-hidden="true">•</span> Oyun zekâsı{' '}
          <span aria-hidden="true">•</span> Fiziksel gelişim{' '}
          <span aria-hidden="true">•</span> Karakter
        </p>

        <div className="hero__cta">
          <a className="btn btn--gold" href="#kayit">
            Kayıt Yap
          </a>
          <a className="btn btn--outline" href={PHONE_HREF}>
            Şimdi Ara
          </a>
        </div>

        <div className="hero__trust">
          <p className="hero__location-city">
            TRABZON • ORTAHİSAR • ÇUKURÇAYIR
          </p>
          <p className="hero__location-place">Sınav Koleji Spor Salonu</p>
        </div>
      </div>
    </section>
  )
}

import './AcademyIntro.css'

const pillars = [
  {
    title: 'TEKNİK',
    items: 'Top hâkimiyeti • Pas • Şut • 1v1',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="10.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 5.5v21M5.5 16h21" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M9.2 9.2c2.2 1.4 4.5 2.1 6.8 2.1s4.6-.7 6.8-2.1"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    title: 'OYUN ZEKÂSI',
    items: 'Algılama • Karar verme • Pozisyon',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="13" r="5.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M10 25.5c1.2-3.4 3.4-5 6-5s4.8 1.6 6 5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M22.5 8.5 25 6M25.5 13h3M22.5 17.5 25 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'FİZİKSEL GELİŞİM',
    items: 'Koordinasyon • Çeviklik • Denge',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M11 8.5h10M16 8.5v6.5M11.5 24.5 16 15l4.5 9.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 12.5 6 18M23.5 12.5 26 18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'KARAKTER',
    items: 'Disiplin • Özgüven • Takım ruhu',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 6.5 24.5 10v6.2c0 5.1-3.5 8.4-8.5 9.8-5-1.4-8.5-4.7-8.5-9.8V10L16 6.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="m12.5 16.2 2.4 2.4 4.6-4.8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export function AcademyIntro() {
  return (
    <section
      id="akademi"
      className="section section-block academy"
      aria-labelledby="academy-heading"
    >
      <div className="container">
        <header className="academy__header">
          <p className="section-eyebrow">CA FUTSAL AKADEMİ</p>
          <h2 id="academy-heading" className="section-title">
            SADECE FUTBOL ÖĞRETMİYORUZ.
          </h2>
          <p className="section-lead">
            Futsal; dar alanda hızlı düşünmeyi, doğru karar vermeyi ve topa daha
            fazla temas etmeyi gerektiren dinamik bir takım sporudur.
          </p>
          <p className="section-lead">
            Cemre Atmaca Futsal Akademi&apos;de çocukların yalnızca teknik
            becerilerini değil; fiziksel, zihinsel ve sosyal gelişimlerini de
            destekleyen bütüncül bir eğitim modeli uyguluyoruz.
          </p>
        </header>

        <ul className="academy__grid">
          {pillars.map((pillar) => (
            <li key={pillar.title} className="academy__card">
              <span className="academy__icon" aria-hidden="true">
                {pillar.icon}
              </span>
              <h3 className="academy__card-title">{pillar.title}</h3>
              <p className="academy__card-items">{pillar.items}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

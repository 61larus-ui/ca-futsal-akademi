import './Programs.css'

const programs = [
  {
    age: '4–12 YAŞ',
    name: 'GELİŞİM GRUBU',
    description:
      'Teknik gelişim, koordinasyon, oyun zekâsı ve takım ruhunu birlikte geliştiren modern futsal eğitim modeli.',
    items: [
      'Top kontrolü',
      'Pas ve şut',
      '1v1 becerileri',
      'Koordinasyon',
      'Çeviklik ve denge',
      'Oyun zekâsı',
      'Takım ruhu',
      'Disiplin ve özgüven',
    ],
  },
  {
    age: '12 YAŞ VE ÜZERİ',
    name: 'PERFORMANS GRUBU',
    description:
      'Teknik, fiziksel ve zihinsel performansını daha ileri taşımak isteyen sporcular için yoğunlaştırılmış gelişim programı.',
    items: [
      'İleri teknik çalışma',
      'Oyun içi karar verme',
      'Pozisyon bilgisi',
      'Fiziksel gelişim',
      'Performans odaklı çalışma',
      'Disiplin',
      'Takım oyunu',
    ],
  },
]

export function Programs() {
  return (
    <section
      id="egitim"
      className="section section-block programs"
      aria-labelledby="programs-heading"
    >
      <div className="container">
        <header className="programs__header">
          <p className="section-eyebrow">EĞİTİM PROGRAMLARIMIZ</p>
          <h2 id="programs-heading" className="section-title">
            HER YAŞA UYGUN, DOĞRU GELİŞİM YOLU.
          </h2>
        </header>

        <div className="programs__grid">
          {programs.map((program) => (
            <article key={program.name} className="programs__card">
              <div className="programs__card-top">
                <p className="programs__age">{program.age}</p>
                <h3 className="programs__name">{program.name}</h3>
                <p className="programs__desc">{program.description}</p>
              </div>

              <ul className="programs__list">
                {program.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <a className="btn btn--gold programs__cta" href="#kayit">
                Kayıt Yap
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

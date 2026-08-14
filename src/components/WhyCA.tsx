import './WhyCA.css'

const values = [
  {
    title: 'TEKNİK VE TAKTİK EĞİTİM',
    text: 'Doğru teknik temel ve oyun içi karar verme becerisi kazanır.',
  },
  {
    title: 'FİZİKSEL GELİŞİM',
    text: 'Koordinasyon, çeviklik, denge ve hareket kalitesi gelişir.',
  },
  {
    title: 'ZİHİNSEL GELİŞİM',
    text: 'Algılama, özgüven ve odaklanma güçlenir.',
  },
  {
    title: 'SAĞLIKLI YAŞAM',
    text: 'Doğru alışkanlıklar ve sürdürülebilir spor kültürü oluşur.',
  },
  {
    title: 'DİSİPLİN VE KARAKTER GELİŞİMİ',
    text: 'Saygı, sorumluluk, takım ruhu ve mücadele gücü pekişir.',
  },
]

export function WhyCA() {
  return (
    <section
      id="neden"
      className="section section-block why"
      aria-labelledby="why-heading"
    >
      <div className="container">
        <header className="why__header">
          <p className="section-eyebrow">NEDEN CA FUTSAL?</p>
          <h2 id="why-heading" className="section-title">
            GELİŞİMİ SADECE SAHAYLA SINIRLAMIYORUZ.
          </h2>
          <p className="section-lead">
            Çocuğunuzun gelişimi; teknik, fiziksel, zihinsel ve sosyal alanların
            birlikte ilerlemesiyle mümkün olur.
          </p>
        </header>

        <ul className="why__grid">
          {values.map((value) => (
            <li key={value.title} className="why__item">
              <h3 className="why__item-title">{value.title}</h3>
              <p className="why__item-text">{value.text}</p>
            </li>
          ))}
        </ul>

        <p className="why__motto" aria-label="Temel ilkeler">
          <span>PLANLI</span>
          <span aria-hidden="true">•</span>
          <span>DİSİPLİNLİ</span>
          <span aria-hidden="true">•</span>
          <span>BİLİMSEL</span>
          <span aria-hidden="true">•</span>
          <span>BÜTÜNCÜL</span>
        </p>
      </div>
    </section>
  )
}

import './Founder.css'

const principles = [
  {
    title: 'VİZYONUMUZ',
    text: 'Futsalda öncü, örnek ve güvenilir bir akademi olmak.',
  },
  {
    title: 'MİSYONUMUZ',
    text: 'Çocukların potansiyelini en üst düzeye çıkararak onlara sağlam bir sportif gelecek sunmak.',
  },
  {
    title: 'DEĞERLERİMİZ',
    text: 'Disiplin • Saygı • Azim • Takım ruhu • Adalet • Sürekli gelişim',
  },
]

export function Founder() {
  return (
    <section
      id="cemre-atmaca"
      className="section section-block founder"
      aria-labelledby="founder-heading"
    >
      <div className="container">
        <div className="founder__layout">
          <figure className="founder__media">
            <div className="founder__frame">
              <img
                className="founder__photo"
                src="/images/cemre-atmaca.jpg"
                alt="Cemre Atmaca, CA Futsal Akademi Kurucu ve Koordinatör"
                width={720}
                height={900}
                loading="lazy"
                decoding="async"
              />
            </div>
          </figure>

          <div className="founder__content">
            <p className="section-eyebrow">KURUCU • KOORDİNATÖR</p>
            <h2 id="founder-heading" className="section-title founder__title">
              SAHADAN GELECEĞE
              <br />
              UZANAN BİR FUTBOL HİKÂYESİ.
            </h2>

            <div className="founder__identity">
              <p className="founder__name">CEMRE ATMACA</p>
              <p className="founder__role">Kurucu • Koordinatör</p>
            </div>

            <div className="founder__story">
              <p>
                1985 yılında Trabzon&apos;da doğan Cemre Atmaca&apos;nın futbol
                yolculuğu Trabzon Telekomspor&apos;da başladı. Yeteneği kısa
                sürede Trabzonspor&apos;un dikkatini çekti ve 2002 yılında
                bordo-mavili kulübün altyapısına katıldı.
              </p>
              <p>
                Altyapıdan A takıma uzanan kariyerinde Süper Lig atmosferini
                yaşadı; Arsinspor, Sarıyer, Fethiyespor, Cizrespor, Malatya
                Yeşilyurt ve Çankaya SK gibi farklı kulüplerde mücadele etti.
              </p>
              <p>
                Türkiye U18 Milli Takımı seviyesine kadar yükselerek ay-yıldızlı
                formayı taşıdı.
              </p>
              <p>
                Farklı şehirlerde ve kulüplerde edindiği tecrübe; disiplin,
                mücadele, takım ruhu ve doğru karar vermenin profesyonel
                sporculuğun temel parçaları olduğunu gösterdi.
              </p>
              <p className="founder__highlight">
                Bugün bu birikimini CA Futsal Akademi ile yeni nesil sporculara
                aktarıyor.
              </p>
            </div>
          </div>
        </div>

        <ul className="founder__principles">
          {principles.map((item) => (
            <li key={item.title} className="founder__principle">
              <h3 className="founder__principle-title">{item.title}</h3>
              <p className="founder__principle-text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

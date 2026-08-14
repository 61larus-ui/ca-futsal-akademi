import './TeamApproach.css'

const specialties = [
  {
    title: 'TEKNİK DİREKTÖR',
    text: 'Teknik ve sportif gelişim',
    coaches: ['1. ANTRENÖR', '2. ANTRENÖR', '3. ANTRENÖR'],
  },
  {
    title: 'PSİKOLOG',
    text: 'Zihinsel ve psikolojik gelişim',
  },
  {
    title: 'DİYETİSYEN',
    text: 'Doğru beslenme alışkanlıkları',
  },
  {
    title: 'FİZYOTERAPİST',
    text: 'Fiziksel sağlık ve koruyucu yaklaşım',
  },
  {
    title: 'HALKLA İLİŞKİLER',
    text: 'Sporcu, veli ve akademi iletişimi',
  },
]

export function TeamApproach() {
  return (
    <section
      id="ekip"
      className="section section-block team"
      aria-labelledby="team-heading"
    >
      <div className="container">
        <header className="team__header">
          <p className="section-eyebrow">EĞİTİM MODELİMİZ</p>
          <h2 id="team-heading" className="section-title">
            ÇOCUĞUNUZUN GELİŞİMİ
            <br />
            BİR EKİP İŞİDİR.
          </h2>
          <p className="section-lead">
            Her sporcuya teknik, fiziksel, zihinsel, beslenme ve sosyal gelişimi
            birlikte ele alan çok yönlü bir yaklaşım sunuyoruz.
          </p>
        </header>

        <div className="team__structure">
          <article className="team__coordinator">
            <p className="team__role">KOORDİNATÖR</p>
            <h3 className="team__name">CEMRE ATMACA</h3>
          </article>

          <div className="team__connector" aria-hidden="true" />

          <ul className="team__specialties">
            {specialties.map((item) => (
              <li key={item.title} className="team__specialty">
                <div className="team__specialty-main">
                  <span className="team__specialty-mark" aria-hidden="true" />
                  <h3 className="team__specialty-title">{item.title}</h3>
                  <p className="team__specialty-text">{item.text}</p>
                </div>

                {item.coaches ? (
                  <ul className="team__coaches">
                    {item.coaches.map((coach) => (
                      <li key={coach} className="team__coach">
                        {coach}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        <p className="team__motto" aria-label="Temel ilkeler">
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

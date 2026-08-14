import './TopBar.css'

const PHONE_HREF = 'tel:+905400010462'

export function TopBar() {
  return (
    <header className="topbar" role="banner">
      <div className="container topbar__inner">
        <a className="topbar__brand" href="#top" aria-label="CA Futsal Akademi">
          <img
            className="topbar__logo"
            src="/images/ca-futsal-logo.png"
            alt="CA Futsal Akademi"
          />
        </a>

        <div className="topbar__actions">
          <a className="btn btn--outline btn--compact" href={PHONE_HREF}>
            Şimdi Ara
          </a>
          <a className="btn btn--gold btn--compact" href="#kayit">
            Kayıt Yap
          </a>
        </div>
      </div>
    </header>
  )
}

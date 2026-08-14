import './MobileStickyBar.css'

const PHONE_HREF = 'tel:+905400010462'

export function MobileStickyBar() {
  return (
    <div className="mobile-cta" role="region" aria-label="Hızlı iletişim">
      <div className="mobile-cta__inner">
        <a className="btn btn--outline btn--full" href={PHONE_HREF}>
          Şimdi Ara
        </a>
        <a className="btn btn--gold btn--full" href="#kayit">
          Kayıt Yap
        </a>
      </div>
    </div>
  )
}

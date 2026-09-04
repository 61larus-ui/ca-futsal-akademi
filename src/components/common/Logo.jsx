import { Link } from 'react-router-dom'
import { IMAGES } from '../../data/images'
import './Logo.css'

export default function Logo({ variant = 'on-dark' }) {
  const src = variant === 'on-light' ? IMAGES.logoDark : IMAGES.logoLight

  return (
    <Link
      to="/"
      className={`site-logo site-logo--${variant}`}
      aria-label="CA Futsal Akademi ana sayfa"
    >
      <img
        className="site-logo__image"
        src={src}
        alt=""
        width="160"
        height="192"
      />
    </Link>
  )
}

import { Link } from 'react-router-dom'
import { IMAGES } from '../../data/images'
import './Logo.css'

export default function Logo({ variant = 'on-dark' }) {
  const isHeader = variant === 'header'
  const src = isHeader
    ? IMAGES.logoHeader
    : variant === 'on-light'
      ? IMAGES.logoDark
      : IMAGES.logoLight

  return (
    <Link
      to="/"
      className={`site-logo site-logo--${variant}`}
      aria-label="CA Futsal Akademi ana sayfa"
    >
      <img
        className="site-logo__image"
        src={src}
        alt={isHeader ? 'CA Futsal Akademi' : ''}
        width={isHeader ? '2039' : '160'}
        height={isHeader ? '771' : '192'}
      />
    </Link>
  )
}

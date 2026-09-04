import { ArrowRight } from 'lucide-react'
import { HERO_CONTENT } from '../../data/home'
import { IMAGES } from '../../data/images'
import { useModals } from '../../context/useModals'
import Button from '../common/Button'
import Container from '../common/Container'
import './Hero.css'

export default function Hero() {
  const { openAcademy, academyDialogId, openRegistration, registrationDialogId } = useModals()

  return (
    <section className="hero" id="hero" aria-labelledby="hero-title">
      <img
        className="hero__eagle-watermark"
        src={IMAGES.eagleDark}
        alt=""
        aria-hidden="true"
        loading="lazy"
      />
      <div className="hero__figure">
        <img
          className="hero__photo"
          src={HERO_CONTENT.image}
          alt={HERO_CONTENT.imageAlt}
          width="1600"
          height="1067"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="hero__overlay" aria-hidden="true" />

      <Container className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">{HERO_CONTENT.eyebrow}</p>
          <h1 id="hero-title" className="hero__title">
            <span className="hero__title-line">{HERO_CONTENT.titleLead}</span>
            <span className="hero__title-line hero__title-line--accent">
              {HERO_CONTENT.titleAccent}
            </span>
          </h1>
          <p className="hero__lead">{HERO_CONTENT.description}</p>
          <div className="hero__actions">
            <Button
              aria-haspopup="dialog"
              aria-controls={registrationDialogId}
              onClick={openRegistration}
            >
              {HERO_CONTENT.primaryCta.label}
              <ArrowRight size={18} strokeWidth={2.25} aria-hidden="true" />
            </Button>
            <Button
              variant="ghost"
              aria-haspopup="dialog"
              aria-controls={academyDialogId}
              onClick={openAcademy}
            >
              {HERO_CONTENT.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>

      <div className="hero__edge" aria-hidden="true" />
    </section>
  )
}

import { FOUNDER } from '../../data/home'
import { IMAGES } from '../../data/images'
import Container from '../common/Container'
import './Founder.css'

export default function Founder() {
  return (
    <section className="founder" id={FOUNDER.id} aria-labelledby="founder-title">
      <Container className="founder__grid">
        <div className="founder__media">
          <img
            className="founder__eagle"
            src={IMAGES.eagleDark}
            alt=""
            aria-hidden="true"
            loading="lazy"
          />
          <img
            className="founder__photo"
            src={FOUNDER.image}
            alt={FOUNDER.imageAlt}
            width="800"
            height="1000"
            loading="lazy"
            decoding="async"
          />
          <div className="founder__fx" aria-hidden="true">
            <span className="founder__frame" />
            <span className="founder__glow" />
          </div>
        </div>

        <div className="founder__content">
          <p className="founder__eyebrow">{FOUNDER.role}</p>
          <h2 id="founder-title" className="founder__title">
            {FOUNDER.name}
          </h2>
          <p className="founder__lead">{FOUNDER.lead}</p>
          {FOUNDER.paragraphs.map((paragraph) => (
            <p key={paragraph} className="founder__text">
              {paragraph}
            </p>
          ))}
          <ul className="founder__stats">
            {FOUNDER.stats.map((stat) => (
              <li key={stat.id} className="founder__stat">
                <p className="founder__stat-value">{stat.value}</p>
                <p className="founder__stat-label">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

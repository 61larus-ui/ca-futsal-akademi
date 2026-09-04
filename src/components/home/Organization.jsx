import { ORGANIZATION_STRUCTURE } from '../../data/home'
import Container from '../common/Container'
import './Organization.css'

export default function Organization() {
  const { coordinator, technicalDirector, publicRelations, healthSupport } = ORGANIZATION_STRUCTURE

  return (
    <section className="organization" id="organizasyon" aria-labelledby="organizasyon-title">
      <Container>
        <h2 id="organizasyon-title" className="visually-hidden">
          Organizasyon yapısı
        </h2>
        <p className="section-kicker" aria-hidden="true">
          Organizasyon
        </p>
        <div className="organization__tree">
          <div className="organization__lead">
            <article
              className="organization__card organization__card--lead"
              aria-labelledby="org-coordinator-name"
            >
              <p className="organization__card-label">{coordinator.title}</p>
              <h3 id="org-coordinator-name" className="organization__card-name">
                {coordinator.name}
              </h3>
            </article>
          </div>

          <div className="organization__units">
            <section className="organization__unit" aria-labelledby="org-unit-tech">
              <article className="organization__card organization__card--unit organization__card--named">
                <p className="organization__card-label">{technicalDirector.title}</p>
                <h3 id="org-unit-tech" className="organization__card-name organization__card-name--unit">
                  {technicalDirector.name}
                </h3>
              </article>
              <ul className="organization__roles" aria-label="Teknik Direktör altında">
                {technicalDirector.coaches.map((coach) => (
                  <li key={coach} className="organization__card organization__card--role">
                    {coach}
                  </li>
                ))}
              </ul>
            </section>

            <section
              className="organization__unit organization__unit--leaf"
              aria-labelledby="org-unit-pr"
            >
              <article className="organization__card organization__card--unit">
                <h3 id="org-unit-pr" className="organization__card-heading">
                  {publicRelations.title}
                </h3>
              </article>
            </section>

            <section className="organization__unit" aria-labelledby="org-unit-health">
              <article className="organization__card organization__card--unit">
                <h3 id="org-unit-health" className="organization__card-heading">
                  {healthSupport.title}
                </h3>
              </article>
              <ul className="organization__roles" aria-label="Sağlık ve Destek altında">
                {healthSupport.roles.map((role) => (
                  <li key={role} className="organization__card organization__card--role">
                    {role}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </Container>
    </section>
  )
}

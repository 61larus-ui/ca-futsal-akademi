import { TECHNICAL_STAFF } from '../../data/home'
import Container from '../common/Container'
import StaffCard from './StaffCard'
import './TechnicalStaff.css'

export default function TechnicalStaff() {
  return (
    <section className="technical-staff" id="teknik-kadro" aria-labelledby="teknik-kadro-title">
      <Container>
        <h2 id="teknik-kadro-title" className="visually-hidden">
          Teknik kadro
        </h2>
        <p className="section-kicker" aria-hidden="true">
          Teknik kadro
        </p>
        <div className="technical-staff__grid">
          {TECHNICAL_STAFF.map((member) => (
            <StaffCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </section>
  )
}

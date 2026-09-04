import Container from '../common/Container'
import RegistrationForm from './RegistrationForm'
import './Registration.css'

export default function Registration() {
  return (
    <section className="registration" id="on-kayit" aria-labelledby="on-kayit-title">
      <Container>
        <RegistrationForm headingId="on-kayit-title" />
      </Container>
    </section>
  )
}

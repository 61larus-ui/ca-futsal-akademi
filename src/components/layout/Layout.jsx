import { Outlet } from 'react-router-dom'
import { ModalsProvider } from '../../context/ModalsContext'
import { useModals } from '../../context/useModals'
import AcademyModal from '../common/AcademyModal'
import ContactModal from '../common/ContactModal'
import ProgramsModal from '../common/ProgramsModal'
import RegistrationModal from '../common/RegistrationModal'
import TechnicalStaffModal from '../common/TechnicalStaffModal'
import WhyFutsalModal from '../common/WhyFutsalModal'
import Footer from './Footer'
import Header from './Header'

export default function Layout() {
  return (
    <ModalsProvider>
      <LayoutChrome />
    </ModalsProvider>
  )
}

function LayoutChrome() {
  const {
    academyOpen,
    academyDialogId,
    closeAcademy,
    programsOpen,
    programsView,
    programsDialogId,
    closePrograms,
    setProgramsView,
    staffOpen,
    staffDialogId,
    closeStaff,
    contactOpen,
    contactDialogId,
    closeContact,
    registrationOpen,
    registrationDialogId,
    closeRegistration,
    whyFutsalOpen,
    whyFutsalDialogId,
    closeWhyFutsal,
  } = useModals()

  return (
    <>
      <a className="skip-link" href="#main-content">
        İçeriğe geç
      </a>
      <Header />
      <main id="main-content" className="site-main">
        <Outlet />
      </main>
      <Footer />
      <AcademyModal
        id={academyDialogId}
        open={academyOpen}
        onClose={closeAcademy}
      />
      <ProgramsModal
        id={programsDialogId}
        open={programsOpen}
        view={programsView}
        onViewChange={setProgramsView}
        onClose={closePrograms}
      />
      <TechnicalStaffModal
        id={staffDialogId}
        open={staffOpen}
        onClose={closeStaff}
      />
      <ContactModal
        id={contactDialogId}
        open={contactOpen}
        onClose={closeContact}
      />
      <RegistrationModal
        id={registrationDialogId}
        open={registrationOpen}
        onClose={closeRegistration}
      />
      <WhyFutsalModal
        id={whyFutsalDialogId}
        open={whyFutsalOpen}
        onClose={closeWhyFutsal}
      />
    </>
  )
}

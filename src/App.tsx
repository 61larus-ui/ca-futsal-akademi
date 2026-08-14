import { TopBar } from './components/TopBar'
import { Hero } from './components/Hero'
import { AcademyIntro } from './components/AcademyIntro'
import { Programs } from './components/Programs'
import { WhyCA } from './components/WhyCA'
import { TeamApproach } from './components/TeamApproach'
import { Founder } from './components/Founder'
import { Registration } from './components/Registration'
import { Footer } from './components/Footer'
import { MobileStickyBar } from './components/MobileStickyBar'

function App() {
  return (
    <div className="app">
      <TopBar />
      <main>
        <Hero />
        <AcademyIntro />
        <Programs />
        <WhyCA />
        <TeamApproach />
        <Founder />
        <Registration />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  )
}

export default App

import Founder from '../components/home/Founder'
import Hero from '../components/home/Hero'
import Location from '../components/home/Location'
import QuickInfo from '../components/home/QuickInfo'
import Registration from '../components/home/Registration'

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickInfo />
      <Founder />
      <Registration />
      <Location />
    </>
  )
}

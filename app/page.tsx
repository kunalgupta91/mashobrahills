import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Location from '@/components/Location'
import DevelopmentStatus from '@/components/DevelopmentStatus'
import Investment from '@/components/Investment'
import Gallery from '@/components/Gallery'
import Legal from '@/components/Legal'
import Proposal from '@/components/Proposal'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Location />
      <DevelopmentStatus />
      <Investment />
      <Gallery />
      <Legal />
      <Proposal />
      <Contact />
      <Footer />
    </main>
  )
}

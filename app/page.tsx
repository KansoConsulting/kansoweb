import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Methodology from '@/components/Methodology'
import Separator from '@/components/Separator'
import Works from '@/components/Works'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Methodology />
      <Separator />
      <Works />
      <ContactForm />
      <Footer />
    </main>
  )
}


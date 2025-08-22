import { About } from "./_components/about"
import { Hero } from "./_components/hero"
import Projects from "./_components/projects"
import { Services } from "./_components/services"
import { Tours } from "./_components/tours"
import { Footer } from "./_components/footer"
import CheckVaa from "./_components/checkVaa"
import { ParallaxWrapper } from "./_components/ParallaxWrapper"
// import FooterDev from "./_components/footer-dev"
import WhatsappWrapper from "./_components/whatsapp-wrapper"
import HeroSection from "./_components/HeroSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ParallaxWrapper>
        <Projects />
      </ParallaxWrapper>
      <Hero />
      <About />
      {/* Envolve apenas os componentes que devem ter o botão do WhatsApp */}
      <WhatsappWrapper>
        <Tours />
        <Services />
        <CheckVaa />
        <Footer />
        {/* <FooterDev /> */}
      </WhatsappWrapper>
    </main>
  )
}

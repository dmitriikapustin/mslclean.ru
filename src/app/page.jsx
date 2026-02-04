import { 
  Header, 
  Footer 
} from '@/components/organisms'

import {
  HeroSection,
  ProblemsSection,
  SolutionSection,
  USPSection,
  HowItWorksSection,
  GallerySection,
  CTASection,
} from '@/components/templates'

/**
 * MSL Clean - Landing Page
 * Аутстафинг клинингового персонала
 */
export default function HomePage() {
  return (
    <>
      <Header />
      
      <main>
        <HeroSection />
        <ProblemsSection />
        <SolutionSection />
        <USPSection />
        <HowItWorksSection />
        <GallerySection />
        <CTASection />
      </main>
      
      <Footer />
    </>
  )
}

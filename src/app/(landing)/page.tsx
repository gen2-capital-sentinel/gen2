import { LandingHeader } from './components/LandingHeader';
import { LandingFooter } from './components/LandingFooter';
import { DisclaimerModal } from './components/DisclaimerModal';
import { ClientCarousel } from './components/ClientCarousel';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';

export default function LandingPage() {
  return (
    <>
      <LandingHeader />
      <main>
        <Hero />
        <About />
        <Features />
        <ClientCarousel />
      </main>
      <LandingFooter />
      <DisclaimerModal />
    </>
  );
}

import { Header } from '../components/Header';
import { HeroSection } from "../components/HeroSection";
import { SpecialsSection } from "../components/SpecialsSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { AboutSection } from "../components/AboutSection";
import { Footer } from '../components/Footer';

export const HomePage = ({ navLinks, specials, testimonials }) => (
  <>
    <Header navLinks={navLinks} />
    <main>
      <HeroSection />
      <SpecialsSection specials={specials} />
      <TestimonialsSection testimonials={testimonials} />
      <AboutSection />
    </main>
    <Footer navLinks={navLinks} />
  </>
);
import { HeroSection } from "./HeroSection";
import { SpecialsSection } from "./SpecialsSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { AboutSection } from "./AboutSection";

export const Main = ({
  specials,
  testimonials
}) => {
  return (
    <main>
      <HeroSection />
      <SpecialsSection specials={specials} />
      <TestimonialsSection testimonials={testimonials} />
      <AboutSection />
    </main>
  )
}
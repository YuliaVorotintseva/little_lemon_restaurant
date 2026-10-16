import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer';

export const HomePage = ({ navLinks, specials, testimonials }) => (
  <>
    <Header navLinks={navLinks} />
    <Main
      specials={specials}
      testimonials={testimonials}
    />
    <Footer navLinks={navLinks} />
  </>
);
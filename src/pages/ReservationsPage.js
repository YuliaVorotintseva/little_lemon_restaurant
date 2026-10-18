import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ReservationsSection } from "../components/ReservationsSection";

export const ReservationsPage = ({ navLinks }) => {
  return (
    <>
      <Header navLinks={navLinks} />
      <main>
        <ReservationsSection />
      </main>
      <Footer navLinks={navLinks} />
    </>
  )
}
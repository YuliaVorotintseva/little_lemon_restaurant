import { useLocation } from "react-router"
import { useState } from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ConfirmedBooking } from "../components/ConfirmedBooking";
import { Modal } from "../components/ui/Modal";

export const ConfirmationPage = ({ navLinks }) => {
  const location = useLocation();
  const { date, time, numberOfGuests, occasion } = location.state;
  const [isOpen, setIsOpen] = useState(false);


  return (
    <main>
      <Header navLinks={navLinks} />
      <ConfirmedBooking
        date={date}
        time={time}
        numberOfGuests={numberOfGuests}
        occasion={occasion}
        onConfirm={() => setIsOpen(true)}
      />
      <Footer navLinks={navLinks} />
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          text="Confirmation is successful!"
        />
      )}
    </main>
  )
}
import { useState } from "react";

import { ReservationsContext } from './ReservationsContext';

export const ReservationsProvider = ({ children }) => {
  const [reservations, setReservations] = useState([]);
  const addNewReservation = reservation => setReservations([...reservations, reservation]);

  return (
    <ReservationsContext.Provider value={{ reservations, addNewReservation }}>
      {children}
    </ReservationsContext.Provider>
  )
}
import { useState, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { BookingForm } from "../components/BookingForm";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const initializeTimes = () => [
  "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
];

export const updateTimes = (state, action) => {
  return initializeTimes();
}

export const BookingPage = ({ navLinks }) => {
  const [reservations, setReservations] = useState([]);
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  useEffect(() => {
    console.log("Add ne reservation");
    console.log(Date.now())
  }, [reservations]);

  const ReservationItem = ({ date, time, numberOfGuests, occasion }) => (
    <div>
      <h3>{occasion}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <p>{numberOfGuests}</p>
    </div>
  )

  return (
    <>
      <Header navLinks={navLinks} />
      <main>
        {
          reservations.length > 0 && reservations.map(reservation => (
            <ReservationItem
              key={uuidv4()}
              date={reservation.date}
              time={reservation.time}
              numberOfGuests={reservation.numberOfGuests}
              occasion={reservation.occasion}
            />
          ))
        }
        <BookingForm
          availableTimes={availableTimes}
          addNewReservation={reservation => setReservations([...reservations, reservation])}
          updateTimes={dispatch}
        />
      </main>
      <Footer navLinks={navLinks} />
    </>
  )
}
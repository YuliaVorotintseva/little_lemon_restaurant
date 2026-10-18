import { Button } from "./ui/Button"
import { useReservations } from "../shared/reservation_context/useReservations";
import { submitAPI } from "../api";

import styles from "./ConfirmedBooking.module.css"

export const ConfirmedBooking = ({
  date, time, numberOfGuests, occasion, onConfirm
}) => {
  const { addNewReservation } = useReservations();

  return (
    <div className={styles.confirmed_data}>
      <h1>Booking data</h1>
      <h3>Check the provided data</h3>
      <div>
        <p>{`Date: ${date}`}</p>
        <p>{`Time: ${time}`}</p>
        <p>{`Number of guests: ${numberOfGuests}`}</p>
        <p>{`Occasion: ${occasion}`}</p>
      </div>
      <Button
        text="Confirm"
        onClick={() => {
          const isSubmited = submitAPI({ date, time, numberOfGuests, occasion });

          if (isSubmited) {
            addNewReservation({ date, time, numberOfGuests, occasion });
            onConfirm();
          } else {
            alert("Error!");
          }
        }}
      />
    </div>
  )
}
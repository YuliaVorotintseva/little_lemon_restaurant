import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";

import { useReservations } from "../shared/reservation_context/useReservations";
import { Button } from "../components/ui/Button";

import styles from "./ReservationsSection.module.css";

export const ReservationsSection = () => {
  const navigate = useNavigate();
  const { reservations } = useReservations();

  const ReservationItem = ({ date, time, numberOfGuests, occasion }) => (
    <article className={styles.reservation}>
      <h3>{`Occasion: ${occasion}`}</h3>
      <p>{`Date: ${date}`}</p>
      <p>{`Time: ${time}`}</p>
      <p>{`Number of guests: ${numberOfGuests}`}</p>
    </article>
  )

  return (
    <section className={styles.reservations}>
      <div>
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
      </div>
      <Button
        text="Home"
        onClick={() => navigate("/")}
      />
    </section>
  )
}
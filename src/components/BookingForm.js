import { useState } from "react";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";

import styles from "./BookingForm.module.css";

export const BookingForm = ({
  availableTimes,
  updateTimes
}) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(availableTimes[0]);
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [occasion, setOccasion] = useState("occasion");
  const navigate = useNavigate();

  const getIsFormValid = () => (
    !!date && numberOfGuests > 0 && numberOfGuests <= 10 && occasion !== "occasion"
  );

  const handleSubmit = e => {
    e.preventDefault();
    navigate("/confirmation_booking", {
      state: {
        date,
        time,
        numberOfGuests: Number(numberOfGuests),
        occasion
      }
    });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset>
        <h1>Book a table</h1>

        <div className={styles.field}>
          <label htmlFor="res-date">
            Choose date <sup>*</sup>
          </label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={e => {
              const selectedDate = e.target.value;
              setDate(selectedDate);
              updateTimes(selectedDate);
            }}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="res-time">
            Choose time <sup>*</sup>
          </label>
          <select
            id="res-time"
            value={time}
            onChange={e => setTime(e.target.value)}
          >
            {
              availableTimes.map(time => (
                <option
                  key={uuidv4()}
                  value={time}
                >
                  {time}
                </option>
              ))
            }
          </select>
        </div>

        <div className={styles.field}>
          <label htmlFor="guests">
            Number of guests <sup>*</sup>
          </label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={numberOfGuests}
            onChange={e => setNumberOfGuests(e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor="occasion">
            Occasion <sup>*</sup>
          </label>
          <select
            id="occasion"
            value={occasion}
            onChange={e => setOccasion(e.target.value)}
          >
            <option value="occasion">Occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>

        <input
          type="submit"
          value="Make Your reservation"
          className={styles.submit_btn}
          disabled={!getIsFormValid()}
        />
      </fieldset>
    </form>
  )
}
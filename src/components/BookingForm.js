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
        <legend id="booking-form-title" className={styles.legend}>
          Book a table
        </legend>

        <div className={styles.field}>
          <label htmlFor="res-date">
            Choose date <sup aria-hidden="true">*</sup>
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
            required
            aria-required="true"
            aria-describedby="date-hint"
          />
          <span id="date-hint" className={styles.hint}>
            Select your preferred date
          </span>
        </div>

        <div className={styles.field}>
          <label htmlFor="res-time">
            Choose time <sup aria-hidden="true">*</sup>
          </label>
          <select
            id="res-time"
            value={time}
            onChange={e => setTime(e.target.value)}
            required
            aria-required="true"
            aria-describedby="time-hint"
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
          <span id="time-hint" className={styles.hint} aria-live="polite">
            {availableTimes.length > 0
              ? `${availableTimes.length} time slots available`
              : "No time slots available"}
          </span>
        </div>

        <div className={styles.field}>
          <label htmlFor="guests">
            Number of guests <sup aria-hidden="true">*</sup>
          </label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={numberOfGuests}
            onChange={e => setNumberOfGuests(e.target.value)}
            required
            aria-required="true"
            aria-describedby="guests-hint"
          />
          <span id="guests-hint" className={styles.hint}>
            Between 1 and 10 guests
          </span>
        </div>

        <div className={styles.field}>
          <label htmlFor="occasion">
            Occasion <sup aria-hidden="true">*</sup>
          </label>
          <select
            id="occasion"
            value={occasion}
            onChange={e => setOccasion(e.target.value)}
            required
            aria-required="true"
          >
            <option value="occasion">Occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </select>
        </div>

        <div className={styles.required}>
          <p>
            <sup aria-hidden="true">*</sup> required fields
          </p>
        </div>

        <input
          type="submit"
          value="Make Your reservation"
          className={styles.submit_btn}
          disabled={!getIsFormValid()}
          aria-disabled={!getIsFormValid()}
        />
      </fieldset>
    </form>
  )
}
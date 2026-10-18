import { useReducer } from "react";

import { BookingForm } from "../components/BookingForm";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { fetchAPI } from "../api";

export const initializeTimes = () => {
  return fetchAPI(new Date());
}

export const updateTimes = (state, action) => {
  return fetchAPI(new Date(action));
}

export const BookingPage = ({ navLinks }) => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <>
      <Header navLinks={navLinks} />
      <main>
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={dispatch}
        />
      </main>
      <Footer navLinks={navLinks} />
    </>
  )
}
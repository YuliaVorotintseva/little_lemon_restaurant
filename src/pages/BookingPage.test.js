import { initializeTimes, updateTimes } from './BookingPage';

describe('initializeTimes', () => {
  it('should return the correct expected array of available times', () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    const result = initializeTimes();

    expect(result).toEqual(expectedTimes);
  });
});

describe('updateTimes', () => {
  it('should return the same value that is provided in the state', () => {
    const currentState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const selectedDate = "2026-10-18";

    const result = updateTimes(currentState, selectedDate);

    expect(result).toEqual(currentState);
  });
});
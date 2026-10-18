import { initializeTimes, updateTimes } from './BookingPage';
import { fetchAPI } from '../api';

jest.mock('../api', () => ({
  fetchAPI: jest.fn(),
}));

describe('initializeTimes', () => {
  it('should return the correct expected array of available times', () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    fetchAPI.mockReturnValue(expectedTimes);

    const result = initializeTimes();

    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));

    expect(result).toEqual(expectedTimes);
  });
});

describe('updateTimes', () => {
  it('should return the updated available times based on the selected date', () => {
    const currentState = ["17:00", "18:00"];
    const selectedDate = "2026-10-25";
    const expectedTimes = ["19:00", "20:00", "21:00"];

    fetchAPI.mockReturnValue(expectedTimes);

    const result = updateTimes(currentState, selectedDate);

    expect(fetchAPI).toHaveBeenCalledWith(new Date(selectedDate));

    expect(result).toEqual(expectedTimes);
  });
});
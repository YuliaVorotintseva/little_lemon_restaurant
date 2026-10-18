import { render, screen, fireEvent } from '@testing-library/react';
import { BookingForm } from './BookingForm';

const mockNavigate = jest.fn();

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockNavigate,
}));

describe('BookingForm Submission', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('submits the form and navigates to the confirmation page with correct state', () => {
    const mockUpdateTimes = jest.fn();
    const availableTimes = ["17:00", "18:00", "19:00"];

    render(
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={mockUpdateTimes}
      />
    );

    const submitButton = screen.getByRole('button', { name: /make your reservation/i });

    expect(submitButton).toBeDisabled();

    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: '2026-10-25' } });

    const guestsInput = screen.getByRole('spinbutton');
    fireEvent.change(guestsInput, { target: { value: '4' } });

    const occasionSelect = screen.getByLabelText(/occasion/i);
    fireEvent.change(occasionSelect, { target: { value: 'birthday' } });

    expect(submitButton).toBeEnabled();

    fireEvent.click(submitButton);

    expect(mockNavigate).toHaveBeenCalledTimes(1);

    expect(mockNavigate).toHaveBeenCalledWith("/confirmation_booking", {
      state: {
        date: "2026-10-25",
        time: "17:00",
        numberOfGuests: 4,
        occasion: "birthday"
      }
    });
  });
});
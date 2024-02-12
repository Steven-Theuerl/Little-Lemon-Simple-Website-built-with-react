import { render, screen } from "@testing-library/react";
import BookingPage from './BookingPage.js';

test('Renders the BookingForm heading', () => {
    render(<BookingPage />);

    const headingElement = screen.getByText("Reservation Request");
    const updateTimes = screen.getByText(['5PM','6PM','7PM', '8PM']);
    const initializeTIimes = screen.getByText(['5PM','6PM','7PM', '8PM']);


    expect(headingElement).toBeInTheDocument("Reservation Request");


    expect(initializeTimes).toBe(['5PM','6PM','7PM', '8PM'])
    expect(updateTimes).toBe(['5PM','6PM','7PM', '8PM'])

});

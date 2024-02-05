import './App.css';
import {useState} from "react";

function BookingForm() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
        alert('Form Submitted!')
}

  return (
    <div className="booking-box">
        <div className="booking-heading-box">
            <h1 className="heading1">Reservation Request</h1>
        </div>
            <form onSubmit={handleSubmit}>
                <div className="booking-boxes">
                    <div className="booking-box-labels">
                        <label htmlFor="res-date">Choose Reservation Date</label>
                        <label htmlFor="res-time">Choose Reservation Time</label>
                        <label htmlFor="guests">For How Many Guests?</label>
                        <label htmlFor="occasion">Special Occasion?</label>
                    </div>

                    <div className="booking-box-inputs">
                        <input className="booking-box-input-item"
                               type="date"
                               id="res-date"
                               value={date}
                               onChange={e => setDate(e.target.value)}/>
                        <select className="booking-box-input-item"
                                id="res-time"
                                value={time}
                                onChange={e => setTime(e.target.value)}>
                                    <option>17:00</option>
                                    <option>18:00</option>
                                    <option>19:00</option>
                                    <option>20:00</option>
                                    <option>21:00</option>
                                    <option>22:00</option>
                        </select>
                        <div className="booking-slider-set">
                            <input className="booking-box-input-item"
                            name="guestSlider"
                            type="range"
                            min="1"
                            max="10"
                            id="guests"
                            value={guests}
                            onChange={e => setGuests(e.target.value)} />
                            <div className="booking-slider-output">
                                    {guests}
                            </div>
                        </div>
                        <select className="booking-box-input-item"
                                id="occasion"
                                value={occasion}
                                onChange={e => setOccasion(e.target.value)}>
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                        </select>
                    </div>
                </div>
                <div className="booking-confirmation-box">
                    <p>
                        <strong>To confirm; you would like a table on <b style={{color:'#495E57'}}>{date}</b> at <b style={{color:'#495E57'}}>{time}</b> for <b style={{color:'#495E57'}}>{guests}</b>?</strong>
                    </p>
                    <br/>
                    <p><b><b style={{color:'red'}}>** </b>Please note; If you are not logged into an account, you will be asked for your name and phone number after clicking the "Make Your Reservation" button.</b></p>
                </div>
                <div className="booking-submit-button-box">
                    <input className="booking-submit-button" type="submit" value="Make Your Reservation"/>
                </div>
            </form>
    </div>
  );
};

export default BookingForm;
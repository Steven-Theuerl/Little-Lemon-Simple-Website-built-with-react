import './App.css';
import Nav from './Nav.js'
import { useState } from 'react';
import { useReducer } from 'react';
import { useEffect } from "react"; 

function BookingForm({availableTimes}) {
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
        alert('Reservation Requested!')
}
  return (
    <div>
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
                                <option>{availableTimes[0]}</option>
                                <option>{availableTimes[1]}</option>
                                <option>{availableTimes[2]}</option>
                                <option>{availableTimes[3]}</option>
                                <option>{availableTimes[4]}</option>
                        </select>
                        <div className="booking-slider-set">
                            <input className="booking-box-input-item-slider"
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
                                <option></option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                        </select>
                    </div>
                </div>
                <div className="booking-confirmation-box">
                    <p>
                        <strong>To confirm; you would like a table on <b style={{color:'#495E57'}}>{date}</b> at <b style={{color:'#495E57'}}>{time}</b> for <b style={{color:'#495E57'}}>{guests}</b> guests?</strong>
                    </p>
                    <br/>
                    <p><b><b style={{color:'red'}}>** </b>Please note; If you are not logged into an account, you will be asked for your name and phone number after clicking the "Make Your Reservation" button.</b></p>
                </div>
                <div className="booking-submit-button-box">
                    <input className="booking-submit-button" type="submit" value="Make Your Reservation"/>
                </div>
            </form>
    </div>
    </div>
  );
};

function BookingPage() {

    const initializeTimes = ['5','6','7','8']

    const [availableTimes, setAvailableTimes] = useReducer(
      updateTimes, initializeTimes
    );

    function updateTimes() {
        const allAvailableTimes = {...availableTimes};
    
    }

  return (
    <div>
        <Nav/>
        <BookingForm availableTimes={availableTimes}/>
    </div>
  );
};

export default BookingPage;
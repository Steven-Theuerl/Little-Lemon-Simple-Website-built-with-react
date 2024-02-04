import './App.css';
import Logo from './assets/Logo.svg';
import React from 'react';

function Nav() {
  return (
    <nav className="flex-container">
        <img src={Logo} alt="test"  style={{width: '300px',}}></img>
        <ul className="navbar-flexbox-section">
            <li><a href="http://localhost:3000/">Home</a></li>
            <li><a href="http://localhost:3000/About">About</a></li>
            <li>Order Online</li>
            <li><a href="http://localhost:3000/Booking-page">Reservation</a></li>
            <li><a href="http://localhost:3000/Contact">Contact</a></li>
            <li><a href="http://localhost:3000/Signup">Login/Signup</a></li>
        </ul>
    </nav>
  );
};

export default Nav;
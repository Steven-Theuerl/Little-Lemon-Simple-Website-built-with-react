import './App.css';
import Logo from './assets/Logo.svg';
import React from 'react';

function Nav() {
  return (
    <nav className="flex-container">
        <div className="nav-logo-container">
            <img src={Logo} alt="test"  style={{width: '18.75rem',}}></img>
        </div>
        <div className="navbar-flexbox-section">
            <div className="nav-section-route-box" style={{fontSize: '1.25rem', color: 'black'}}><a href="http://localhost:3000/">Home</a></div>
            <div className="nav-section-route-box" style={{fontSize: '1.25rem'}}><a href="http://localhost:3000/About">About</a></div>
            <div className="nav-section-route-box" style={{fontSize: '1.25rem'}}><a href="http://localhost:3000/Online-menu">Order Online</a></div>
            <div className="nav-section-route-box" style={{fontSize: '1.25rem'}}><a href="http://localhost:3000/Booking-page">Reservation</a></div>
            <div className="nav-section-route-box" style={{fontSize: '1.25rem'}}><a href="http://localhost:3000/Contact">Contact</a></div>
            <div className="nav-section-route-box" style={{fontSize: '1.25rem'}}><a href="http://localhost:3000/Signup">Login/Signup</a></div>
        </div>




    </nav>
  );
};

export default Nav;
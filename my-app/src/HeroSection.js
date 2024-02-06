import './App.css';
import restauranfood from './assets/restauranfood.jpg'
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <main className="hero-container">
        <div className="hero-container-text">
            <h1 className="heading1">Little Lemon</h1>
            <h2 className="heading2">Chicago</h2>
            <h3 className="heading3">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h3>
            <br></br>
                <Link to="http://localhost:3000/Booking-page">
                 <button className="lemon-button"> <b>Reserve Table</b> </button>
                </Link>
            </div>
        <div className="hero-container-img">
            <img src={restauranfood} alt="img"
            style={{
                width: '400px',
                height: '465px',
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
                overflow: 'hidden',
                }}>
            </img>
        </div>
    </main>
  );
};

export default HeroSection;

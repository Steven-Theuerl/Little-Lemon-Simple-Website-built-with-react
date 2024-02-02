import './App.css';
import Logo from './assets/Logo.svg'

function Footer() {
  return (
    <footer className="footer-flexbox-section">
        <img src={Logo} alt="test"  style={{width: '300px',}}></img>
        <ul className="footer-info-boxes">
            <b>Doormat Navigation</b>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
        <ul className="footer-info-boxes">
            <b>Contact</b>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
        </ul>
        <ul className="footer-info-boxes">
            <b>Social Media Links</b>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
        </ul>
    </footer>
  );
};

export default Footer;

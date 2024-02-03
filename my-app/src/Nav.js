import './App.css';
import Logo from './assets/Logo.svg';


function Nav() {
  return (
    <nav className="flex-container">
        <img src={Logo} alt="test"  style={{width: '300px',}}></img>
        <ul className="navbar-flexbox-section">
            <li><a>Home</a></li>
            <li>About</li>
            <li>Order Online</li>
            <li>Reservation</li>
            <li>Contact</li>
            <li>Login</li>
        </ul>
    </nav>
  );
};

export default Nav;
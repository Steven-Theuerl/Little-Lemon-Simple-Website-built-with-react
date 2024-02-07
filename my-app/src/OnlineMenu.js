import './App.css';
import Nav from './Nav'
import { Link } from 'react-router-dom';
import HomeIcon from './assets/home icon.svg'


function OnlineMenu() {
  return (
       <div>
        <Nav/>
        <div className="online-menu-container">
            <div className="online-menu-header-text">
                <div className="online-menu-back-button-container">
                    <Link to="http://localhost:3000/">
                      <button className="online-menu-back-button">
                        <img src={HomeIcon} alt="img"
            style={{
                height: '2.5rem',
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
                overflow: 'hidden',
                }}/>
                      </button>
                    </Link>
                </div>
                <h1 className="heading1" style={{fontSize: '5rem'}}>Little Lemon</h1>
                <h2 className="heading2" style={{fontSize: '3rem'}}>Chicago</h2>
                <h3 className="heading3" style={{fontSize: '1.75rem'}}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h3>
                <Link to="http://localhost:3000/Booking-page">
                 <button className="lemon-button"> <b>Reserve Table</b> </button>
                </Link>
            </div>
        </div>
        <div className="online-menu-entree-card-backdrop">
            <div className="online-menu-entree-card">
            <h1 style={{fontFamily: 'Karla',}}>Greek Salad</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.</h3>
            <h2>$13.00</h2>
            </div>

            <div className="online-menu-entree-card">
            <h1 style={{fontFamily: 'Karla',}}>Bruchetta</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.</h3>
            <h2>$12.00</h2>
            </div>

            <div className="online-menu-entree-card">
            <h1 style={{fontFamily: 'Karla',}}>Grilled Fish</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.</h3>
            <h2>$13.00</h2>
            </div>

            <div className="online-menu-entree-card">
            <h1 style={{fontFamily: 'Karla',}}>Pasta</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.</h3>
            <h2>$10.00</h2>
            </div>

            <div className="online-menu-entree-card">
            <h1 style={{fontFamily: 'Karla',}}>Lemon Dessert</h1>
            <h3 style={{color: '#495E57'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.</h3>
            <h2>$15.00</h2>
            </div>

            <div className="online-menu-entree-card">
            <h1 style={{fontFamily: 'Karla',}}>Just a Lemon</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nec in ornare.</h3>
            <h2>$1.00</h2>
            </div>
        </div>
    </div>
  );
};

export default OnlineMenu;

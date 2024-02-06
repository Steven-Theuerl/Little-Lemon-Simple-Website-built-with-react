import './App.css';
import Greek from './assets/greek salad.jpg'
import Bruchetta from './assets/bruchetta.svg'
import Lemon from './assets/lemon dessert.jpg'
import { Link } from 'react-router-dom'

function Highlights() {
  return (
        <div className="grid-container">
            <div className="highlights-special-flex-container">
                <h1 className="heading1" style={{color: 'black',}}>This Week's Specials!!</h1>
                <Link to="http://localhost:3000/Online-menu">
                 <button className="lemon-button"> <b>Online Menu</b> </button>
                </Link>
            </div>

            <article  className="highlight-container">
            <articles className="highlight-container-card">
                <img src={Greek} alt="test" style={{
                    width: '100%',
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px',
                    }}></img>
                <div className="highlight-container-card-text">
                    <h4>Greek Salad</h4>
                    <h5 className="h5-highlight-container-card-text">The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons. </h5>
                    <div>
                        <h5>Order for Delivery!</h5>
                    </div>
                </div>
            </articles>
            <articles className="highlight-container-card">
                <img src={Bruchetta} alt="test"  style={{width: '100%',
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px',
                    }}></img>
                <div className="highlight-container-card-text">
                    <h4>Greek Salad</h4>
                    <h5 className="h5-highlight-container-card-text">The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons. </h5>
                    <div>
                        <h5>Order for Delivery!</h5>
                    </div>
                </div>
            </articles>
            <articles className="highlight-container-card">
                <img src={Lemon} alt="test"  style={{width: '100%',
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px',
                    }}>
                </img>
                <div className="highlight-container-card-text">
                    <h4>Greek Salad</h4>
                    <h5 className="h5-highlight-container-card-text">The famous Greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons. </h5>
                    <div>
                        <h5>Order for Delivery!</h5>
                    </div>
                </div>
            </articles>
        </article>
        </div>
  );
};

export default Highlights;

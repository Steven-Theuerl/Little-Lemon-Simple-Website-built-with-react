import './App.css';
import twoBrothers from './assets/twoBrothers.png'

function About() {
  return (
    <main className="about-container">
        <div className="about-container-text">
            <h1 className="heading1">Little Lemon</h1>
            <h2 className="heading2">Chicago</h2>
            <h3 className="heading3">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h3>
            
            </div>
        <div className="about-container-img">
            <img src={twoBrothers} alt="img"
            style={{
                width: '550px',
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

export default About;

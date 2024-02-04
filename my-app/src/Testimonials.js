import './App.css'
import stars from './assets/stars.png'
import sandra from './assets/sandra.png'
import johnathan from './assets/johnathan.png'
import Shane from './assets/Shane.png'
import Todd from './assets/Todd.png'

function Testimonials() {
    return (
        <div className="grid-container">
            <div className="testimonials-flex-container">
                <h1 className="heading1" style={{color: 'black',}}>Testimonials</h1>
            </div>
            <article  className="testimonial-container">
            <articles className="testimonial-container-card">
                <div className="tetimonial-container-card-text">
                <img src={stars} alt='rating' style={{
                        marginTop: 6,
                        width: 150,
                        paddingLeft: 10,
                    }}></img>
                    <div className="cx-testimonial-info">
                        <div>
                            <img className="cx-testimonial-picture" src={sandra} alt="cx-picture"></img>
                        </div>
                        <div className="cx-testimonial-name">Sandra Sansa</div>
                    </div>
                    <h4 className="h4-tetimonial-container-card-text">Yesterday</h4>
                    <h5 className="h5-tetimonial-container-card-text">I love Adrian and Mario. No, really. I love them. I'll be here everyday, watching them work.</h5>
                </div>
            </articles>
            <articles className="testimonial-container-card">
                <div className="tetimonial-container-card-text">
                <img src={stars} alt='rating' style={{
                        marginTop: 6,
                        width: 150,
                        paddingLeft: 10,
                    }}></img>
                    <div className="cx-testimonial-info">
                        <div>
                            <img className="cx-testimonial-picture" src={johnathan} alt="cx-picture"></img>
                        </div>
                        <div className="cx-testimonial-name">Johnathan Heights</div>
                    </div>
                    <h4 className="h4-tetimonial-container-card-text">01/30/2023</h4>
                    <h5 className="h5-tetimonial-container-card-text">SO GOOD MAKES ME WANNA SING</h5>
                </div>
            </articles>
            <articles className="testimonial-container-card">
                <div className="tetimonial-container-card-text">
                <img src={stars} alt='rating' style={{
                        marginTop: 6,
                        width: 150,
                        paddingLeft: 10,
                    }}></img>
                    <div className="cx-testimonial-info">
                        <div>
                            <img className="cx-testimonial-picture" src={Shane} alt="cx-picture"></img>
                        </div>
                        <div className="cx-testimonial-name">Shane Tooun</div>
                    </div>
                    <h4 className="h4-tetimonial-container-card-text">01/27/2023</h4>
                    <h5 className="h5-tetimonial-container-card-text">Namuna is the best girl, you guys don't know what you're talking about.</h5>
                </div>
            </articles>
            <articles className="testimonial-container-card">
                <div className="tetimonial-container-card-text">
                    <img src={stars} alt='rating' style={{
                        marginTop: 6,
                        width: 150,
                        paddingLeft: 10,
                    }}></img>
                    <div className="cx-testimonial-info">
                        <div>
                            <img className="cx-testimonial-picture" src={Todd} alt="cx-picture"></img>
                        </div>
                        <div className="cx-testimonial-name">Todd Thomas</div>
                    </div>
                    <h4 className="h4-tetimonial-container-card-text">01/24/2023</h4>
                    <h5 className="h5-tetimonial-container-card-text">This is quite possibly the most quiant establishment that has blessed this little hole in the wall city we call Chicago.</h5>
                </div>
            </articles>
        </article>
        </div>
    );
  };

export default Testimonials;
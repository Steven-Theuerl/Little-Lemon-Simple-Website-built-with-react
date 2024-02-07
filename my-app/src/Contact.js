import './App.css';
import Nav from './Nav'
import Restaurant from './assets/restaurant.jpg'

function Contact() {
  return (
       <div>
        <Nav/>
        <div className="about-container">
            <div className="contact-page-textside">
            <div className="contact-page-texbox">
                <ul className="footer-info-boxes">
                    <b style={{
                        color: 'black',
                        fontSize: '2rem',
                        marginBottom: '1rem',
                    }}>Contact Information</b>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div className="contact-page-texbox">
                <ul className="footer-info-boxes">
                <b style={{
                        color: 'black',
                        fontSize: '2rem',
                        marginBottom: '1rem',
                    }}>Social Media Accounts</b>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            <div/>
            </div>
            </div>
            <img src={Restaurant} alt='rating' style={{
                        height: '38rem',
                        width: '58rem',
                        marginTop: '6rem',
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        borderTopRightRadius: 30,
                        borderTopLeftRadius: 30,
                        }}></img>
        </div>
    </div>
  );
};

export default Contact;

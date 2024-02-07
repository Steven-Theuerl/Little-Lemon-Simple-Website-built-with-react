import './App.css';
import Nav from './Nav.js';
import HeroSection from './HeroSection.js';
import Footer from './Footer.js';
import Highlights from './Highlights.js';
import Testimonials from './Testimonials.js';




function Homepage() {
  return (
    <>
        <Nav/>
        <HeroSection/>
        <Highlights/>
        <Testimonials/>
        <Footer/>
    </>
  );
};

export default Homepage;

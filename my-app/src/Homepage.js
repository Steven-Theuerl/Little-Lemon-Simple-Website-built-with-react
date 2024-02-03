import './App.css';
import Nav from './Nav.js';
import HeroSection from './HeroSection.js';
import Footer from './Footer.js';
import Highlights from './Highlights.js';
import About from './About.js';
import Testimonials from './Testimonials.js';
import {Routes, Route} from 'react-router-dom'


function Homepage() {
  return (
    <>
        <Nav/>
        <HeroSection/>
        <Highlights/>
        <Testimonials/>
        <About/>
        <Footer/>
    </>
  );
};

export default Homepage;

import './App.css';
import Homepage from './Homepage'
import About from './About'
import BookingPage from './BookingPage.js'
import Contact from './Contact.js'
import Signup from './Signup.js'
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Booking-page" element={<BookingPage/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Signup" element={<Signup/>}/>
    </Routes>
  );
};

export default App;

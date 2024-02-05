import './App.css'
import Nav from './Nav.js'
import {useState} from "react";

function Signup() {


   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");




   const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        alert('Form Submitted!')
   }

    return (
        <div>
            <Nav/>
            <div className="signup-page">
            <h1 className="heading1">Create an Account</h1>
                <div className="create-account-card">
                    <form onSubmit={handleSubmit}>
                        <div className="signup-form-box">
                            <label className="signup-form-label" htmlFor="user_first_name">Name</label><br/>
                            <input className="signup-form-input"
                                placeholder="Name"
                                type="text"
                                id="user_first_name"
                                name="user_first_name"
                                value={name}
                                onChange={e => setName(e.target.value)}/>
                        </div>
                        <div className="signup-form-box">
                            <label className="signup-form-label" htmlFor="user_email">Email</label><br/>
                            <input className="signup-form-input"
                                    placeholder="Email"
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="signup-form-box">
                            <label className="signup-form-label" htmlFor="user_password">Password</label><br/>
                            <input className="signup-form-input"
                                    placeholder="Password"
                                    type="password"
                                    id="user_password"
                                    name="user_password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div className="signup-form-box">
                            <label className="signup-form-label" htmlFor="user_confirm_password">Confirm Password</label><br/>
                            <input className="signup-form-input"
                                    placeholder="Password"
                                    type="password"
                                    id="user_confirm_password"
                                    name="user_confirm_password"
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)}/>
                        </div>
                        <div className="signup-form-box">
                            <button className="signup-submit-button" type="submit" disabled={!name}>Submit</button>
                        </div>
                    </form>
                </div>
          </div>
        </div>
     );
};

export default Signup;



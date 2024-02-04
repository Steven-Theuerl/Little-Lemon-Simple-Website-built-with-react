import './App.css'
import Nav from './Nav.js'

function Signup() {
    return (
        <div>
          <Nav/>
                <div className="signup-page">
            <h1 className="heading1" style={{color: 'black'}}>Create an Account</h1>
                <form >
                    <div className="submit-form-name-box">
                        <div className="signup-form-box">
                            <label className="signup-form-label" for="user_first_name">First Name</label><br/>
                            <input className="signup-form-name-input" type="text" id="user_first_name" name="user_first_name"/>
                        </div>
                        <div className="signup-form-box">
                            <label className="signup-form-label" for="user_last_name">Last Name</label><br/>
                            <input className="signup-form-name-input" type="text" id="user_last_name" name="user_last_name"/>
                        </div>
                    </div>
                    <div className="signup-form-box">
                        <label className="signup-form-label" for="user_email">Email</label><br/>
                        <input className="signup-form-input" type="email" id="user_email" name="user_email"/>
                    </div>
                    <div className="signup-form-box">
                        <label className="signup-form-label" for="user_password">Password</label><br/>
                        <input className="signup-form-input" type="password" id="user_password" name="user_password"/>
                    </div>
                    <div className="signup-form-box">
                        <label className="signup-form-label" for="user_confirm_password">Confirm Password</label><br/>
                        <input className="signup-form-input" type="password" id="user_confirm_password" name="user_confirm_password"/>
                    </div>
                    <div className="signup-form-box">
                        <button className="signup-submit-button" type="submit">Submit</button>
                    </div>
                </form>
          </div>
        </div>
     );
};

export default Signup;



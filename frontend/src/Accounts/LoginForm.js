import React, { useState } from 'react'
import RegisterForm from './RegisterForm';

import './accounts.css';
import './broccoli.png';

function LoginForm({ Login, error }){
    const [details, setDetails] = useState({ email: "", password: ""});

    const submitHandler = e =>{
        e.preventDefault();

        Login(details)
    }
    return (
        <div>
        <div class="container" id="container">
            <div class="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form onSubmit={submitHandler}>
                    <h1>Sign in</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" name="Email" onChange ={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                    <input type="password" name="Password" onChange ={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    <a href="#">Forgot your password?</a>
                    <button>Sign In</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button class="ghost" id="signIn">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello</h1>
                        <p>Enter details</p>
                        <button class="ghost" id="signUp" onClick={RegisterForm}>Sign Up</button>
                        
                    </div>
                </div>
            </div>
        </div>
        
        
        <div>
        <img src = "C:\Users\Isaac\Downloads\broccoli.png" alt="something lul"/>
        </div>
        </div>
        
    )
}

export default LoginForm
import React, { useState } from 'react'
import RegisterForm from './RegisterForm';
import { Redirect } from 'react-router-dom';
import AccountRepository from '../Api/accountRepository';

import './accounts.css';
import './broccoli.png';

export class LoginForm extends React.Component {
    state = {
        username: "",
        password: "",
        invalidCred: false,
        jwtValue: "",
    }

    accountRepository = new AccountRepository();

    async login(event) {
        // Authenticate user

        event.preventDefault();
        event.stopPropagation();

        if (!(this.state.username && this.state.password)) {
            this.setState({ invalidCred: true });
            return;
        }

        const response = await this.accountRepository.login(this.state.username, this.state.password);

        if (!response || response === 'error') {
            return;
        }

        if (response.status) {

            sessionStorage.setItem("isAuthenticated", "true");
            sessionStorage.setItem("userId", response.account.ID);

            this.setState({
                username: "",
                password: "",
                invalidCred: false
            });
        }
        else {
            this.setState({ invalidCred: true });
        }
    }


    render(){
        if (sessionStorage.getItem("isAuthenticated") === "true") {
            return <Redirect to="/" />;
        }
        return(
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
                <form >
                    <h1>Sign in</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input 
                        type="email" 
                        name="Email" 
                        value={ this.state.username }
                        onChange={ e => this.setState({ username: e.target.value }) }/>
                    <input 
                        type="password" 
                        name="Password" 
                        value={ this.state.password }
                        onChange={ e => this.setState({ password: e.target.value }) }/>
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
                        <a href="/register">Register here</a>
                        
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
}

export default LoginForm
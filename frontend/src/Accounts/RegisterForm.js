import React, { useState } from 'react'
import './accounts.css';

function RegisterForm(){
    
    return (
        <div class="container">

        <form id="signup">
    
            <div class="header">
            
                <h3>Sign Up</h3>
                
                
            </div>
            
            <div class="sep"></div>
    
            <div class="inputs">
            
                <input type="email" name="e-mail" />
            
                <input type="password" name="Password" />
                
                
                <a id="submit" href="#">SIGN UP FOR INVITE NOW</a>
            
            </div>
    
        </form>
    
            
        </div>
    )
}

export default RegisterForm
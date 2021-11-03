import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import LoginForm from './Accounts/LoginForm';

function App() {
  const admin = {
    email: "admin@gmail.com",
    password: "123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {

  }

  const Logout = () => {

  }


  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button>Logout</button>
        </div>
      ): (
        <LoginForm/>
      )}
    </div>
  );
}

export default App;

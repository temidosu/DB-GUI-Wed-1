import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import LoginForm from './Accounts/LoginForm';
import RegisterForm from './Accounts/RegisterForm';

function App() {
  const admin = {
    email: "admin@gmail.com",
    password: "123"
  }

  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details)

    if (details.email == admin.email && details.password == admin.password){
      console.log("Logged in")
      setUser({
        email: details.email
      })
    } else{
      console.log("Wrong Password")
    }

  }

  const Logout = () => {
    setUser({ name: "", email: ""})

  }

 
  return (
    // <div className="App">
    //   {(user.email !== "") ? (
    //     <div className="welcome">
    //       <h2>Welcome, <span>{user.name}</span></h2>
    //       <button onClick={Logout}>Logout</button>
    //     </div>
    //   ): (
    //     <LoginForm Login={Login} error={error}/>
    //   )}
    // </div>
    <div>
      <RegisterForm/>
    </div>
  );
}

export default App;

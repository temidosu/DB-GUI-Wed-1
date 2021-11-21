import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from './Accounts/Register';
import { LoginForm } from './Accounts/LoginForm';
import { Home } from './Home/Home';


export default function Routing({ appProps }) {
    return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" exact element={<LoginForm/>} />
          <Route path="/register" exact element={<Register/>} />
        </Routes>
      </Router>
    );
  }
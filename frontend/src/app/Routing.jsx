import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Register } from './Accounts/Register';
import { LoginForm } from './Accounts/LoginForm'
//import { Home } from "./Home";


export default function Routing({ appProps }) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact component={LoginForm} appProps={appProps} />
          
          <Route
            path="/register"
            exact
            component={Register}
            appProps={appProps}
          />
        </Routes>
      </BrowserRouter>
    );
  }
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { LoginForm, Register } from './Accounts';


export default function Routes({ appProps }) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} appProps={appProps} />
          <Route path="/login" exact component={LoginForm} appProps={appProps} />
          <Route
            path="/register"
            exact
            component={Register}
            appProps={appProps}
          />
        </Switch>
      </BrowserRouter>
    );
  }
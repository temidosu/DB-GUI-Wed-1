import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from './Accounts/Register';
import { LoginForm } from './Accounts/LoginForm';
import { Home } from './Home/Home';
import { ProfilePage } from './profile/ProfilePage';
import { ProfileRecipes } from './profile/profileRecipes';
import { ProfileSettings } from './profile/profileSettings';
import { EditRecipe } from './recipe/editRecipe';


export default function Routing({ appProps }) {
    return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" exact element={<LoginForm/>} />
          <Route path="/register" exact element={<Register/>} />
          <Route path="/createRecipe" exact element={<ProfilePage/>} />
          <Route path="/profileRecipes" exact element={<ProfileRecipes/>} />
           {/*2 below need to pass in user or recipe id from repository*/}
          <Route path="/editRecipe" exact element={<EditRecipe/>} />
          <Route path="/profileSettings" exact element={<ProfileSettings/>} />
        </Routes>
      </Router>
    );
  }
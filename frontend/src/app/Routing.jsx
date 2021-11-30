import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from './Accounts/Register';
import { LoginForm } from './Accounts/LoginForm';
import { Home } from './Home/Home';
import { ViewRecipe } from './recipe/ViewRecipe';
import { ProfilePage } from './profile/ProfilePage';
import { ProfileRecipes } from './profile/profileRecipes';
import { ProfileSettings } from './profile/profileSettings';
import { EditRecipe } from './recipe/editRecipe';
import { Navbar } from './common/NavBar';
//import { RecipeSchedule } from './Calendar/RecipeSchedule'


export default function Routing({ appProps }) {
	return (
		<Router>

			<Navbar></Navbar>

			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/login" exact element={<LoginForm />} />
				<Route path="/register" exact element={<Register />} />
				<Route path="/createRecipe" exact element={<ProfilePage />} />
        		<Route path="/profileRecipes" exact element={<ProfileRecipes/>} />
        		<Route path="/editRecipe" exact element={<EditRecipe/>} />
        		<Route path="/profileSettings" exact element={<ProfileSettings/>} />
        		<Route path="/viewRecipe" exact element={<ViewRecipe/>} />

			</Routes>
		</Router>
	);
}

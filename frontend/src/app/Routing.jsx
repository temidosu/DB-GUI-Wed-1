import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from './Accounts/Register';
import { LoginForm } from './Accounts/LoginForm';
import { Home } from './Home/Home';
import { ViewRecipe } from './recipe/ViewRecipe';
import { ProfilePage } from './profile/ProfilePage';
<<<<<<< HEAD


=======
import { Navbar } from './common/NavBar';
>>>>>>> abb90eadbf3a564d2e80f3bdd37de3d6fd9e13cd
//import { RecipeSchedule } from './Calendar/RecipeSchedule'


export default function Routing({ appProps }) {
<<<<<<< HEAD
    return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" exact element={<LoginForm/>} />
          <Route path="/register" exact element={<Register/>} />
          <Route path="/createRecipe" exact element={<ProfilePage/>} />
          <Route path="/viewRecipe" exact element={<ViewRecipe/>} />
        </Routes>
      </Router>
    );
  }
=======
	return (
		<Router>

			<Navbar></Navbar>

			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/login" exact element={<LoginForm />} />
				<Route path="/register" exact element={<Register />} />
				<Route path="/createRecipe" exact element={<ProfilePage />} />

			</Routes>
		</Router>
	);
}
>>>>>>> abb90eadbf3a564d2e80f3bdd37de3d6fd9e13cd

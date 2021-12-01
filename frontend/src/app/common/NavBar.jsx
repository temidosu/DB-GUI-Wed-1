import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export const Navbar = props => {
	return <nav className="navbar bg-black p-0">
		<ul>
			<li><a href="/">Home <i className=""></i></a>

			</li>
			<li><a href="/createRecipe">Recipe Creator <i className=""></i></a>
			</li>
			<li><a href="/profileRecipes">My Profile <i className="icon-chevron-down"></i> </a>
				<ul>
					<li><a href="/profileRecipes">Recipes</a></li>
					{/* <li><a href="/profileSettings">Account Settings</a></li> */}
				</ul>
			</li>

			<li className="float-end" > <a href="/login" onClick={() => sessionStorage.clear()}>Sign Out</a></li>
		</ul>
		
		<br></br><br></br>
	</nav>
	
}






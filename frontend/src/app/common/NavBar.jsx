import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export const Navbar = props => {
	return <nav>
		<ul>
			<li><a href="/">Home <i class=""></i></a>

			</li>
			<li><a href="/createRecipe">Recipe Creator <i class=""></i></a>
				<ul>
					<li><a href="/createRecipe">Examples</a></li>
					<li><a href="#">Yours</a></li>
				</ul>
			</li>
			<li><a href="#">Anouncement Board <i class="icon-chevron-down"></i></a>
				<ul>
					<li><a href="#">Updates</a></li>
				</ul>
			</li>
			<li><a href="/profileRecipes">My Profile <i class="icon-chevron-down"></i> </a>
				<ul>
					<li><a href="/profileRecipes">Recipes</a></li>
					<li><a href="/profileSettings">Account Settings</a></li>
				</ul>
			</li>
			<li><a href="/recipeSchedule">Recipe Scheduler</a></li>
			<li><a href="#">Contact</a></li>
			<li className="float-end" > <a href="/login" onClick={() => sessionStorage.clear()}>Sign Out</a></li>


		</ul>
		<br></br><br></br>

	</nav>
	
}






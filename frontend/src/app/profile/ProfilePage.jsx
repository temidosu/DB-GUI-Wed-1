import React from "react";
import { User } from '../../models/User';
import { CompactRecipeCardList } from '../common/CompactCardList';
import { CreateRecipe } from "../recipe/createRecipe";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Link } from 'react-router-dom';

export class ProfilePage extends React.Component {
	state = {

		// This will get set by profilepage's parent later
		user: new User(
			1,
			"John",
			"Doe",
			"jdoe@gmail.com",
			[], /* savedRecipes */
			[], /* createdRecipes */
			[], /* ingredients */
			//[] /* Planner */
		),
		savedRecipe: false
	};

	addRecipe(recipe) {
		var recipes = this.state.user.createdRecipes;
		recipes.push(recipe);
		this.setState({ recipes });
	}

	addIngredient(ingredient) {
		var ingredients = this.state.user.ingredients;
		ingredients.push(ingredient);
		this.setState({ ingredients });
	}


	render() {
		return <>

			<div id="Profile Page">
				<nav className="container-fluid">
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="/createRecipe">Recipe Creator <i class="icon-chevron-down"></i></a>
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
						<li><a href="#">My Profile <i class="icon-chevron-down"></i> </a>
							<ul>
								<li><a href="#">Recipes</a></li>
								<li><a href="#">Account Settings</a></li>
							</ul>
						</li>
						<li><a href="#">Contact</a></li>

					</ul>
				</nav>


				<CreateRecipe onRecipeAdded={recipe => this.addRecipe(recipe)} class="d-block" />
				{/* Dynamically create RecipeCards */}
				<h2>Saved Recipes</h2>



				<h2>Created Recipes</h2>

				<CompactRecipeCardList userCreatedRecipes={this.state.user.createdRecipes}></CompactRecipeCardList>

				{/* Calendar for ingredients */}

			</div>

		</>
	}
}
import React from "react";
import { User } from '../../models/User';
import { CompactRecipeCardList } from '../common/CompactCardList';

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
			[] /* Planner */
		),
		savedRecipe: false
	};

	addIngredient(ingredient) {
		var ingredients = this.state.user.ingredients;
		ingredients.push(ingredient);
		this.setState({ ingredients });
	}


	render() {
		return <div id="Profile-Page" class="container">
			<h1>{this.state.user.firstName} {this.state.user.lastName}</h1>

			{/* Dynamically create RecipeCards */}
			<h2>Saved Recipes</h2>
			{
				this.state.user.savedRecipes.length > 0 && <CompactRecipeCardList savedRecipes={this.state.user.savedRecipes}></CompactRecipeCardList>
			}
			{
				<h3>No Saved Recipes</h3>
			}

			<h2>Created Recipes</h2>
			{
				this.state.user.savedRecipes.createdRecipes > 0 && <CompactRecipeCardList savedRecipes={this.state.user.createdRecipes}></CompactRecipeCardList>
			}
			{
				<h3>No Created Recipes</h3>
			}

		</div>;
	}
}
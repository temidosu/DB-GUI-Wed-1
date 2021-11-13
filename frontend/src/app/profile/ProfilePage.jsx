import React from "react";
import { User } from '../../models/User';
import { CompactRecipeCardList } from '../common/CompactCardList';



export class ProfilePage extends React.Component {
	state = {
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

	checkSaved() {
		var isSaved = false;
		this.setState({ isSaved });
	}

	render() {
		return <>
			<div id="Profile Page">
				<h1>{this.state.user.firstName} {this.state.user.lastName}</h1>

				{/* Dynamically create RecipeCards */}
				<h2>Saved Recipes</h2>
				<CompactRecipeCardList {() => this.setState({ savedRecipe: true }))} savedRecipes={this.state.user.savedRecipes}></CompactRecipeCardList>


			<h2>Created Recipes</h2>
			{this.checkSaved()}
			<CompactRecipeCardList savedRecipes={this.state.user.createdRecipes}></CompactRecipeCardList>

			{/* Calendar for ingredients */}
		</div>
		</>;
	}
}
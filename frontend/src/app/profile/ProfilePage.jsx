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
		)
	};

	addIngredient(ingredient) {
		var ingredients = this.state.user.ingredients;
		ingredients.push(ingredient);
		this.setState({ ingredients });
	}

	render() {
		return <>
			<div id="Profile Page">
				<h1>{this.state.user.firstName}</h1>

				{/* Dynamically create RecipeCards */}
				<h2>Saved Reviews</h2>
				<CompactRecipeCardList savedRecipes={this.state.user.userSavedRecipes}></CompactRecipeCardList>



				{/* Calendar for ingredients */}
			</div>
		</>;
	}
}
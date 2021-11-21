import React from "react";
import { User } from '../../models/User';
import { CompactRecipeCardList } from '../common/CompactCardList';
import { CreateRecipe } from "../recipe/createRecipe";

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
				<h1>{this.state.user.firstName} {this.state.user.lastName}</h1>

				<CreateRecipe onRecipeAdded = {recipe => this.addRecipe(recipe)} />
				{/* Dynamically create RecipeCards */}
				<h2>Saved Recipes</h2>
				
	
				
			<h2>Created Recipes</h2>
			
			<CompactRecipeCardList userCreatedRecipes={this.state.user.createdRecipes}></CompactRecipeCardList>

			{/* Calendar for ingredients */}

		</div>

		</>
	}
}
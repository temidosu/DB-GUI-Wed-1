import React from "react";
import { User } from '../../models/User';
import { CompactRecipeCardList } from '../common/CompactCardList';
import { CreateRecipe } from "../recipe/createRecipe";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Link } from 'react-router-dom';
import { AccountRepository } from '../Api/accountRepository';

export class ProfilePage extends React.Component {

	accountRepository = new AccountRepository();
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
			'' /* Profile Picture */
			//[] /* Planner */
		),
		savedRecipe: false
	};

	addRecipe(recipe) {
		var recipes = this.state.user.createdRecipes;
	//	this.accountRepository.createRecipe(recipe)
		//	.then(recipe => recipes.push(recipe));

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

				<CreateRecipe onRecipeAdded={recipe => this.addRecipe(recipe)} class="d-block" />
				{/* Dynamically create RecipeCards */}


				<h2>Created Recipes</h2>

				<CompactRecipeCardList userCreatedRecipes={this.state.user.createdRecipes}></CompactRecipeCardList>

				{/* Calendar for ingredients */}


		</>
	}
}
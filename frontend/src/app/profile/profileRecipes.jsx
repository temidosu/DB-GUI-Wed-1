import React from "react";
import { User } from '../../models/User';
import { CompactRecipeCardList } from '../common/CompactCardList';
import { Navigate } from 'react-router-dom';
import { AccountRepository } from '../api/accountRepository';
export class ProfileRecipes extends React.Component {

	//accountRepository
	//Login form - const response
	//sessionStorage.getItem - store this
	//
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
		savedRecipe: false,
		showRecipe: false,
		addIngredients: false,
		removeIngredients: false,
		compareIngredients: false,
		removeIng: [],
		savedRecipes: [],
		createdRecipes: [],
		selectedRecipe: [],
		name: "",
		ingredientList: []
	};

	removeIngredient(ing) {
		this.state.removeIng = [...this.state.user.ingredients]; // make a separate copy of the array
		var index = this.state.removeIng.indexOf(ing)
		if (index !== -1) {
			this.state.removeIng.splice(index, 1);
			this.state.user.ingredients = this.state.removeIng;
		}
	}

	handleCheck(ingredient) {
		return this.state.user.ingredients.some(ing => ing === ingredient);
	}

	addIngredient(ingredient) {

		this.setState({ showRecipe: true });

		if (!this.handleCheck(ingredient)) {
			this.state.user.ingredients.push(ingredient);
		}
		else {
			this.removeIngredient(ingredient);
		}
	}

	onAdd() {

		this.setState({ addIngredients: true });

	}

	onRemove() {

		this.setState({ removeIngredients: true });

	}
	onCompare() {

		this.setState({ compareIngredients: true });

	}

	handleComparison(recipe) {
		return this.state.createdRecipes.some(rec => rec.recipeName === recipe.recipeName);
	}

	compareIngredients(recipeIndex) {

		if (recipeIndex >= 0)
			this.setState({ selectedRecipe: this.state.savedRecipes[recipeIndex].ingredients });

	}

	onConfirm() {

		this.setState({ addIngredients: false });
		this.setState({ removeIngredients: false });

	}

	onClose() {
		this.setState({ compareIngredients: false, selectedRecipe: [] });

	}


	async componentDidMount(){
		const userID = sessionStorage.getItem("userId")
		
		let userData = await this.accountRepository.getRecipesUserID(userID)
		this.setState({createdRecipes:userData})
		let userInfo = await this.accountRepository.getUser(userID)
		this.setState({name:userInfo[0].userName})



		let data = await this.accountRepository.getAllRecipes()
    	let ingredientArray = []
    	for (let i = 0; i < data.length; i++){
        	let words = data[i].ingredientList;
        	let wordArr = words.split(',');
        for (let j =0; j< wordArr.length; j++){
            let wordPush = wordArr[j]
            ingredientArray.push(wordPush.toLowerCase())
        }
        
    }
    	ingredientArray.sort()
    	let uniqingredientArray = [...new Set(ingredientArray)];
    	this.setState({ingredientList: uniqingredientArray})

	}





	//get ingredients list from DB
	Data = ['Mustard', 'Ketchup', 'Relish', 'Butter', 'Baking Soda', 'Pickles', 'Onions', 'Milk', 'Eggs', 'Chocolate', 'Sugar'];

	render() {
		return <>

			{sessionStorage.getItem("isAuthenticated") !== "true" &&
				(<Navigate to="/login" />)}

			<div className="ms-2" id="Profile Page">
				<h1 className ="mt-2">{this.state.name}</h1>
				<hr />
				<h3>Ingredients Center</h3>

				{this.state.addIngredients === false &&
					<button onClick={() => this.onAdd()} type="button" className="btn-sm btn-secondary bg-success me-1 ms-1">Add/Remove Ingredients</button>
				}
				{this.state.addIngredients === true &&
					<form className="form-control">
						<div className="col-6 ms-1 mb-3">
							<label htmlFor="ingredients">Select ingredients you own:</label>
							<select name="ingredients" className="selectpicker form-control" multiple onChange={event => this.addIngredient(event.target.value)}>
								{this.state.ingredientList.map((data, i) =>
									<option key={i} value={data}>{data}</option>
								)};
							</select>Ingredients Owned:
							{this.state.user.ingredients.map((ing, i) =>
								<span key={i}> {ing}, </span>)}
						</div>
						<button onClick={() => this.onConfirm()} type="button" className="btn-lg btn-secondary bg-success">Confirm</button>
					</form>}

				{this.state.compareIngredients === false &&
					<button onClick={() => this.onCompare()} type="button" className="btn-sm btn-secondary bg-info">Compare Ingredients</button>
				}
				{this.state.compareIngredients === true &&
					<form className="form-control">
						<div className="col-6 ms-1 mb-3">
							<label htmlFor="recipes">Select the recipe you would like to compare your ingredients with:</label>
							<select name="recipes" className="form-select form-control" onChange={event => this.compareIngredients(event.target.value)}>
								<option selected>Select a recipe...</option>
								{this.state.savedRecipes.map((data, i) =>
									<option key={i} value={i}>{data.recipeName}</option>
								)};
							</select>
						</div>

						<br></br>Your Ingredients: <br></br>
						{this.state.user.ingredients.map((ing, i) =>
							<span key={i}>{ing}<br></br></span>)}
						<br></br>Required Ingredients for this recipe: <br></br>
						{this.state.selectedRecipe.map((ing, i) =>
							<span key={i}>{ing}<br></br></span>)}
						<button onClick={() => this.onClose()} type="button" className="btn-lg btn-secondary bg-danger">Close</button>
					</form>
				}

				<br></br><br></br><h4>Your Ingredients: </h4>
				{this.state.user.ingredients.map((ing, i) =>
					<li className="list-group list-group-item" key={i}>{ing}<br></br></li>)}
				<hr />



				<h2>Created Recipes</h2>

				<CompactRecipeCardList userCreatedRecipes={this.state.createdRecipes}></CompactRecipeCardList>



				<h2>Saved Recipes</h2>

				<CompactRecipeCardList userCreatedRecipes={this.state.savedRecipes}></CompactRecipeCardList>



				{/* Calendar for ingredients */}

			</div>

		</>
	}
}
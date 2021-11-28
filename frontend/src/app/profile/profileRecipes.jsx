import React from "react";
import { User } from '../../models/User';
import { CompactRecipeCardList } from '../common/CompactCardList';
import { CreateRecipe } from "../recipe/createRecipe";

export class ProfileRecipes extends React.Component {
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
        removeIng: [],
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

    onAdd(){

        this.setState({ addIngredients: true }); 
        
    }

    onRemove(){

        this.setState({ removeIngredients: true }); 
        
    }

    onConfirm(){

        this.setState({ addIngredients: false }); 
        this.setState({ removeIngredients: false }); 
        
    }

    Data = ['Mustard', 'Ketchup', 'Relish', 'Butter', 'Baking Soda', 'Pickles', 'Onions', 'Milk', 'Eggs', 'Chocolate', 'Sugar'];

	render() {
		return <>
		
			<div id="Profile Page">
				<h1>{this.state.user.firstName} {this.state.user.lastName}</h1>
				{/* Make the ingredients a list, figure out how to remove ingredients */}

                <h2>My Ingredients</h2>

                {this.state.addIngredients === false &&
                <button onClick={() => this.onAdd()} type="button" className = "btn-lg btn-secondary bg-success">Edit Ingredients</button>
                    }
                {this.state.addIngredients === true && 
                <form className = "form-control">
                <div className="col-6 ms-1 mb-3">
                        <label htmlFor="ingredients">Select ingredients you own:</label>
                        <select name = "ingredients" className = "selectpicker form-control" multiple onChange={event => this.addIngredient(event.target.value)}>
                         {this.Data.map((data, i) =>
                          <option key={i} value={data}>{data}</option>
                                 )};
                                </select>Ingredients Owned: 
                                {this.state.user.ingredients.map((ing, i) =>
                                <span key = {i}> {ing}, </span>)}
                        </div>
                <button onClick={() => this.onConfirm()} type="button" className = "btn-lg btn-secondary bg-success">Confirm</button>
            </form>}

            {/*this.state.removeIngredients === false &&
            <button onClick={() => this.onRemove()} type="button" className = "btn-lg btn-secondary bg-danger">Remove Ingredients</button>
    }
                {this.state.removeIngredients === true &&
                <form className = "form-control">
                <div className="col-6 ms-1 mb-3">
                        <label htmlFor="ingredients">Select the ingredients you would like to remove:</label>
                        <select name = "ingredients" className = "selectpicker form-control" multiple onChange={event => this.removeIngredient(event.target.value)}>
                         {this.state.user.ingredients.map((data, i) =>
                          <option key={i} value={data}>{data}</option>
                                 )};
                                </select>Ingredients to remove: 
                                {this.state.removeIng.map((ing, i) =>
                                <span key = {i}> {ing}, </span>)}
                        </div>
                <button onClick={() => this.onConfirm()} type="button" className = "btn-lg btn-secondary bg-danger">Remove</button>
                                </form>*/}
                
                            <br></br>My Ingredients: <br></br>
                                {this.state.user.ingredients.map((ing, i) =>
                                <span key = {i}>{ing}<br></br></span>)}

				<h2>Saved Recipes</h2>

               
				
	
				
			<h2>Created Recipes</h2>
			
		

			{/* Calendar for ingredients */}

		</div>

		</>
	}
}
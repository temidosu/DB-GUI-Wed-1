import React from "react";
import { User } from '../../models/User';
import { Recipe } from '../../models/Recipe';
import { recipes } from '../../data/recipes';

/* Need to import the list of ingredients */

export class EditRecipe extends React.Component {

    state = {
            id: 0,
            recipeName: '',
            imageURL: '',
            rating: '',
            instructions: '',
            ingredients: [],
            description: '',
            showRecipe: false
    };

    //how do you get the creator/user?
    onCreate() {
        this.props.onRecipeAdded(this.state); /* Add to this user's 'saved'/'created' recipes */

        this.setState({
            id: 0,
            recipeName: '',
            imageURL: '',
            rating: '',
            instructions: '',
            ingredients: [],
            description: '',
            showRecipe: false
        });
    }

    removeIngredient(ing) {
        this.setState({ showRecipe: false }); 
        this.setState({ingredients: this.state.ingredients.filter(function(ingredient) { 
            return ingredient !== ing 
        })});
    }

    handleCheck(ingredient) {
        return this.state.ingredients.some(ing => ing === ingredient);
    }

    addIngredient(ingredient) {

        this.setState({ showRecipe: true }); 
        
        if (!this.handleCheck(ingredient)) {
        this.state.ingredients.push(ingredient);
        }
        else {
            this.removeIngredient(ingredient);
        }
    }
    
    Data = ['Mustard', 'Ketchup', 'Relish', 'Butter', 'Baking Soda', 'Pickles', 'Onions', 'Milk', 'Eggs', 'Chocolate', 'Sugar'];

    render() {
        return <>
            <form className = "card">
                <div className = "card-header rounded bg-danger text-light p-3 font-weight-bold h4 mt-0">Editing: {this.state.recipeName}</div>
                <div className = "card-body m-2">
                    <div className="row">
                        <div className="col-6 ms-1 mb-3">
                            <label htmlFor="recipeName">Recipe Name</label>
                            <input type="text" required name="recipeName" id="recipeName" className = "form-control" value={this.state.recipeName}
                                onChange={event => this.setState({ recipeName: event.target.value })} />
                        </div>

                        <div className="col-6 ms-1 mb-3">
                            <label htmlFor="imageURL">Photo Link</label>
                            <input type="text" required name="imageURL" id="imageURL" className = "form-control" value={this.state.imageURL}
                                onChange={event => this.setState({ imageURL: event.target.value })} />
                        </div>

                        <div className="col-6 ms-1 mb-3">
                        <label htmlFor="ingredients">Ingredients</label>
                        <select name = "ingredients" className = "selectpicker form-control" multiple data-selected-text-format="count > 3" title = "Select Ingredients" onChange={event => this.addIngredient(event.target.value)}>
                         {this.Data.map((data, i) =>
                          <option key={i} value={data}>{data}</option>
                                 )};
                                </select>Ingredients selected: 
                                {this.state.ingredients.map((ing, i) =>
                                <span key = {i}> {ing}, </span>)}
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 ms-1 mb-3">
                            <label htmlFor="instructions">Instructions</label>
                            <textarea name="instructions" id="instructions" className = "form-control" value={this.state.instructions}
                                onChange={event => this.setState({ instructions: event.target.value })}>
                            </textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 ms-1 mb-3">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="description" className = "form-control" value={this.state.description}
                                onChange={event => this.setState({ description: event.target.value })}>
                            </textarea>
                        </div>
                    </div>
                    <div className="row mt-4 mb-4">
                        <div className="col-12">
                            <button onClick={() => this.onCreate()} type="button" className = "btn-lg btn-secondary bg-primary">Create</button>
                        </div>
                    </div>
                </div>
            </form>
        </>;
    }

}

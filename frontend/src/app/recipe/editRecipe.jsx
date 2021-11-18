import React from "react";
import { User } from '../../models/User';
import { Recipe } from '../../models/Recipe';

/* Need to import the list of ingredients/how are they accessed for the select statement? */

//INCOMPLETE/NOT STARTED
export class EditRecipe extends React.Component {

    //need to prefill with users values
    state = {
        id: 0,
        recipeName: '',
        imageURL: '',
        rating: '',
        instructions: '',
        ingredients: [],
        description: ''
    };

    //how do you get the creator/user?
    onConfirm() {
        this.props.onRecipeAdded(this.state); /* Add to this user's 'saved'/'created' recipes */
    }

    //***************ingredients don't add to the set*********************
    render() {
        return <>
            <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"></link>
            <form className="card">
                <div className="card-header rounded bg-danger text-light p-3 font-weight-bold h4 mt-0">Create your own recipe!</div>
                <div className="card-body m-2">
                    <div className="row">
                        <div className="col-6 ms-1 mb-3">
                            <label htmlFor="recipeName">Recipe Name</label>
                            <input type="text" required name="recipeName" id="recipeName" className="form-control" value={this.state.recipeName}
                                onChange={event => this.setState({ recipeName: event.target.value })} />
                            </div>

                        <div className="col-6 ms-1 mb-3">
                            <label htmlFor="imageURL">Photo Link</label>
                            <input type="text" required name="imageURL" id="imageURL" className="form-control" value={this.state.imageURL}
                                onChange={event => this.setState({ imageURL: event.target.value })} />
                        </div>

                        <div className="col-6 ms-1 mb-3">
                            <label htmlFor="ingredients">Required Ingredients:</label><br></br>
                            <select className="selectpicker form-control" id="ingredients" multiple>
                                <option value="Mustard">Mustard</option>
                                <option value="Ketchup">Ketchup</option>
                                <option value="Relish">Relish</option>
                            </select>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 ms-1 mb-3">
                            <label htmlFor="instructions">Instructions</label>
                            <textarea name="instructions" id="instructions" className="form-control" value={this.state.instructions}
                                onChange={event => this.setState({ instructions: event.target.value })}>
                            </textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 ms-1 mb-3">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="description" className="form-control" value={this.state.description}
                                onChange={event => this.setState({ description: event.target.value })}>
                            </textarea>
                        </div>
                    </div>
                    <div className="row mt-4 mb-4">
                        <div className="col-12">
                            <button onClick={() => this.onConfirm()} type="button" className="btn-lg btn-secondary bg-primary">Create</button>
                        </div>
                    </div>
                </div>
            </form>
        </>;
    }

}
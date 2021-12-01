import React from "react";
import { User } from '../../models/User';
import { Recipe } from '../../models/Recipe';
import { data } from "jquery";
import { AccountRepository } from '../api/accountRepository';

export class CreateRecipe extends React.Component {

    accountRepository = new AccountRepository();


    

    state = {
            id: 0,
            recipeName: '',
            imageURL: '',
            rating: '',
            instructions: '',
            ingredients: [],
            description: '',
            creatorID: '',
            creatorName: '',
            showRecipe: false,
            valid: 2,
            review: null,
            videoLink: "",
            videoTitle: "",
            otherIngredient: '',
            ingredientList: [],
            public: 1
    };

    handleValidation() {

        let isValid = true;
        let recipeName = this.state.recipeName;
        let imageURL = this.state.imageURL;
        let instructions = this.state.instructions;
        let ingredients = this.state.ingredients;
        let description = this.state.description;

        if (recipeName === '') {
            isValid = false;
        }

        if (imageURL === '') {
            isValid = false;
        }

        if (instructions === '') {
            isValid = false;
        }

        if (description === '') {
            isValid = false;
        }

        if (!ingredients.length > 0) {
            isValid = false;
        }

        if (isValid) {
        this.setState({ valid: 0 });
        }

        return isValid;

        
    }

    async handleClick() {

          const recipe = {
            recipe: this.state.instructions,
            recipeName: this.state.recipeName,
            ingredientList: this.state.ingredients,
            recipeCreator: this.state.creatorName,
            recipePhoto: this.state.imageURL,
            recipeDesc: this.state.description,
            recipeIndc: this.state.review,
            hyperlink: this.state.videoLink,
            videoTitle: this.state.videoTitle,
            flagPublicPrivate: this.state.public,
            userID: this.creatorID
          }
          await this.articleRepository.postRecipe(recipe);
          this.setState({ redirect: true });
          return;
        
    
       /* if (this.state.button.value === "Post Article") {
          this.setState({ button: { value: "Posted", class: "btn-success disabled" } });
        }*/
      }

    //get the creator/user
    async onCreate() {

        if (this.handleValidation()) {
            let ingToString = this.state.ingredients.toString()
            let userIdToInt = parseInt(this.state.creatorID)
            const recipe = {
                recipe: this.state.instructions,
                recipeName: this.state.recipeName,
                ingredientList: ingToString,
                recipeCreator: this.state.creatorName,
                recipePhoto: null,
                recipeDesc: this.state.description,
                recipeIndc: this.state.review,
                hyperlink: this.state.videoLink,
                videoTitle: this.state.videoTitle,
                flagPublicPrivate: this.state.public,
                userID: userIdToInt
              }
              console.log(recipe)
              await this.accountRepository.postRecipe(recipe);





         
     //   this.props.onRecipeAdded(this.state); /* Add to this user's 'created' recipes */
     /*   this.setState({
            id: 0,
            recipeName: '',
            imageURL: '',
            rating: '',
            instructions: '',
            ingredients: [],
            description: '',
            creatorID: '',
            showRecipe: false,
            valid: 1,
            otherIngredient: ''
        })*/
    }
    else {
        this.setState({ valid: 0 })
    }



    }

    removeIngredient(ing) {
        this.setState({ showRecipe: false }); 
        this.setState({
            ingredients: this.state.ingredients.filter(function(ingredient) { 
            return ingredient !== ing 
        })
    });
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

    addOtherIngredient(ing) {

        if (!this.handleCheck(ing)) {
            this.state.ingredients.push(ing);
            }

            this.setState({otherIngredient: ''})

    }
    
    //get ingredients list from the DB
    Data = ['Mustard', 'Ketchup', 'Relish', 'Butter', 'Baking Soda', 'Pickles', 'Onions', 'Milk', 'Eggs', 'Chocolate', 'Sugar'];

    render() {
        return <>
            <form className = "card">
                <div className = "card-header rounded bg-danger text-light p-3 font-weight-bold h4 mt-0">Create your own recipe!</div>
                <div className = "card-body m-2">
                    <div className="row">
                        <div className="col-6 ms-1 mb-3">
                            <label htmlFor="recipeName">Recipe Name</label>
                            <input type="text" required="required" name="recipeName" id="recipeName" className = "form-control" value={this.state.recipeName}
                                onChange={event => this.setState({ recipeName: event.target.value })} />
                        </div>

                        <div className="col-6 ms-1 mb-3">
                            <label htmlFor="imageURL">Photo Link</label>
                            <input type="text" required="true" name="imageURL" id="imageURL" className = "form-control" value={this.state.imageURL}
                                onChange={event => this.setState({ imageURL: event.target.value })} />
                        </div>

                        <div className="col-6 ms-1 mb-3">
                        <label htmlFor="ingredients">Ingredients</label>
                        <select name = "ingredients" required="true" className = "selectpicker form-control" multiple data-selected-text-format="count > 3" title = "Select Ingredients" onChange={event => this.addIngredient(event.target.value)}>
                         {this.state.ingredientList.map((data, i) =>
                          <option key={i} value={data}>{data}</option>
                                 )};
                                </select>Ingredients selected: 
                                {this.state.ingredients.map((ing, i) =>
                                <span key = {i}> {ing}, </span>)}
                        </div>
                        {/*Add/post otherIngredient to the database*/}
                        <div className="col-6 ms-1 mb-3">
                            <label htmlFor="otherIngredient">Add an ingredient not listed: (optional)</label>
                            <input type="text" name="otherIngredient" id="otherIngredient" className = "form-control" value = {this.state.otherIngredient} onChange={event => this.setState({otherIngredient: event.target.value})} />
                            <button onClick={() => this.addOtherIngredient(this.state.otherIngredient)} type="button" className = " mt-2 btn-sm btn-secondary bg-primary">Add</button>
                        </div>
                       
                    </div>
                    <div className="row">
                        <div className="col-12 ms-1 mb-3">
                            <label htmlFor="instructions">Instructions</label>
                            <textarea name="instructions" id="instructions" required="true" className = "form-control" value={this.state.instructions}
                                onChange={event => this.setState({ instructions: event.target.value })}>
                            </textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 ms-1 mb-3">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="description" required="true" className = "form-control" value={this.state.description}
                                onChange={event => this.setState({ description: event.target.value })}>
                            </textarea>
                        </div>
                    </div>
                    <div className="row mt-4 mb-4">
                        <div className="col-12">
                            <button onClick={() => this.onCreate()} type="button" className = "btn-lg btn-secondary bg-primary">Create</button>
                            {this.state.valid === 0 &&
                            <p className = "mt-3 text-danger">Please make sure the form is completely filled out before submitting.</p>
                            }
                            {this.state.valid === 1 &&
                            <p className = "mt-3 text-success">Recipe successfully created!</p>
                            }
                        </div>
                    </div>
                </div>
            </form>      
        </>;
    }
// CreatorID for new recipe should be passed in through props
async componentDidMount() {
    this.setState({creatorID : sessionStorage.getItem("userId")});
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
    



    let userData = await this.accountRepository.getUser(sessionStorage.getItem("userId"))
    this.setState({creatorName: userData[0].userName})

}
}

import React from 'react';
import { useParams } from 'react-router-dom';

import { CompactRecipeCard } from '../common/CompactRecipeCard';
import { CompactRecipeCardList } from '../common/CompactCardList';
import { FaStar } from "react-icons/fa"
import './review.css'
import { AccountRepository } from '../api/accountRepository';
import { Recipe } from '../../models/Recipe';

export class ViewRecipe extends React.Component {
	accountRepository = new AccountRepository();
	constructor(){
		super();
	

		this.state = {
			card: {
				hyperlink: "",
				ingredientList: "",
				postID: 0,
				recipe: "",
				recipeCreator: "",
				recipeDesc: "",
				recipeID: 0,
				recipeIndc: "",
				recipeName: "",
				recipePhoto: "",
				userID: 0,
				videoTitle: "",
			},

			rating: 0,
			hover: 0,
			buttonVal: "Save",
			reviews: [],
			yourReview: 0,
			averageReview: 0
		}
	}
	

	/*returnRecipe() {
		if(this.state.reviews === undefined){

		}
		
	}*/


	async updateReview(e){
		if(this.state.reviews === undefined){
			await this.accountRepository.postReview(sessionStorage.getItem("recipeID"), sessionStorage.getItem("userId"), e)
		}
		else if(this.state.reviews !== undefined){
			for(let i = 0; i<this.state.reviews.length; i++){
				
			}
		}
		
	}

	async componentDidMount() {
		
		const id = sessionStorage.getItem("recipeID")
		const card = await this.accountRepository.getRecipe(id)
		this.setState({card: card[0]})
		
		let userData = await this.accountRepository.getUser(sessionStorage.getItem("userId"))
		this.setState({creatorName: userData[0].userName})
		
		let reviewData = await this.accountRepository.getReview(id)
		this.setState({reviews: reviewData})
	
	}


	render() {


		return <>
			<div id="CompactRecipeCard" className="mt-2">
        <li className="list-group mb-0 p-0"></li>
        {
            //  !props.createdRecipes.length && <li className= "list-group-item">No recipe created yet!</li>
        }
        {
            //works but this is incomplete - only show 'edit' button if the user logged in created the recipe
            <li className="card rounded container mb-4 list-group p-0 border border-danger">
                
                <div>
				<h2 className="h2 card-title card-header bg-danger text-light" style={{background: 'red'}}>
                            <a href="/viewRecipe" style = {{textDecoration: 'none', color: 'white'}} onClick={e=> this.setRecipeID(e)}>{this.state.card.recipeName}</a>
							<button type="button" className = "float-end mt-1 mb-2 btn btn-sm btn-info" style= {{width: '80px'}}>{this.state.buttonVal}</button>
                        </h2>

						<h5 className="h5 card-footer">
						Recipe Creator: {this.state.card.recipeCreator}
                        </h5>
				
                    {/* [1, 2, 3, 4, 5].map(x => (<i key={x} className={(x > this.props.card.rating ? 'empty-star' : 'full-star')}></i>)) */}
                </div>
				<img className = "card-img-top" style={{height: '40%', width: '40%'}} src = {this.state.card.recipePhoto} alt= "Recipe image"></img>
			
                <div className="card-body p-0">
                    <div className="row mt-1 mb-1 ms-1">
					
						<div className = "h4 mt-1">
						<div>Ingredients: </div>
						<div className="row mt-1 mb-1 ms-1 ">
						{
							
							<div className="row mb-1">
							<div className="card-text text-muted h6">{this.state.card.ingredientList}</div>
							</div>
						}
						</div>
						<h4>Instructions:</h4>
						<div className="row mt-1 mb-1 ms-1">
                        <div className="card-text text-muted h6">{this.state.card.recipe}</div>
                        </div>

						<h4>Description:</h4>
                    <div className="row mt-1 mb-1 ms-1">
                        <div className="text-muted card-text h6">"{this.state.card.recipeDesc}"</div>
                    </div>

						</div>
			
					</div>
				
                    <div>

                    </div>
                </div>

            </li>
        }</div>

		</>;


	}

	

}

export default (ViewRecipe);
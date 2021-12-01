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
	
		


		state = {
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
			averageReview: 0,
			saveRecipe: "Save"
		}
	
	

	/*returnRecipe() {
		if(this.state.reviews === undefined){

		}
		
	}*/
	async onSave(){
		//let userId = sessionStorage.getItem("userId")
		//let recipeId = sessionStorage.getItem("recipeID")
		if (this.state.saveRecipe === "Save"){
		//	await this.accountRepository.postSaved(userId, recipeId)
			this.setState({saveRecipe: "Unsave"})
		}
		else{
		//	await this.accountRepository.deleteSaved(userId, recipeId)
			this.setState({saveRecipe: "Save"})
		}
	}


	async updateReview(e){
		
		
	}

	async componentDidMount() {
		
		const id = sessionStorage.getItem("recipeID")
		const card = await this.accountRepository.getRecipe(id)
		this.setState({card: card[0]})
		
		let userData = await this.accountRepository.getUser(sessionStorage.getItem("userId"))
		this.setState({creatorName: userData[0].userName})
		
		let reviewData = await this.accountRepository.getReview(id)
		this.setState({reviews: reviewData})
		
		/*if(this.state.reviews === undefined){
			this.setState({yourReview: 0, averageReview: null})
		}
		else if(this.state.reviews !== undefined){
			for(let i = 0; i<this.state.reviews.length; i++){
				if(sessionStorage.getItem("userId") === this.state.reviews[i].userID){
					this.setState({yourReview: this.state.reviews[i].reviewRate})
				}
			}
		}


		const userId = sessionStorage.getItem("userId")
		console.log(id)
		let savedData = await this.accountRepository.getSaved(userId, id)
		//console.log(savedData)
		
		if(savedData === undefined){
			this.setState({saveRecipe: "Save"})
		}
		else{
			this.setState({saveRecipe: "Unsave"})
		}*/

	
	
	}


	render() {


		return <>
			<div>
				<h1>Review and Save Recipe!</h1>
				<div id="CompactRecipeCard">
					<li className="list-group mb-0"></li>
					{
						//  !props.createdRecipes.length && <li className= "list-group-item">No recipe created yet!</li>
					}
					{
						//works but this is incomplete
						<li className="card rounded container mb-4 list-group p-0">

							<div className="card-header">
								{/* [1, 2, 3, 4, 5].map(x => (<i key={x} className={(x > props.card.rating ? 'empty-star' : 'full-star')}></i>)) */}
							</div>
							<div className="card-body">
								<div className="row mt-1 mb-1 ms-1">
									<h2 className="h4" >
										{this.state.card.recipeName}
									</h2>

									<img src={this.state.card.hyperlink}></img>
									<div className="text-muted h5">{this.state.card.recipeIndc}</div>
									<div>
										<h4>Author: {this.state.card.recipeCreator}</h4>
									</div>

									


									{/* Add ingredients and creator*/}
								</div>
								<div className="row mt-1 mb-1 ms-1">
									<div className="text-muted"><p className="h4">"{this.state.card.recipeDesc}"</p></div>
								</div>
								<div>

								</div>
							</div>
						</li>
					}</div>


				<div>
					<h3>Review</h3>
					{[...Array(5)].map((star, i) => {
						const ratingValue = i + 1;
						return (
							<label>
								<input type="radio" 
								name="rating" 
								value={this.state.yourReview} 
								onClick={event => this.updateReview(event.target.value)} 
								/>

								<FaStar classname="star" color={ratingValue <= this.state.rating ? "#ffc107" : "#e4e5e9"} size={50} />
							</label>)
					})
					}
				</div>
				<div>
					<h4>
						Average Review
					</h4>
				</div>
			</div>

			<div>
				<h3>Save Recipe!</h3>

			</div>
			<div>
				<button onClick={() => this.onSave()} type="button" className = "btn-lg btn-secondary bg-primary">{this.state.saveRecipe}</button>
				
			</div>

		</>;


	}

	

}

export default (ViewRecipe);
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
			buttonVal: "Save"
		}
	}
	

	returnRecipe() {

		
	}

	async componentDidMount() {
		
		const id = sessionStorage.getItem("recipeID")
		const card = await this.accountRepository.getRecipe(id)
		console.log(card[0])
		this.setState({card: card[0]})
		
		
	
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
								<input type="radio" name="rating" value={ratingValue} onClick={() => this.setState({ rating: ratingValue })} />
								<FaStar classname="star" color={ratingValue <= this.state.rating ? "#ffc107" : "#e4e5e9"} size={50} />
							</label>)
					})
					}
				</div>
			</div>

			<div>
				<h3>Save Recipe!</h3>

			</div>
			<div>
				<button type="button">{this.state.buttonVal}</button>
			</div>

		</>;


	}

}

export default (ViewRecipe);
import React from "react";
import { Link, NavLink } from 'react-router-dom'




export class CompactRecipeCard extends React.Component {

	setRecipeID(e) {
		sessionStorage.setItem("recipeID", this.props.card.recipeID);
		console.log(sessionStorage.getItem("recipeID"))
	}

	/*conditionEdit(){
		if(this.props.card.userID === sessionStorage.getItem("userId")){
			console.log("HEYYYY")
			console.log(this.props.card.userID, sessionStorage.getItem("userId"))
			return <>
				<button type="button" className = "float-end mt-1 mb-2 btn btn-sm btn-info" style= {{width: '80px'}}>
									<NavLink to ={ '/editRecipe'} style = {{textDecoration: 'none', color: 'black'}}>Edit</NavLink></button>
			</>
		}
	}*/


	render() {
		return <>
			<div id="CompactRecipeCard">
				<li className="list-group mb-0 p-0"></li>
				{
					//  !props.createdRecipes.length && <li className= "list-group-item">No recipe created yet!</li>
				}
				{
					//works but this is incomplete - only show 'edit' button if the user logged in created the recipe
					<li className="card rounded container mb-4 list-group p-0 border border-danger">

						<div>
							<h2 className="h2 card-title card-header bg-danger text-light" style={{ background: 'red' }}>
								<a href="/viewRecipe" style={{ textDecoration: 'none', color: 'white' }} onClick={e => this.setRecipeID(e)}>{this.props.card.recipeName}</a>
								<button type="button" className="float-end mt-1 mb-2 btn btn-sm btn-info" style={{ width: '80px' }}>
									<NavLink to={'/editRecipe'} style={{ textDecoration: 'none', color: 'black' }}>Edit</NavLink></button>
							</h2>

							<h5 className="h5 card-header">
								Rating placeholder
							</h5>

							{/* [1, 2, 3, 4, 5].map(x => (<i key={x} className={(x > this.props.card.rating ? 'empty-star' : 'full-star')}></i>)) */}
						</div>
						<img className="card-img-top" style={{ height: '300px', width: '100%' }} src={this.props.card.hyperlink} alt="Recipe image"></img>

						<div className="card-body p-0">
							<div className="row mt-1 mb-1 ms-1">

								<div className="h4 mt-1">

									<h4>Instructions:</h4>
									<div className="row mt-1 mb-1 ms-1">
										<div className="card-text text-muted h6">{this.props.card.recipeIndc}</div>
									</div>

									<h4>Description:</h4>
									<div className="row mt-1 mb-1 ms-1">
										<div className="text-muted card-text h6">"{this.props.card.recipeDesc}"</div>
									</div>

								</div>

							</div>

							<div>

							</div>
						</div>
						<div className="card-footer mb-0">
							<h5>Recipe Creator: {this.props.card.recipeCreator}</h5>
						</div>
					</li>
				}</div>
		</>

	}
}
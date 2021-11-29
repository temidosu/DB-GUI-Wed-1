import React from "react";
import {Link} from 'react-router-dom'





export class CompactRecipeCard extends React.Component {
    
setRecipeID(event){
    sessionStorage.setItem("recipeID", this.props.card.recipeID);
    console.log(sessionStorage.getItem("recipeID"))
}


    render() {
        return <>


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
					<img className = "card-img-top thumbnail img-fluid" src = {this.props.card.imageURL} alt= "Recipe image"></img>
					<a className = "float-end "href="/editRecipe">Edit</a>
                        <h2 className="h4 card-title">
                            <a href="/viewRecipe" onClick={e=> this.setRecipeID(e)}> {this.props.card.recipeName}</a>
                        </h2>
						
                        <img src = {this.props.card.imageURL}></img>
                        <div className="text-muted h5">{this.props.card.instructions}</div>
                        <div>
                        <h4>Author: {this.props.card.author}</h4>
                        </div>

						<div className = "h4">
						<div>Ingredients: </div>
						{
							
						this.props.card.ingredients.map((currentIng, i) => <li key={i}>
						<div>
							<p className = "h5 card-text">{currentIng}</p>
						</div>
						</li>)
						}

						</div>
					
						
                        {/* Add ingredients and creator*/}
                    </div>
                    <div className="row mt-1 mb-1 ms-1">
                        <div className="text-muted card-text"><p className="h4">"{this.props.card.description}"</p></div>
                    </div>
                    <div>

                    </div>
                </div>
            </li>
        }</div>
</>

    }
}


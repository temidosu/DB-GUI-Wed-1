import React from "react";
import {Link, NavLink} from 'react-router-dom'





export class CompactRecipeCard extends React.Component {
    
setRecipeID(event){
    sessionStorage.setItem("recipeID", this.props.card.recipeID);
    console.log(sessionStorage.getItem("recipeID"))
}


    render() {
        return <>


    <div id="CompactRecipeCard">
        <li className="list-group mb-0 p-0"></li>
        {
            //  !props.createdRecipes.length && <li className= "list-group-item">No recipe created yet!</li>
        }
        {
            //works but this is incomplete - only show edit button if the user logged in created the recipe
            <li className="card rounded container mb-4 list-group p-0">
                
                <div>
				<h2 className="h2 card-title card-header ">
                            <a href="/viewRecipe" style = {{textDecoration: 'none'}} onClick={e=> this.setRecipeID(e)}>{this.props.card.recipeName}</a>
							<button type="button" className = "float-end mt-1 mb-2 btn btn-sm btn-info" style= {{width: '80px'}}>
								<NavLink to ={ '/editRecipe'} style = {{textDecoration: 'none', color: 'black'}}>Edit</NavLink></button>
                        </h2>

						<h5 className="h5 card-header">
                           Rating placeholder
                        </h5>
				
                    {/* [1, 2, 3, 4, 5].map(x => (<i key={x} className={(x > this.props.card.rating ? 'empty-star' : 'full-star')}></i>)) */}
                </div>
				<img className = "card-img-top" style={{height: '500px', width: '100%'}} src = {this.props.card.imageURL} alt= "Recipe image"></img>
			
                <div className="card-body p-0">
                    <div className="row mt-1 mb-1 ms-1">
					
						<div className = "h4 mt-1">
						<div>Ingredients: </div>
						<div className="row mt-1 mb-1 ms-1 ">
						{
							
						this.props.card.ingredients.map((currentIng, i) => <ul key={i}>
						<div className="list-group-item list-group-flush">
							<p className = "h6 card-text">{currentIng}</p>
						</div>
						</ul>)
						}
						</div>
						<h4>Instructions:</h4>
						<div className="row mt-1 mb-1 ms-1">
                        <div className="card-text text-muted h6">{this.props.card.instructions}</div>
                        </div>

						</div>
				
                    
					<h4>Description:</h4>
                    <div className="row mt-1 mb-1 ms-1">
                        <div className="text-muted card-text"><p className="h6">"{this.props.card.description}"</p></div>
                    </div>
					</div>
				
                    <div>

                    </div>
                </div>
				<div className = "card-footer mb-0">
                        <h5>Recipe Creator: {this.props.card.author}</h5>
                        </div>
            </li>
        }</div>
</>

    }
}


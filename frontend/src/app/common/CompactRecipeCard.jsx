import React from "react";

export const CompactRecipeCard = props => <>
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
                        <h2 className="h4">{props.card.recipeName}</h2>
						
                        <img src = {props.card.imageURL}></img>
                        <div className="text-muted h5">{props.card.instructions}</div>

						<div >
						{
						props.card.ingredients.map((currentIng, i) => <li key={i}>
						<div>
							<p >{currentIng}</p>
						</div>
						</li>)
						}

						</div>
					
						
                        {/* Add ingredients and creator*/}
                    </div>
                    <div className="row mt-1 mb-1 ms-1">
                        <div className="text-muted"><p className="h4">"{props.card.description}"</p></div>
                    </div>
                    <div>

                    </div>
                </div>
            </li>
        }</div>
</>;
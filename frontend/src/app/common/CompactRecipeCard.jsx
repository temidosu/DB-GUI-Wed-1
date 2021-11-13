import React from "react";

export const CompactRecipeCard = props => <>
	<div id="CompactRecipeCard">
		<h2>{this.props.recipeName}</h2>
		<img src={this.props.imageURL}></img>
		<p>{this.props.creator}</p>

		<span className="stars">
			{
				[1, 2, 3, 4, 5].map(x => (<i key={x} className={(x > props.rating ? 'empty-star' : 'full-star')}></i>))
			}
		</span>
		

		<ul className="list-group">

			{/* TODO: Cap this at an arbitrary maximum (ie 5) so the card isn't flooded with ingredients */}
			<li className="list-group-item"></li>
			{
				props.ingredients.map((x, i) => <li className="list-group-item" key={i}>
					{x.recipeName}
					
				</li>)
			}
		</ul>

		<p>{this.props.description}</p>

	</div>
</>;
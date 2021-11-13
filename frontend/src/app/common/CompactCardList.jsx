import React from 'react';
import { CompactRecipeCard } from './CompactRecipeCard';


function isSavedorCreated(isSaved) {
	// const [savedRecipe, setRecipe] = useState(true);
	if (isSaved === true) {
		return "No recipes saved!"
	}
	else {
		return "No recipes created!"
	}
}

export const CompactRecipeCardList = props => <>
	<ul className="list-group">
		<li className="list-group-item border-0"></li>
		{
			<li className="bg-secondary rounded-top list-group-item">{this.isSavedorCreated(this.isSaved)}</li>
		}
		{
			props.savedRecipes.map((x, i) => <li className="list-group-item pl-0 pr-0 " key={i}>
				<div>
					<CompactRecipeCard card={x.props}></CompactRecipeCard>
				</div>
			</li>)
		}
	</ul>
</>;
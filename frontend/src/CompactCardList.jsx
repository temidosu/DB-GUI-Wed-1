import React from 'react';
import { CompactRecipeCard } from './CompactRecipeCard';

export const CompactRecipeCardList = props => <>
	<ul className="list-group">
		<li className="list-group-item border-0"><h3 className="d-inline">Saved Recipies</h3> <h3 className="text-secondary d-inline">({props.userSavedRecipes.length})</h3></li>
		{
			!props.userSavedRecipes.length && <li className="bg-secondary rounded-top list-group-item">No saved recipes!</li>
		}
		{
			props.userSavedRecipes.map((x, i) => <li className="list-group-item pl-0 pr-0 " key={i}>{x.number}
				<div>
					<CompactRecipeCard card={x.props}></CompactRecipeCard>
				</div>
			</li>)
		}
	</ul>
</>;
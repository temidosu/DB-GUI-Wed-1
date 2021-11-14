import React from 'react';
import { CompactRecipeCard } from './CompactRecipeCard';


export const CompactRecipeCardList = props => <>
	<ul className="list-group">
		<li className="list-group-item border-0"></li>
		{
			props.savedRecipes.map((x, i) => <li className="list-group-item pl-0 pr-0 " key={i}>
				<div>
					<CompactRecipeCard card={x.props}></CompactRecipeCard>
				</div>
			</li>)
		}
	</ul>
</>;
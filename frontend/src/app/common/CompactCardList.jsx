import React from 'react';
import { CompactRecipeCard } from './CompactRecipeCard';

export const CompactRecipeCardList = props => <>
	<ul className="list-group">
		<li className="list-group-item border-0"></li>
		{
			<li className="bg-secondary rounded-top list-group-item"></li>
		}
		{
			props.userCreatedRecipes.map((currentCard, i) => <li className="list-group-item pl-0 pr-0 " key={i}>
				<div>
					<CompactRecipeCard card={currentCard}></CompactRecipeCard>
				</div>
			</li>)
		}
	</ul>
</>;
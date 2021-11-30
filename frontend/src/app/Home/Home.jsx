import React from 'react';
import { Navigate } from 'react-router-dom';
import './Homestyle.css'
import { CompactRecipeCard } from '../common/CompactRecipeCard';
// import { recipes } from '../../DummyData/recipeData';
import { Search } from '../Search/Search';


//import { HomeRepository } from '../Api/homeRepository';


export class Home extends React.Component {

	//homeRepo = new HomeRepository();

	state = {

	};

	render() {
		return <>
			{sessionStorage.getItem("isAuthenticated") !== "true" &&
				(<Navigate to="/login" />)}


			<div>
				<Search />
			</div>


		</>;
	}


}

export default Home;
import React from 'react';
import { Navigate } from 'react-router-dom';
import './Homestyle.css'
import { Search } from '../Search/Search';


export class Home extends React.Component {


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
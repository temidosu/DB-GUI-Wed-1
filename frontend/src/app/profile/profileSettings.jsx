import React from "react";
import { User } from '../../models/User';
import { Navigate } from 'react-router-dom';
import { AccountRepository } from '../api/accountRepository';

export class ProfileSettings extends React.Component {
	accountRepository = new AccountRepository();

	state = {
	};

	render() {
		if (!this.state.user) {
			return <div class="container">Loading...</div>
		}

		return <>
			{sessionStorage.getItem("isAuthenticated") !== "true" &&
				(<Navigate to="/login" />)}

			<div id="Profile Page">
				{/* <h1>{this.state.currentUser.firstName} {this.state.currentUser.lastName}</h1> */}
				<img src={this.state.user.profilePic}></img>

				<h2>Account information: </h2>
				<h4>{this.state.user.email}</h4>
				<h4>Saved Recipes: {this.state.user.savedRecipes}</h4>
				<h4>Saved Recipes: {this.state.user.savedRecipes}</h4>

				<h4>{

				}
				</h4>

				{/* Account info/edit button */}
			</div>

		</>
	}

	componentDidMount() {

		const id = sessionStorage.getItem("userId");
		this.accountRepository.getUser(id)
			.then(user => this.setState({ user }));

		console.log("JFG");
	}
}
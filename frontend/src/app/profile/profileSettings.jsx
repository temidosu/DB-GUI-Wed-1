import React from "react";
import { User } from '../../models/User';
import { Navigate } from 'react-router-dom';
import { AccountRepository } from '../api/accountRepository';

export class ProfileSettings extends React.Component {
	accountRepository = new AccountRepository();

	state = {
	};

	render() {
		if (!this.state) {
			return <div class="container">Loading...</div>
		}

		return <>
			{sessionStorage.getItem("isAuthenticated") !== "true" &&
				(<Navigate to="/login" />)}

			<div id="Profile Page">
				<h1>{this.state.firstName} {this.state.lastName}</h1>
				<img src={this.state.profilePic}></img>

				<h2>Account information: </h2>
				<h4>{this.state.userEmail}</h4>
				<h4>Saved Recipes: {this.state.savedRecipes}</h4>
				<h4>Saved Recipes: {this.state.savedRecipes}</h4>

				<h4>{

				}
				</h4>

				{/* Account info/edit button */}
			</div>

		</>
	}

	async componentDidMount() {
		const id = sessionStorage.getItem("userId");
		const user = await this.accountRepository.getUser(id);


		this.setState(user.data[0]);
		console.log(user.data[0]);


		// this.accountRepository.getUser(id)
		// 	.then(user => this.setState({ user }));

	}
}
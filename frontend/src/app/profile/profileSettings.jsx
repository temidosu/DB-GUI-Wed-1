import React from "react";
import { User } from '../../models/User';

export class ProfileSettings extends React.Component {
	state = {

		// This will get set by profilepage's parent later
		user: new User(
			1,
			"John",
			"Doe",
			"jdoe@gmail.com",
			[], /* savedRecipes */
			[], /* createdRecipes */
			[], /* ingredients */
            '', /* Profile Picture */
			//[] /* Planner */
		),
	};

	render() {
		return <>
		
			<div id="Profile Page">
				<h1>{this.state.user.firstName} {this.state.user.lastName}</h1>
                <img src = {this.state.user.image}></img>
                <h2>Account information: </h2>
                <h4>{this.state.user.email}</h4>

		
			{/* Account info/edit button */}

		</div>

		</>
	}
}
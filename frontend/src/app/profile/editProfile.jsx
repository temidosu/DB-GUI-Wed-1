import React from "react";
import { User } from '../../models/User';

export class EditProfile extends React.Component {
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
			//[] /* Planner */
		),
	};

	render() {
		return <>
		
			<div id="Profile Page">
				<h1>{this.state.user.firstName} {this.state.user.lastName}</h1>
		
			{/* Account info/edit button */}

		</div>

		</>
	}
}
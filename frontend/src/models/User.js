export class User {
	constructor(id, firstName, lastName, email, savedRecipes, createdRecipes, ingredients, profilePic) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.savedRecipes = savedRecipes;
		this.createdRecipes = createdRecipes;
		this.ingredients = ingredients;
		this.profilePic = profilePic;
	}
}
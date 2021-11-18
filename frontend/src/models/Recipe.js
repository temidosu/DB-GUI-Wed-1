export class Recipe {
	constructor(id, recipeName, imageURL, rating, instructions, ingredients, description, creatorID) {
		this.id = id;
		this.recipeName = recipeName;
		this.imageURL = imageURL;
		this.rating = rating;
		this.instructions = instructions;
		this.ingredients = ingredients;
		this.description = description;
		this.creatorID = creatorID;
	}
}
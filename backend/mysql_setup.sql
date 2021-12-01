CREATE DATABASE IF NOT EXISTS r2rdb;

USE r2rdb;

CREATE TABLE users (
	userID int AUTO_INCREMENT PRIMARY KEY, 
	userName varchar(50), 
    userPass varchar(100), 
    userBio varchar(350), 
    userEmail varchar(50), 
    userPhoto blob
);

CREATE TABLE recipes (
	recipeID int AUTO_INCREMENT PRIMARY KEY,
	recipe varchar(10000),
	recipeName varchar(100),
	ingredientList varchar(5000),
	recipeCreator varchar(50),
	recipePhoto varchar(100),
	recipeDesc varchar(350),
	recipeIndc int,
	hyperlink varchar(50),
	videoTitle varchar(50),
	flagPublicPrivate int,
	postID int,
    userID int,
    FOREIGN KEY (userID) REFERENCES users(userID) on DELETE CASCADE on UPDATE CASCADE
);

CREATE TABLE ingredients (
	ingredientID int AUTO_INCREMENT PRIMARY KEY,
	ingredientName varchar(50),
	ingredientSub varchar(50),
    recipeID int,
    FOREIGN KEY (recipeID) REFERENCES recipes(recipeID) on DELETE CASCADE on UPDATE CASCADE
);

CREATE TABLE reviews (
	reviewID int AUTO_INCREMENT PRIMARY KEY,
	reviewRate int,
	reviewDescription varchar(350),
    userID int,
    recipeID int,
    FOREIGN KEY (userID) REFERENCES users(userID) on DELETE CASCADE on UPDATE CASCADE,
    FOREIGN KEY (recipeID) REFERENCES recipes(recipeID) on DELETE CASCADE on UPDATE CASCADE
);

CREATE TABLE messages (
	messageID int AUTO_INCREMENT PRIMARY KEY,
	messageText varchar(350),
	replyTo int,
    userID int,
    FOREIGN KEY (userID) REFERENCES users(userID) on DELETE CASCADE on UPDATE CASCADE
);

CREATE TABLE plannedMeals (
	mealID int AUTO_INCREMENT PRIMARY KEY,
	mealDate date,
    userID int,
    recipeID int,
	FOREIGN KEY (userID) REFERENCES users(userID) on DELETE CASCADE on UPDATE CASCADE,
    FOREIGN KEY (recipeID) REFERENCES recipes(recipeID) on DELETE CASCADE on UPDATE CASCADE
);
CREATE TABLE favRecipes (
	favRecipeID int AUTO_INCREMENT PRIMARY KEY,
    userID int,
    recipeID int,
	FOREIGN KEY (userID) REFERENCES users(userID) on DELETE CASCADE on UPDATE CASCADE,
    FOREIGN KEY (recipeID) REFERENCES recipes(recipeID) on DELETE CASCADE on UPDATE CASCADE
);

CREATE TABLE userIngredients (
    userID int,
    ingredientID int,
	FOREIGN KEY (userID) REFERENCES users(userID) on DELETE CASCADE on UPDATE CASCADE,
    FOREIGN KEY (ingredientID) REFERENCES ingredients(ingredientID) on DELETE CASCADE on UPDATE CASCADE
);

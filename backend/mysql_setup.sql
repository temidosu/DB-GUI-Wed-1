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
	recipePhoto varchar(400),
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

INSERT INTO users (userID, userName, userPass, userBio, userEmail)
	VALUES (1, "Vlad Smirnoff", "M0th3rRu55ia!", "My name Vlad. I love my home country, hail the sickle.", "vsmirnoff@gmail.com"),
		   (2, "Jeffery Beez", "4maZ0nR0x#","This is not a copy of Jeff Bezo's account, so don't take it as such", "AmazonOwner@gmail.com"),
		   (3, "BILLY GATES", "Ay00000!", "This is some random stuff that might exist within a bio, dont ask for anything else.","IOwnIt@gmail.com");

INSERT INTO recipes (recipeID, recipe, recipeName, ingredientList, recipeCreator, recipeDesc, recipeIndc, hyperlink, videoTitle, flagPublicPrivate, userID, recipePhoto)
	VALUES (1,"Put toppings on dough, put dough in oven", "Classic Cheese Pizza","Pizza Dough, American Cheese, Marinara Sauce","Vlad Smirnoff","Its a Cheese Pizza",1,"https://www.youtube.com/watch?v=sv3TXMSv6Lw","How to make da pizza",1,1, "https://images.contentstack.io/v3/assets/bltbb619fd5c667ba2d/blt2d4e43bcebe1548e/60ca60fa1e0505677a881227/Cheese_Pizza.jpg"),
		   (2,"Put the ham on the sandwich, BOOM!", "Ham Sandwich","White Bread, Ham","Jeffery Beez","Delicious white bread with ham",2,"https://www.youtube.com/watch?v=JsZoKrxJbjs","Making the perfect Ham Sandwich",1,2, "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190322-ham-sandwich-horizontal-1553721016.png"),
		   (3,"Cut the potatoes, and fry them!","Potato Fries", "Potatoes", "BILLY GATES", "Yummy, Crunchy Fries made from potatoes",3,"https://www.youtube.com/watch?v=E7Ap-g2j6T0", "How to: French Fries", 0,3, "https://juliascuisine.com/wp-content/uploads/2020/02/fries-500x500.jpg"),
		   (4,"Slather PB and J on both sides of Bread, then enjoy!", "PB&J Sandwich","White Bread, Peanut Butter, Jelly","BILLY GATES","A delicious, satisfying PB&J",4,"https://www.youtube.com/watch?v=2GxhN84gJwA","The Perfect PB&J",1,3, "https://www.baycare.net/media/5194/pbj-baycare-clinic-blog.jpg"),
		   (5,"Lay the tortilla chips on a plate, then put beans, cheese, and meat on top!","Loaded Nachos","Tortilla Chips, black beans, mozzarella cheese, ground beef", "Vlad Smirnoff","Crispy Nachos with beans, cheese, and meat",5,"https://www.youtube.com/watch?v=KLCX8_r5GB8","Ultimate Nacho Recipe",1,1, "https://www.spendwithpennies.com/wp-content/uploads/2018/12/SpendWithPennies-Best-Loaded-Nachos-22.jpg"),
		   (6,"Slather celery in Peanut Butter and lay raisins on it","Ants on a Log","Celery, Peanut Butter, Raisins","BILLY GATES","A refreshing snack made with celery, Peanut Butter, and Raisins",6,"https://www.youtube.com/watch?v=WjFHOVSFeLQ", "How To Make Ants on a Log",0,3, "https://www.iheartnaptime.net/wp-content/uploads/2019/07/ants-on-a-log.jpg");
           
INSERT INTO ingredients (ingredientID, ingredientName, ingredientSub, recipeID) 
	VALUES (1,"Pizza Dough","N/A",1),
		   (2,"American Cheese","Goat Cheese",1),
		   (3,"Marinara Sauce","Tomato Paste",1),
		   (4,"White Bread","Multigrain Bread",2),
		   (5,"Ham","Turkey",2),
		   (6,"Potatoes","Apples",3),
		   (7,"White Bread", "Multigrain Bread",4),
		   (8,"Peanut Butter","Marshmellow",4),
		   (9,"Jelly","Nutella",4),
		   (10,"Tortilla Chips","Corn Chips",5),
		   (11,"Black Beans","Pinto Beans",5),
		   (12,"Mozarella Cheese","Cheddar Jack Cheese",5),
		   (13,"Ground Beef","Tofu",5),
		   (14,"Celery","Apple",6),
		   (15,"Peanut Butter","Nutella",6),
		   (16,"Raisins","N/A",6);
           
INSERT INTO favRecipes (favRecipeID, userID, recipeID)
	VALUES (1,1,6),
		   (2,3,5),
           (3,2,3);
           
SELECT * FROM recipes

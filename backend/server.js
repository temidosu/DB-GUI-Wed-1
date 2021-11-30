require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//const routes = require('./routes');
var app = express();

// set up some configs for express.
const config = {
	name: 'sample-express-app',
	port: 8000,
	host: '0.0.0.0',
};

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


let loginEnd = require('./routes/login')
let profileEnd = require('./routes/profileRoutes')
let recipesEnd = require('./routes/recipeRoutes')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cors());


app.use(function (req, res, next) {
	// do logging
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	next();
});
//include routes

app.use(loginEnd)
app.use(profileEnd)
app.use(recipesEnd)
const port = process.env.PORT || 5000
app.listen(port, '0.0.0.0', () => console.log(`Listening on port ${port}`));



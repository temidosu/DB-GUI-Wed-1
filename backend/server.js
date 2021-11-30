require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');
const routes = require('./routes');

// set up some configs for express.
const config = {
	name: 'sample-express-app',
	port: 8000,
	host: '0.0.0.0',
};


const app = express();

let users = require('./routes/users')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(cors());


const logger = log({ console: true, file: false, label: config.name });

app.use(users);


routes(app, logger);


const port = process.env.PORT || 5000;
app.listen(port, '0.0.0.0', () => console.log(`Listening on port ${port}`));
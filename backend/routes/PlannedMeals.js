app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());


app.get('/', (req, res) => {
	res.send('HELLO WORLD!');
});

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}..`));

//Connect to MySQL
var mysql = require('mysql');

//Connect to MySQL
var con = mysql.createConnection({
	host: "mysqldockerexample-mysql-1",
	port: "3306",
	user: "exampleuser",
	password: "password",
	database: "classicmodels"
});

//Open Connection
con.connect(function (err) {
	if (err) throw err;
});

// create router
var router = express.Router();

// middleware to use for all requests
router.use(function (req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// REGISTER  ROUTES
app.use('/plannedMeals', router);

//GET RECIPE BY NAME
router.get('/view/:mealDate', function (req, res) {
	con.query("SELECT * FROM plannedMeals WHERE mealDate = ?", req.param('mealDate'), function (err, result, fields) {
		if (err) throw err;
		res.end(JSON.stringify(result)); // Result in JSON format
	});
});
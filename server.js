var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({ extended: true }))

var port = 3000;        // set our port

// ROUTES FOR OUR API
// =============================================================================

var router = express.Router();           
var alive_router = express.Router();           

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

alive_router.get('/', function(req, res) {
    res.sendStatus(200);
});


router.post('/sms_receiver', function(req, res) {

    console.log(req.body)

});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);
app.use('/', alive_router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

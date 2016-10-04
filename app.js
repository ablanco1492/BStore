// Node Product list backend main entry point

const express     = require('express'),
      mongoose    = require('mongoose'),
      morgan 			= require('morgan'),
      bodyParser  = require('body-parser'),
      dbURI       = 'mongodb://localhost:27017/productApp',
      routes      = require('./app.api/routes/apiRoutes'),
      path        = require('path'),
      app         = express();

/**
 * Configure Express middleware
 */

// log info to the console
app.use(morgan('dev'));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/vendor/bootstrap/', express.static(__dirname + '/node_modules/bootstrap-sass/assets/javascripts/'));
app.use('/vendor/angular/', express.static(__dirname + '/node_modules/angular/'));
app.use('/vendor/angular-route/', express.static(__dirname + '/node_modules/angular-route/'));
app.use('/vendor/jquery/', express.static(__dirname + '/node_modules/jquery/dist/'));


// form body parsers
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// mount router module on /api route
app.use(routes);

/**
 * Handle DB connection
 */
mongoose.connect(dbURI);

//This callback will be triggered once the connection is successfully established to MongoDB
mongoose.connection.on('connected', function () {
  console.log('Mongoose is listening for connections at: ' + dbURI);
});

/**
 * Start node app to listen for requests
 */
app.listen(8080, function(err) {
	if(err) throw err;
	console.log('Server started on port: ' + 8080);
});

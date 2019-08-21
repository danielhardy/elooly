var express = require('express'),
    bodyParser = require('body-parser'),
    //mongoose = require('mongoose'),
    //flash = require('connect-flash'),
    //passport = require('passport'),
    morgan = require('morgan'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    path = require('path'),
    sassMiddleware = require('node-sass-middleware');

// Configure Passport;
//require('./config/passport')(passport);

// Config DB;
//var configDB = require('./config/database.js');
//mongoose.connect(configDB.url);

// Configure Express;
var app = express();

    // Configure Jade
    app.set('view engine', 'pug');
    app.set('views', __dirname + '/views');
    app.use(express.static('public'))

    // set up our express application
    app.use(morgan('dev')); // log every request to the console
    app.use(cookieParser()); // read cookies (needed for auth)
    app.use(bodyParser.json()); // get information from html forms
    app.use(bodyParser.urlencoded({ extended: true }));
    
    // setup a middleware for compiling SCSS;
    app.use(sassMiddleware({
        src: path.join(__dirname, 'src'),
        dest: path.join(__dirname, 'public'),
        debug: true,
        outputStyle: 'compress'
    }));

    // required for passport
    //app.use(session({ secret: 'FoSheezyWizzlePizzle' })); // session secret
   /* app.use(session({
    secret:'FoSheezyWizzlePizzle',
    maxAge: Date(Date.now() + 42300),
    store: new mongoStore(
        {mongooseConnection:mongoose.connection},
        function(err){
            console.log(err || 'connect-mongodb setup ok');
        })
    }));*/
    
    //app.use(passport.initialize());
    //app.use(passport.session()); // persistent login sessions
    //app.use(flash()); // use connect-flash for flash messages stored in session


// Product name;
app.locals.productName = "Elooly";
app.locals.domain = "elooly.com"

//If we are in dev environment let's set different vars;
if(process.env.C9_HOSTNAME){
    app.locals.domain = process.env.C9_HOSTNAME;
}

// send errors to page if any.
/*app.use(function(req, res, next){
    res.locals.success_messages = req.flash('success_messages');
    res.locals.error_messages = req.flash('error_messages');
    next();
});

// if there is a user send it to template;
app.use(function(req, res, next){
  if(req.user){
    res.locals.user = req.user
  }
  next();
});


// Route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();

  req.flash("error_messages", "You must be logged in to view that content.");
	res.redirect('/login');
}
*/

// Index routes;
app.get('/', function(req, res) {
    //Print all routes;
    var routes = app._router.stack;
    res.render('index');
});

app.get('/allRoutes', function(req, res) {
    //Print all routes;
    var routes = app._router.stack;
    res.render('allRoutes',{ routes: routes, title:"All Routes" } );
});

// User routes;
//require('./routes/users.js')(app, passport, isLoggedIn);

/*
 * Set PORT and IP;
 */
var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000;
var host = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || 'localhost';

//Get the server listening;
app.listen(port, host, function(){
    console.log("Express server started at"+host+":"+port);
});
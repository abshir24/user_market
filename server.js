// require express and path
var express = require("express");
var path = require("path");
var session = require("express-session")
var bodyParser = require("body-parser");
// create the express app
var app = express();
// require bodyParser since we need to handle post data for adding a user
app.use(session({secret: 'codingdojorocks', resave: true, saveUninitialized: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static(path.join(__dirname, '/client/dist')));
// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');
// store the function in a variable
require('./server/config/routes.js')(app);
// tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
})
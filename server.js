// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var Article = require('./models/Article.js');
//var request = require('request');

mongoose.Promise = Promise;

var PORT = process.env.PORT || 3000;

var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static("public"));

//var routes = require("./app/config/routes.js");
//app.use("/", routes);
//mongoose.connect("mongodb://heroku_gnzk5747:4d2121nhgnfbdl1pfirsdepk9n@ds125262.mlab.com:25262/heroku_gnzk5747");
mongoose.connect('mongodb://localhost/article');
var db = mongoose.connection;

// db.on("error", function(error) {
//   console.log("Mongoose Error: ", error);
// });
//
// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// });

app.listen(PORT, function() {
  console.log("App running on PORT " + PORT);
});

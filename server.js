// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();
var PORT = process.env.PORT || 3000;

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static("public"));

// database configuration with mongoose
//--------------------------------------
var databaseUri = "mongod://localhost/nytreact";
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect(databaseUri);
}

// initialize connection to mongoose database
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function() {
  console.log('Mongoose connection successful.');
});

io.on('connection', function(socket) {
  console.log("The user is connected.");
  socket.on('This article is added.', function(data) {
    io.emit('This article is added.');
  });
});

// importing the use of routes and controllers
var Article = require('./models/Article.js');
var router = require("./app/config/routes")(router);

// app.use(bodyParser.text());
// app.use(bodyParser.json({type:"application/vnd.api+json"}));

app.use('/', router);
app.listen(PORT, function() {
  console.log("App running on PORT " + PORT);
});

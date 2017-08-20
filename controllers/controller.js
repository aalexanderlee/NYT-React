var express = require('express');
var router = express.Router();
var Article = require('../models/Article.js');

// landing index page get route
router.get('/', function(req, res) {
  res.render('index');
});

// get route for the saved articles page
// this will grab the saved contents from mongo db
router.get('/api/saved', function(req, res) {
  Article.find({}).exec(function(err, doc) {
    if(err) {
      console.log(err);
    } else {
      res.json(doc);
    }
  });
});

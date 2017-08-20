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

// post route that will create new entries from saved mongo db content
router.post('/api/saved', function(req, res) {
  // create new entry using Article model
  var newArticle = new Article(req.body);
  // save these entries to mongo db
  newArticle.save(function(err, doc) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(doc);
    }
  });
});

router.delete('/api/saved/:id', function(req, res) {
  console.log(req.params.id);
  Article.findByIdAndRemove(req.params.id, function(err, todo) {
    if(err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(todo);
    }
  });
});

router.get("*", function(req, res) {
  res.redirect("/");
});

module.exports = router;

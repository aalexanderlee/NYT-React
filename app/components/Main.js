var axios = require("axios");
var React = require("react");
var router = require("react-router-dom");
var Link = router.link;
var Route = router.Route;

var Form = require("./children/Form");
var Results = require("./children/Results");
var Saved = require("./children/Saved");

var helpers = require("./utils/helpers.js");

var Main = React.createClass({
  // initialize parent states for children
  getInitialState: function() {
    return {
      title: "",
      startYear: "",
      endYear: "".
      results: [],
      savedArticles: []
    };
  },

  // takes criteria that can be searched from queries in helpers
  searchTerm: function(title, startYear, endYear) {
    this.setState({
      title: title,
      startYear: startYear,
      endYear: endYear
    });
  },

  // save articles
  saveArticle: function(title, date, url) {
    helpers.postArticle(title, date, url);
    this.getArticle();
  },

  // delete articles
  deleteArticle: function(article) {
    axios.delete('/api/saved/' + article._id).then(function(response) {
      this.setState({
        savedArticles: response.data
      });
      return response;
    }.bind(this));

    this.getArticle();
  },


  }
})

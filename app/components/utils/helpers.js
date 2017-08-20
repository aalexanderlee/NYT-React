// require the axios package for query call
var axios = require('axios');

var helpers = {
  runQuery: function(title, beginYear, endYear) {
    console.log(title + beginYear + endYear);
    // apiKey with query URL for searching
    var apiKey = "6c20f8917d9c430480edd0748c722e25";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" +
                  title + "&begin_date=" + beginYear + "0101" + "&end_date=" + endYear + "1231";

    return axios.get(queryURL).then(function(response){
      var newResults = [];
      var fullResults = response.data.response.docs;
      var count = 0;

      if (fullResults[0]) {
        for (var i = 0; i < fullResults.length; i++) {

          if(count>4) {
            return newResults;
          }
          if(fullResults[count].headline.main && fullResults[count].pub_date && fullResults[count].web_url) {
            newResults.push(fullResults[count]);
            count++;
          }

        }
        return newResults;
      } else {
        return("");
      }
    })
  },

  postArticle: function(title, date, url) {
    axios.post('/api/saved', {title: title, date: date, url: url})
    .then(function(result) {
      return(result);
    })
  }
}

module.exports = helpers;

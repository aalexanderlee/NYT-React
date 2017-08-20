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

      
    })

  }
}

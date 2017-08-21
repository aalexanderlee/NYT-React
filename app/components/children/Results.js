var React = require('react');
var Results = React.createClass({

    getInitialState: function() {
      return {
        title: "",
        date: "",
        url: "",
        results: []
      }
    },

    // when clicked, save these result elements
    clickToSave: function(result) {
      		this.props.saveArticle(result.headline.main, result.pub_date, result.web_url);
    },

    componentWillReceiveProps: function(nextProps) {
        var that = this;
        var myResults = nextProps.results.map(function(search, i) {
              var boundClick = that.clickToSave.bind(that, search);
        			return <div className="list-group-item" key={i}><a href={search.web_url} target="_blank">{search.headline.main}</a>
        			<br />{search.pub_date}<br /><button id="clickButton" type="button" className="btn btn-success"
        			style={{'float': 'right', 'marginTop': '-39px'}} onClick={boundClick}>Save</button></div>
        });
        this.setState({results: myResults});
    },

    notifyMe: function() {
      var notification = new Notification("Saving article was a successful process.")
    },

    render: function() {
      return(
    			<div className="panel panel-success">
    				<div className="panel-heading">
    					<h3 className="panel-title text-center"><strong>Results</strong></h3>
    				</div>
    				<div className="panel-body">
    					{this.state.results}
    				</div>
    			</div>
    	);
    }
});

module.exports = Results;

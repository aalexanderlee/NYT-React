// list dependencies
var React = require('react');
var Results = require('./Results');

var Form = React.createClass({
  // create states for Form child
  getInitialState: function() {
    return {
      title:"",
      startYear: "",
      endYear: "",
      displayResults: false
    };
  },

  handleChange: function(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  handleClick: function(event) {
    event.preventDefault();
    this.props.searchTerm(this.state.title, this.state.startYear, this.state.endYear);
    this.setState({title:"", startYear: "", endYear: ""});
    this.setState({displayResults: true});
  },

  // initialize JSX for the page generated for Form
  render: function() {
    return(
      <div>
				<div className="col-md-12">
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h2 className="panel-title text-center"><strong>Search</strong></h2>
						</div>
						<div className="panel-body text-center">
							<form>
								<div className="form-group">
									<h4 className=""><strong>Search Term</strong></h4>
									<input type="text" className="form-control text-center" id="title" placeholder="Enter A Topic" onChange= {this.handleChange} required/>
									<br />

									<h4 className=""><strong>Start Year</strong></h4>
									<input type="text" className="form-control text-center" id="startYear" placeholder="2000" onChange= {this.handleChange} required/>
									<br />

									<h4 className=""><strong>End Year</strong></h4>
									<input type="text" className="form-control text-center" id="endYear" placeholder="2017"onChange= {this.handleChange} required/>
									<br />

									<button type="button" className="btn btn-primary" onClick={this.handleClick}>Search</button>
								</div>
							</form>
						</div>
					</div>
					{this.state.displayResults ? <Results results={this.props.results} saveArticle={this.props.saveArticle} /> : null }
				</div>
			</div>
		)
	}
});

// Export the component back for use in other files
module.exports = Form;

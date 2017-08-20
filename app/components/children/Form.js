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

    )
  }

})

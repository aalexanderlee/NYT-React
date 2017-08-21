// list dependencies
var React = require("react");
var router = require("react-router-dom");

// individual routes componenent included
var Route = router.Route;
// pass in configurations as props
var BrowserRouter = router.BrowserRouter;

var Main = require("../components/Main");

// allows you to abstract routing
// client and server will operate with similar router
// when the server has not been built
module.exports = (
  <BrowserRouter>
    <Route component = {Main} />
  </BrowserRouter>
);

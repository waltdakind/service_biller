var React = require('react');

var Router = require('react-router');
var Route = Router.Route;

var IndexRoute = Router.IndexRoute;

var EmployeeDashboard = require('../components/EmployeeDashboard');

module.exports = (

	<Route path="/" component={EmployeeDashboard}>
		<IndexRoute component={EmployeeDashboard} />
	</Route>

);
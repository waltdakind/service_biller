var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');

class EmployeeDashboard extends React.Component {
	render() {
		return <h2>Employee Dashboard</h2>;
	}
}

React.render(<EmployeeDashboard />, document.getElementById('app'));

module.exports = EmployeeDashboard;
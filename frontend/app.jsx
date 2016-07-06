var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var HashHistory = require('react-router').hashHistory;

var Main = require('./components/main.jsx').Main;
var Home = require('./components/static/home.jsx').Home;
var About = require('./components/static/about.jsx').About;
var Team = require('./components/static/team.jsx').Team;

var routes = (
    <Route path="/" component={Main}>
  
        <IndexRoute component={Home}/>
        
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
  
    </Route>
  
  
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router history={HashHistory}>{routes}</Router>,
    document.getElementById('reactApp')
  );
});
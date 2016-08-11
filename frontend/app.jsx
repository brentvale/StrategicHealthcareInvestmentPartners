var React = require('react');
var ReactDOM = require('react-dom');

var Main = require('./components/main.jsx').Main;
var Home = require('./components/static/home.jsx').Home;

var Main = React.createClass({
  render: function(){
    return(
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
       
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" aria-expanded="false" data-target="#navigationMenuDropdown">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a id="navLogo" className="navbar-brand navbar-logo" href="#">SHIP</a>
            </div>

            <div className="collapse navbar-collapse" id="navigationMenuDropdown">
              <ul className="nav navbar-nav">
                <li><a className="sliding-u-l-r" href="#/about">About</a></li>
                <li><a className="sliding-u-l-r" href="#/team">Team</a></li>
                <LoginButton />
              </ul>
            </div>
      
        </nav>
        {this.props.children}
        
        <Footer />
      </div>
    )
  }
});
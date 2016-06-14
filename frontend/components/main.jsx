var React = require('react');
var IndexLink = require('react-router').IndexLink;
var NavLink = require('./links/nav_link.jsx').NavLink;

var Main = React.createClass({
  render: function(){
    return(
      <div>
      <nav className="navbar navbar-default">
       
      
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" aria-expanded="false" data-target="#navigationMenuDropdown">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">SHIP</a>
          </div>

    
          <div className="collapse navbar-collapse" id="navigationMenuDropdown">
            <ul className="nav navbar-nav">
              <li><NavLink className="sliding-u-l-r sliding-u-l-r-80" to="/our-story">Our Story</NavLink></li>
              <li><NavLink className="sliding-u-l-r sliding-u-l-r-50" to="/team">Team</NavLink></li>
            </ul>
          </div>
      
        
      </nav>
      {this.props.children}
      </div>
    )
  }
});

module.exports = {
  Main: Main
}
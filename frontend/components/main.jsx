var React = require('react');
var IndexLink = require('react-router').IndexLink;
var NavLink = require('./links/nav_link.jsx').NavLink;
var Footer = require('./static/footer.jsx').Footer;
var LoginButton = require('./static/login_button.jsx').LoginButton;

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
                <li><a className="sliding-u-l-r" href="#/our-story">Our Story</a></li>
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

module.exports = {
  Main: Main
}
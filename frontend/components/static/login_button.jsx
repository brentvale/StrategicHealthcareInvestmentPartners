var React = require('react');
var UserStore = require('../../stores/user.js');
var ClientActions = require('../../actions/clientActions.js')

var LoginButton = React.createClass({
  getInitialState: function(){
    return {currentUser: UserStore.currentUser()};
  },
  _onChange: function(){
    this.setState({currentUser: UserStore.currentUser()});
  },
  componentDidMount: function(){
    this.userListener = UserStore.addListener(this._onChange);
    ClientActions.fetchCurrentUser();
  },
  componentWillUnmount: function () {
    this.userListener.remove();
  },
  handleSignOut: function(){
    var that = this;
    ClientActions.signOutCurrentUser(function(){
      that.setState({currentUser: false});
    });
    //once signed out, update current user to false
  },
  render: function(){
    var signInOutButton;
    
    if(this.state.currentUser){
      signInOutButton = <a className="sliding-u-l-r" onClick={this.handleSignOut}>Sign Out</a>;
    } else {
      signInOutButton = <a className="sliding-u-l-r" href="/users/sign_in">Sign In</a>;
    }
    return (
      <li>
        {signInOutButton}
      </li>
    )
  }
});

module.exports = {
  LoginButton: LoginButton
}
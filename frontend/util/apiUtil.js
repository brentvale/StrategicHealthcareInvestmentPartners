var ServerActions = require('../actions/serverActions.js');

module.exports = {
  
  fetchCurrentUser: function(){
    $.ajax({
      url: "api/users/fetch_current_user",
      method: "GET",
      success: function(userObj){
        //return message if no current user
        if(userObj.message){
          console.log(userObj.message);
          ServerActions.receiveCurrentUser({currentUser: false});
        } else {
          ServerActions.receiveCurrentUser({currentUser: userObj.current_user});
        }
      },
      error: function(){
        console.log("errored out in fetchCurrentUser")
      }
    })
  },
  
  signOutCurrentUser: function(callback){
    $.ajax({
      url: "api/users/sign_out",
      method: "GET",
      success: function(message){
        ServerActions.signOutSuccess({message: message});
      },
      error: function(resp){
        console.log("errored out in signOutCurrentUser");
      }
    })
  },
  
}

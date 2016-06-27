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
  
  fetchPages: function(){
    $.ajax({
      url: "api/pages",
      method: "GET",
      success: function(obj){
        ServerActions.pageContentReceived(obj);
      },
      error: function(resp){
        console.log("errored out in fetchPages");
      }
    })
  },
  updateParagraph: function(paragraphId, paragraphValue){
    $.ajax({
      url: "api/paragraphs/" + paragraphId,
      method: "PATCH",
      data: {
        paragraph: {
          body: paragraphValue
        }
      },
      success: function(obj){
        console.log("need to handle success in updateParagraph");
      },
      error: function(resp){
        console.log("errored out in updateParagraph");
      }
    })
  },
  updateHeading: function(headingId, headingValue){
    $.ajax({
      url: "api/sections/" + headingId,
      method: "PATCH",
      data: {
        section: {
          heading: headingValue
        }
      },
      success: function(obj){
        console.log("need to handle success in updateHeading");
      },
      error: function(resp){
        console.log("errored out in updateHeading");
      }
    })
  }
  
}

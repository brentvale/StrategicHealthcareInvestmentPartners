var Dispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');
var ContentConstants = require('../constants/contentConstants.js');

module.exports = {
  receiveCurrentUser: function (options){
    Dispatcher.dispatch({
      actionType: UserConstants.CURRENT_USER_RECEIVED,
      currentUser: options.currentUser
    });
  },
  signOutSuccess: function(message){
    Dispatcher.dispatch({
      actionType: UserConstants.SIGN_OUT_SUCCESSFUL,
      message: message
    })
  },
  pageContentReceived: function(pages){
    Dispatcher.dispatch({
      actionType: ContentConstants.PAGE_CONTENT_RECEIVED,
      pages: pages
    })
  }
}

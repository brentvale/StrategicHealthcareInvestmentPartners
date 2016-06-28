var ApiUtil = require('../util/apiUtil.js');

module.exports = {
  fetchCurrentUser: function() {
    ApiUtil.fetchCurrentUser();
  },
  signOutCurrentUser: function(callback) {
    ApiUtil.signOutCurrentUser(callback);
  },
  fetchPages: function(){
    ApiUtil.fetchPages();
  },
  updateHeading: function(headingId, headingValue){
    ApiUtil.updateHeading(headingId, headingValue);
  },
  updateParagraph: function(paragraphId, paragraphValue){
    ApiUtil.updateParagraph(paragraphId, paragraphValue);
  }

}

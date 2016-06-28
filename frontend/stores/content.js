var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var ContentConstants = require('../constants/contentConstants.js');
//
var ContentStore = new Store(AppDispatcher);

//{"home": {}, "about":{}, "team":{}}
var _pages = {"home": {}, "about":{}, "team":{}}

var addPages = function(pages){
  return _pages = pages;
};

ContentStore.pageContent = function(page){
  return _pages[page];
};

ContentStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ContentConstants.PAGE_CONTENT_RECEIVED:
      addPages(payload.pages);
      ContentStore.__emitChange();
      break;
  }
}

module.exports = ContentStore;
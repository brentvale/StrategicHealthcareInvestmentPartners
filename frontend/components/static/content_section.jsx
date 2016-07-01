var React = require('react');
var UserStore = require('../../stores/user.js');
var ParagraphForm = require('../paragraph/form.jsx').ParagraphForm;
var ClientActions = require('../../actions/clientActions.js');

var ContentSection = React.createClass({
  getInitialState: function(){
    return {editing: true, currentUser: UserStore.currentUser()}
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
  render: function(){                     
    if(this.state.currentUser){
      return(
        <ParagraphForm  handleEditText={this.props.handleEditText} 
                        sectionId={this.props.sectionId} 
                        heading={this.props.heading} 
                        paragraph={this.props.paragraph}/>
      )
    } else {
      return(
        <div className="center-block block-80">
          <h2>{this.props.heading}</h2>
          <p data-id={this.props.paragraph.id} className="block-text">{this.props.paragraph.body}</p>
        </div>
      )
    }
  }
});

module.exports = {
  ContentSection: ContentSection
};

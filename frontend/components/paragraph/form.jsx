var React = require('react');
var ClientActions = require('../../actions/clientActions.js');
var ContentStore = require('../../stores/content.js');

var ParagraphForm = React.createClass({
  getInitialState: function(){
    return {editing: false}
  },
  componentDidMount: function(){
    this.paragraphListener = ContentStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.paragraphListener.remove();
  },
  handleSave: function(event){
    event.preventDefault();
    this.toggleEdit();

    var headingValue = $(event.currentTarget).find("h3 input").val();
    var headingId = parseInt($(event.currentTarget).attr("data-section-id"));
    
    var paragraphValue = $(event.currentTarget).find("p textarea").val();
    var paragraphId = parseInt($(event.currentTarget).attr("data-paragraph-id"));
    
    ClientActions.updateHeading(headingId, headingValue);
    ClientActions.updateParagraph(paragraphId, paragraphValue);
    
    this.props.handleEditText();
  },
  toggleEdit: function(){
    this.setState({editing: !this.state.editing});
  },
  render: function(){
    if(this.state.editing){
      return(
        <div>
          <form data-section-id={this.props.sectionId} data-paragraph-id={this.props.paragraph.id} onSubmit={this.handleSave}>
            <h3><input defaultValue={this.props.heading} /></h3>
            <p data-id={this.props.paragraph.id} className="block-text">
              <textarea defaultValue={this.props.paragraph.body}>
              </textarea>
            </p>
            <input type="submit" id="saveParagraph" value="Save" />
          </form>
          
        </div>
      )
    } else {
      return(
        <div>
          <button id="editParagraph" onClick={this.toggleEdit}>Edit Section</button>
          <h3>{this.props.heading}</h3>
          <p data-id={this.props.paragraph.id} className="block-text">{this.props.paragraph.body}</p>
        </div>
      )
    }
  }
});
       
module.exports = {
  ParagraphForm: ParagraphForm
};
var React = require('react');
var UserStore = require('../../stores/user.js');
var ParagraphForm = require('../paragraph/form.jsx').ParagraphForm;

var ContentSection = React.createClass({
  getInitialState: function(){
    return {editing: true}
  },
  render: function(){   
    //RETURNS                   
    if(UserStore.currentUser()){
      return(
        <ParagraphForm sectionId={this.props.sectionId} heading={this.props.heading} paragraph={this.props.paragraph}/>
      )
    } else {
      return(
        <div>
          <h3>{this.props.heading}</h3>
          <p data-id={this.props.paragraph.id} className="block-text">{this.props.paragraph.body}</p>
        </div>
      )
    }
  }
});

module.exports = {
  ContentSection: ContentSection
};

              // <h3>Unique Approach</h3>
       //        <p className="block-text">We are assembling a pool of investors that includes corporations, foundations, medical centers, and family offices that have recognized the role of equity investing in innovation to deliver both financial returns and innovative products to improve outcomes for patients. We will also work closely with selected regional sources of innovation and development organizations focused in those areas.</p>
       //
       //        <h3>Healthcare Innovation and <br/>Investment Opportunities</h3>
       //        <p className="block-text">The opportunity for innovation in healthcare is large both for developing new technologies for existing markets and for the creation of new markets and business models with new technology. Many opportunities are international in scope and some are likely to disrupt current approaches to diagnosis and therapy, increase the role of the consumer, and depend on collaboration among health care providers throughout the episode of care.</p>

var React = require('react');
var Parallax = require('react-parallax').Parallax;
var ContentStore = require('../../stores/content.js');
var ClientActions = require("../../actions/clientActions.js");
var ContentSection = require("./content_section.jsx").ContentSection;
var CanvasNeurons = require("./canvas_neurons.jsx").CanvasNeurons;

var Home = React.createClass({
  getInitialState: function(){
    return {pageContent: ContentStore.pageContent("home")}
  },
  componentDidMount: function(){
    this.contentListener = ContentStore.addListener(this._onChange);
    ClientActions.fetchPages();
  },
  handleEditText: function(){
    ClientActions.fetchPages();
  },
  componentWillUnmount: function(){
    this.contentListener.remove();
  },
  _onChange: function(){
    this.setState({pageContent: ContentStore.pageContent("home")});
  },
  render: function(){
    var stateLength = Object.keys(this.state.pageContent).length;
    
    if(stateLength == 0){
      return <div></div>;
    } else {
      var contentArray = [];
      
      //only going to stateLength, should go to stateLength + 1 when text added for <ul> section
      for(var i = 1; i < stateLength; i++){
        contentArray.push(this.state.pageContent[i]);
      }
    }
    
    var that = this;
    
    return(
      
        
    <div id="home">
      <div className="parallax">
        <div id="group1" className="parallax__group">
          
          <div className="parallax__layer parallax__layer--base heading-content">
            <h1>S<span>TRATEGIC </span>H<span>EALTHCARE<br /></span>I<span>NVESTMENT </span>P<span>ARTNERS</span></h1>
          </div>
          <div className="parallax__layer parallax__layer--back heading-background">
          </div>
        </div>
      
        <div id="group2" className="parallax__group">
          
          <div className="parallax__layer parallax__layer--base section-one-background" >
            {contentArray.map(function(sectionObj, idx){
              return <ContentSection key={idx} 
                                     propId={idx}
                                     sectionId={sectionObj.id}
                                     heading={sectionObj.heading}
                                     paragraph={sectionObj.paragraphs[0]} 
                                     handleEditText={that.handleEditText}/>
            })}
          </div>
          
        </div>
            
        <div id="group3" className="parallax__group">
          
          <div className="parallax__layer parallax__layer--base">
            <h2>How We Innovate</h2>
            <ul id="keyDifferentiators">
              <li><div><span>&nbsp;We work with partners that have strategic objectives that can be pursued with equity investing and we’ll work with them to refine focus areas for the fund.</span></div></li>
              <li><div><span>&nbsp;We engage medtech, biotech, diagnostic, and digital health industry luminaries from our network as venture partners, entrepreneurs-in-residence, and in executive chairman roles.</span></div></li>
              <li><div><span>&nbsp;We’ll balance new technology investments for existing markets with investments that combine new market, new business model, and new technology elements.</span></div></li>
              <li><div><span>&nbsp;We’ll use our unique accelerator approach in selected regions and focus areas to source, seed-fund, develop, and Series A-fund deals.</span></div></li>
            </ul>
          </div>
          <div className="parallax__layer parallax__layer--back section-two-background">
          </div>
        </div>
            
        <div id="group4" className="parallax__group">
          <div className="parallax__layer parallax__layer--base">
          </div>
        </div>
            
      </div>
    </div>
      
        
        
    )
  }
});

module.exports = {
  Home: Home
};
var React = require('react');
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
    
    return(
      <div>
        <CanvasNeurons />
        <div className="landing-container">
        
          <div className="landing-background heading-background">
              <h2>S<span>TRATEGIC</span><br/>H<span>EALTHCARE</span><br/>I<span>NVESTMENT</span><br/>P<span>ARTNERS</span></h2>
          </div>
        
          <div className="landing-background-container">
            <div className="landing-background">
              
              {contentArray.map(function(sectionObj, idx){
                return <ContentSection key={idx} 
                                       sectionId={sectionObj.id}
                                       heading={sectionObj.heading}
                                       paragraph={sectionObj.paragraphs[0]} />
              })}
              <h3>What’s Different About Us?</h3>
              <ul id="keyDifferentiators">
                <li>&nbsp;We work with partners that have strategic objectives that can be pursued with equity investing and we’ll work with them to refine focus areas for the fund.</li>
                <li>&nbsp;We engage medtech, biotech, diagnostic, and digital health industry luminaries from our network as venture partners, entrepreneurs-in- residence, and in executive chairman roles.</li>
                <li>&nbsp;We’ll balance new technology investments for existing markets with investments that combine new market, new business model, and new technology elements.</li>
                <li>&nbsp;We’ll use our unique accelerator approach in selected regions and focus areas to source, seed-fund, develop, and Series A-fund deals.</li>
              </ul>
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
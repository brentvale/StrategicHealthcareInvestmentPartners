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
        <Parallax className="heading-bg background-bg" bgImage="assets/dna_helix_silver_high_res.jpg" strength={400}>
          <h1>S<span>TRATEGIC </span>H<span>EALTHCARE<br /></span>I<span>NVESTMENT </span>P<span>ARTNERS</span></h1>
        </Parallax>
        {contentArray.map(function(sectionObj, idx){
          return <ContentSection key={idx} 
                                 sectionId={sectionObj.id}
                                 heading={sectionObj.heading}
                                 paragraph={sectionObj.paragraphs[0]} 
                                 handleEditText={that.handleEditText}/>
        })}
        <Parallax className="section-bg" bgImage="assets/blue_molecules_high_res.jpg" strength={400}>
          <h2>How We Innovate</h2>
          <ul id="keyDifferentiators">
            <li className=""><div className="center-block"><span className="list-item">&nbsp;We work with partners that have strategic objectives that can be pursued with equity investing and we’ll work with them to refine focus areas for the fund.</span></div></li>
            <li className=""><div className="center-block"><span className="list-item">&nbsp;We engage medtech, biotech, diagnostic, and digital health industry luminaries from our network as venture partners, entrepreneurs-in- residence, and in executive chairman roles.</span></div></li>
            <li className=""><div className="center-block"><span className="list-item">&nbsp;We’ll balance new technology investments for existing markets with investments that combine new market, new business model, and new technology elements.</span></div></li>
            <li className=""><div className="center-block"><span className="list-item">&nbsp;We’ll use our unique accelerator approach in selected regions and focus areas to source, seed-fund, develop, and Series A-fund deals.</span></div></li>
          </ul>
        </Parallax>
        
        
      </div>
    )
  }
});

module.exports = {
  Home: Home
};
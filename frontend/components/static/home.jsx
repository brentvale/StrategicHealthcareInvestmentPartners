var React = require('react');

var Home = React.createClass({
  render: function(){
    return(
      <div className="landing-container">
        <div className="landing-background">
          <h2 id="landingHeading">Strategic&nbsp;Healthcare<br/>Investment&nbsp;Partners</h2>

          <h3>Unique Approach</h3>
          <p className="block-text">We are assembling a pool of investors that includes corporations, foundations, medical centers, and family offices that have recognized the role of equity investing in innovation to deliver both financial returns and innovative products to improve outcomes for patients. We will also work closely with selected regional sources of innovation and development organizations focused in those areas.</p>
        
          <h3>Healthcare Innovation and <br/>Investment Opportunities</h3>
          <p className="block-text">The opportunity for innovation in healthcare is large both for developing new technologies for existing markets and for the creation of new markets and business models with new technology. Many opportunities are international in scope and some are likely to disrupt current approaches to diagnosis and therapy, increase the role of the consumer, and depend on collaboration among health care providers throughout the episode of care.</p>

          <h3>What’s Different About Us?</h3>
          <ul id="keyDifferentiators">
            <li>&nbsp;We work with partners that have strategic objectives that can be pursued with equity investing and we’ll work with them to refine focus areas for the fund.</li>
            <li>&nbsp;We engage medtech, biotech, diagnostic, and digital health industry luminaries from our network as venture partners, entrepreneurs-in- residence, and in executive chairman roles.</li>
            <li>&nbsp;We’ll balance new technology investments for existing markets with investments that combine new market, new business model, and new technology elements.</li>
            <li>&nbsp;We’ll use our unique accelerator approach in selected regions and focus areas to source, seed-fund, develop, and Series A-fund deals.</li>
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = {
  Home: Home
};
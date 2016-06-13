var React = require('react');

var Home = React.createClass({
  render: function(){
    return(
      <div>
        <h2 id="landingHeading">Strategic&nbsp;Healthcare<br/>Investment&nbsp;Partners</h2>

        <p id="landingText" className="block-text">In light of global demographic trends, we  believe that the opportunity for innovation in healthcare is currently large both for bringing new technologies to existing markets and for the development of new markets and business models with new technology.  Many opportunities are international in scope and some are likely to disrupt current approaches to diagnosis and therapy, increase the role of the consumer, and depend on collaboration among health care providers throughout the episode of care, and in some cases, all of this will begin with tools to facilitate disease prevention.</p>
        <h3>Approach</h3>

        <p className="block-text">We believe that collaboration with limited partners seeking both a strategic and financial result can improve the success of venture-backed companies. Strategic players can provide critical insights on preclinical models, clinical trial design and execution, regulatory issues, reimbursement strategies, manufacturing, and international distribution, sales, and marketing.  We are assembling  a limited partner pool of strategic investors that includes corporation, foundations, medical centers, and family offices.   We will work closely with selected regional sources of innovation.</p>

        <h3>Key Differentiators</h3>
        <ul id="keyDifferentiators">
          <li>&nbsp;Our limited partners have strategic objectives that can be pursued with equity investing as a complement to their other business development strategies.</li>
          <li>&nbsp;We will leverage our deep relationships in industry to engage medtech, biotech, diagnostic, and digital health industry luminaries known to us as venture partners, entrepreneurs-in-residence, and executive chairman roles.</li>
          <li>&nbsp;We will balance new technology (Box 3) investments with new market, new business model, new technology (Box 4) investments.</li>
          <li>&nbsp;We will use our novel accelerator approach in selected regions and focus areas to source, seed-fund, develop, and Series A-fund deals.</li>
        </ul>
      </div>
    )
  }
});

module.exports = {
  Home: Home
};
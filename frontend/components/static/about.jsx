var React = require('react');

var About = React.createClass({
  render: function(){
    return(
      <div>
        <h2 id="ourStoryHeading">Our Story</h2>
 
        <h3>Balanced Deal Selection</h3>
        <p className="block-text">Strategic Healthcare Investment Partners will balance deal stage to be approximately 50% early stage with our unique accelerator model and approximately 50% later stage where we will invest with conventional venture funds.  We will focus on medical devices, diagnostics, and digital health opportunities that facilitate the success of our medical device investments in an accountable care model.</p>

        <h3>Early Stage Deal Ecosystem</h3>
        <p className="block-text">We believe that collaboration among strategic players, development organizations, sources of innovation, and a focused accelerator organization can improve the sourcing, seed-funding, development, and Series A-funding of deals with a higher success rate of getting to Series B funding.  Approximately half of our focus will be on these earlier stage deals and the rest on later deals and unique opportunities that we find.</p>

        <h3>Focus Areas</h3>
        <p className="block-text">We will support investment in new technologies that advance our individual strategic partner immediate interests (Box 3).  We will also invest in new markets, technologies, and business models that are likely to be of interest to all of our limited partners in the 3 to 5 year time frame (Box 4).</p>
      </div>
    )
  }
});

module.exports = {
  About: About
};
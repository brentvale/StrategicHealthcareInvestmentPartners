var React = require('react');

var About = React.createClass({
  
  render: function(){
    return(
      <section id="ourStory" className="landing-background-container">
        <div className="parallax">
          <div id="aboutGroup1" className="parallax__group">
  
            <div className="parallax__layer parallax__layer--base heading-content">
              <h1>A<span>BOUT</span></h1>
            </div>
            <div className="parallax__layer parallax__layer--back heading-background">
            </div>
          </div>


          <div id="aboutGroup2" className="parallax__group">

            <div className="parallax__layer parallax__layer--base section-one-background" >
              <h3 className="first-section-heading">Balanced Deal Selection</h3>
              <p className="block-text">Strategic Healthcare Investment Partners will balance deal stage to be approximately 50% early stage with our unique accelerator models and approximately 50% later stage where we will invest with conventional venture funds. We will focus on medical devices, diagnostics, and digital health opportunities that facilitate the success of our medical device investments in an accountable care world.</p>
                
              <h3>Early Stage Methods</h3>
              <p className="block-text">We believe that collaboration among strategic players, development organizations, sources of innovation, and a focused accelerator organization can improve the path from sourcing, seed-funding, development, through the Series A-funding of deals with a higher success rate of getting to Series B funding.</p>

              <h3>Focus Areas</h3>
              <p className="block-text">We will support investment in new technologies that advance our individual strategic partner immediate interests in their existing markets with their current customers. We will also invest in new markets, technologies, and business models that are likely to be of future interest to all of our limited partners in the 3 to 5 year time frame. We will leverage our specific experiences and relationships in neuromodulation, next generation robotics, digital health, sensors and smart devices, active-implantables, and less invasive alternatives to today’s surgical devices.</p>
    
              <h3>The Fund</h3>
              <p className="block-text">Strategic Healthcare Investment Partners will raise $150 to 200MM with two founding general partners (Brad and Mudit) and one Founding Venture Partner (Ed). We are seeking a first close in Q3 2016.</p>
            </div>

          </div>
      
        </div>
        
        
      </section>
    )
  }
});

module.exports = {
  About: About
};
var React = require('react');

var Team = React.createClass({
  loadHighRes: function(e){
    if(e.target.src.slice(-11) == "low_res.jpg"){
      const newSrc = e.target.src.slice(0, -11) + "high_res.jpg";
      e.target.src = newSrc;
    }
  },
  render: function(){
    return(
      <section id="team">
        <div className="row">
          <h2 id="teamHeading">Team</h2>
          <p className="block-text">The Strategic Health Care Partners team has known each other and worked together on multiple healthcare investments over the last 20 years.</p>

          <h4 id="collectiveExperienceTitle">Our Collective Experience Includes:</h4>
          <ul id="collectiveExperience">
            <li>&nbsp;Sourcing innovation</li>
            <li>&nbsp;Leading and mentoring early stage companies</li>
            <li>&nbsp;Taking companies public</li>
            <li>&nbsp;Product development in both small and multinational corporations.</li>
          </ul>
        </div>

        <div className="row">
          <div className="profile">
            <div className="profile-block col-xs-12 col-sm-5 col-md-4">

              <div className="image-container">
                <img onLoad={this.loadHighRes} id="bradValeProfileImage" className="pos-1" src="/images/brad_vale_profile_sprite_low_res.jpg" alt="Brad Vale Profile Image"></img>
              </div>

              <div className="title-container">
                <h3>Brad Vale<br/>PhD, DVM<br/><span>Managing Partner</span></h3>
                <div className="linked-in-logo-container">
                  <a href="https://www.linkedin.com/in/brad-vale-phd-dvm-0611181" alt="Brad Vale LinkedIn Profile" target="_blank">
                    <div className="linked-in-logo"></div>
                  </a>
                </div>
              </div>

            </div>
            <div className="profile-block-paragraph col-xs-12 col-sm-7 col-md-8">
                  <p>Dr. Brad Vale has over thirty years of leadership experience in healthcare at Johnson &amp; Johnson. He spent 22 years in JJDC, the oldest and largest corporate healthcare investment fund with over $1B in investments under management. Brad started out at JNJ at Ethicon, the leading company in wound closure, where he worked on surgical product development. He ran JJDC for the last 5 years and established JJDC offices globally, including Shanghai, London, Tel Aviv, Boston and Si-Valley. Brad completed a PhD in Biomedical Engineering at Iowa State University and his Doctor of Veterinary Medicine at Washington State University.</p>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="profile">
          
            <div className="profile-block col-xs-12 col-sm-5 col-md-4">
      
              <div className="image-container">
                <img onLoad={this.loadHighRes} id="muditJainProfileImage" className="pos-1" src="/images/mudit_jain_profile_sprite_low_res.jpg" alt="Mudit Jain Profile Image"></img>
              </div>
    
              <div className="title-container">
                <h3>Mudit Jain<br/>PhD<br/><span>Managing Partner</span></h3>
                <div className="linked-in-logo-container">
                  <a href="https://www.linkedin.com/in/mudit-jain-phd-242637" alt="Mudit Jain LinkedIn Profile" target="_blank">
                    <div className="linked-in-logo"></div>
                  </a>
                </div>
              </div>
    
            </div>
        
            <div className="profile-block-paragraph col-xs-12 col-sm-7 col-md-8">
                  <p>Dr. Mudit Jain has 18 years of operating, venture, and M&amp;A experience at Guidant, Johnson &amp; Johnson, and Synergy LifeScience Partners (A medical device and wearable medtech focused fund) . He has worked on projects in India, USA, and Ireland. Mudit has a PhD in Biomedical Engineering from Duke University, and a MBA in Healthcare from The Wharton School of Business.</p>
            </div>
        
          </div>
        </div>


        <div className="row">
          <div className="profile">
            <div className="profile-block col-xs-12 col-sm-5 col-md-4">
        
              <div className="image-container">
                <img onLoad={this.loadHighRes} id="edBrennanProfileImage" className="pos-1" src="/images/ed_brennan_profile_sprite_low_res.jpg" alt="Ed Brennan Profile Image"></img>
              </div>
        
              <div className="title-container">
                <h3>Ed Brennan<br/>PhD<br/><span>Founding Venture<br/>Partner</span></h3>
                <div className="linked-in-logo-container">
        
                </div>
              </div>  
    
            </div>
        
            <div className="profile-block-paragraph col-xs-12 col-sm-7 col-md-8">
                  <p>Dr. Ed Brennan is a serial medical device entrepreneur and investor. He has been the Co-Founder and CEO of multiple device and diagnostic companies, raising over $400MM for those companies. He led multiple IPOs and strategic exits on those companies. Ed completed his PhD in Microbiology at UC Santa Cruz.</p>
            </div>
        
          </div>
        </div>
      </section>
    )
  }
});

module.exports = {
  Team: Team
}
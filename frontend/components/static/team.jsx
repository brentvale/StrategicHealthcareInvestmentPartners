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
      
        <div className="parallax">
          <div id="teamGroup1" className="parallax__group">
          
            <div className="parallax__layer parallax__layer--base heading-content">
              <h1>G<span>LOBAL </span>P<span>RESENCE</span></h1>
            </div>
            <div className="parallax__layer parallax__layer--back heading-background">
            </div>
          </div>
      
      
          <div id="teamGroup2" className="parallax__group">
    
            <div className="parallax__layer parallax__layer--base section-one-background" >
              
                <h2 id="teamHeading">Team</h2>
                <p className="block-text">The Strategic Health Care Partners team has known each other and worked together on multiple healthcare investments over the last 20 years.</p>

                <h3>Our Collective Experience Includes:</h3>
                <ul id="collectiveExperience">
                  <li>&nbsp;Sourcing innovation</li>
                  <li>&nbsp;Leading and mentoring early stage companies</li>
                  <li>&nbsp;Taking companies public</li>
                  <li>&nbsp;Product development in both small and multinational corporations.</li>
                </ul>
        
            </div>
    
          </div>
      
          <div id="teamGroup3" className="parallax__group">
            <div className="parallax__layer parallax__layer--base">
              <div className="row">
      
                <div className="profile">
                  <div className="profile-block">

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
                  
                </div>
              </div>


              <div className="row">
                <div className="profile">
  
                  <div className="profile-block">

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

                  

                </div>
              </div>


              <div className="row">
                <div className="profile">
                  <div className="profile-block">

                    <div className="image-container">
                      <img onLoad={this.loadHighRes} id="edBrennanProfileImage" className="pos-1" src="/images/ed_brennan_profile_sprite_low_res.jpg" alt="Ed Brennan Profile Image"></img>
                    </div>

                    <div className="title-container">
                      <h3>Ed Brennan<br/>PhD<br/><span>Founding Venture<br/>Partner</span></h3>
                      <div className="linked-in-logo-container">
                        
                      </div>
                    </div>  

                  </div>

                  

                </div>
              </div>
            </div>
            <div className="parallax__layer parallax__layer--back ">
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
var React = require('react');

var Team = React.createClass({
  render: function(){
    return(
      <div>
        <h2 id="teamHeading">Team</h2>
        <p className="block-text">The Strategic Health Care Partners  team has known each other and worked together in Healthcare investments for over fifteen years. Brad has known Ed and Mudit and worked on deals with them for over 15 years.  The team has come together  to work on the Strategic Healthcare Investment Partners strategy and with candidate limited partners over the last few months to refine the story and is aiming for a first close in Q3 2016.</p>

        <div className="profile">
          <div>
            
            <div>
              <h3>Brad Vale<br/>PhD, DVM<br/><span>Managing Partner</span></h3>
              <a href="https://www.linkedin.com/in/brad-vale-phd-dvm-0611181" alt="Brad Vale LinkedIn Profile" target="_blank">
                <div className="linked-in-logo"></div>
              </a>
            </div>
    
          </div>
        </div>


        <div className="profile">
          <div>
            
            <div>
              <h3>Mudit Jain<br/>PhD<br/><span>Managing Partner</span></h3>
              <a href="https://www.linkedin.com/in/mudit-jain-phd-242637" alt="Mudit Jain LinkedIn Profile" target="_blank">
                <div className="linked-in-logo"></div>
              </a>
            </div>
    
          </div>
        </div>


        <div className="profile">
          <div>
              
            <h3>Ed Brennan<br/>PhD<br/><span>Founding Venture Partner</span></h3>
          </div>
              
        </div>
        
        
      </div>
    )
  }
});

module.exports = {
  Team: Team
}
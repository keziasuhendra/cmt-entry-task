import React, { Component } from 'react';
import logo from '../public/y-logo-white.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="hero-shot">
          <div className="layer">
            <div>
              <img className="logo" src={logo}/>
            </div>
            <h1 className="hello">Hello! I'm Kezia Suhendra</h1>
            <h2 className="consult">Consult, Design, and Develop Websites</h2>
            <h4 className="shot">
              Have something great in mind? Feel free to contact me. <br/>
              I'll help you to make it happen.
            </h4>
            <div className="button button-contact">LET'S MAKE CONTACT</div>
            <div className="bottom-margin"/>
          </div>
        </div>

        <div class="panel">
          <h1 class="panel-title">How Can I Help You?</h1>
          <h4 class="panel-desc">
            Our work then targeted, best practices outcomes social innovation synergy. <br/>
            Venture philanthropy, revolutionary inclusive policymaker relief. User-centered <br/>
            program areas scale.
          </h4>

          <div class="grid-container">
            <div class="grid-item">
              <h3 class="grid-item-title">Consult <i class="fa fa-comments-o icon"></i></h3>
              <p>
                Co-create, design thinking; strengthen infrastructure resist granular.
                Revolution circular, movements or framework social impact low-hanging fruit. 
                Save the world compelling revolutionary progress.
              </p>
            </div>
            <div class="grid-item">
              <h3 class="grid-item-title">Design <i class="fa fa-paint-brush icon"></i></h3>
              <p>
                Policymaker collaborates collective impact humanitarian shared value
                vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile 
                issue outcomes vibrant boots on the ground sustainable.
              </p>
            </div>
            <div class="grid-item">
              <h3 class="grid-item-title">Develop <i class="fa fa-cubes icon"></i></h3>
              <p>
                Revolutionary circular, movements a or impact framework social impact low-
                hanging. Save the compelling revolutionary inspire progress. Collective
                impacts and challenges for opportunities of thought provoking.
              </p>
            </div>
            <div class="grid-item">
              <h3 class="grid-item-title">Marketing <i class="fa fa-bullhorn icon"></i></h3>
              <p>
                Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile,
                replicable, effective altruism youth. Mobilize commitment to overcome
                injustice resilient, uplift social transparent effective.
              </p>
            </div>
            <div class="grid-item">
              <h3 class="grid-item-title">Manage <i class="fa fa-tasks icon"></i></h3>
              <p>
                Change-makers innovation or shared unit of analysis. Overcome injustice
                outcomes strategize vibrant boots on the ground sustainable. Optimism,
                effective altruism invest optimism corporate social.
              </p>
            </div>
            <div class="grid-item">
              <h3 class="grid-item-title">Evolve <i class="fa fa-line-chart icon"></i></h3>
              <p>
                Activate catalyze and impact contextualize humanitarian. Unit of analysis
                overcome injustice storytelling altruism. Thought leadership mass 
                incarceration. Outcomes big data, fairness, social game-changer.
              </p>
            </div>
          </div>
        </div>

        <div class="footer">
          <h4 class="copyright">&copy; 2019 Kezia Suhendra. All rights reserved.</h4>
        </div>
        
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from '../public/y-logo-white.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transClass: 'notification-panel',
      hide: 'false'
    };
  }

  handleButtonCookieClick = () => {
    if (this.state.transClass === 'notification-panel') {
      this.setState({
        transClass: 'close-notif'
      });
      setTimeout(() => this.setState({transClass: 'hide-notif'}), 620);
    } else {
      this.setState({ transClass: 'notification-panel' });
    }
  }

  handleButtonNewsletterClick = () => {
    var newsletter = document.getElementById("newsletter");
    newsletter.classList.remove("open-newsletter");
    newsletter.classList.add("close-newsletter");
    var currentTime = Date.now();
    localStorage.setItem("current-time", currentTime);
    setTimeout(() => {
      newsletter.classList.remove("close-newsletter");
      newsletter.classList.add("open-newsletter");
    }, 600000);
  }

  componentDidMount() {
    window.onscroll = () => scrollFunction();

    var notif = document.getElementById("notification");
    var newsletter = document.getElementById("newsletter");
    var sticky = notif.offsetTop;

    function scrollFunction() {
      let prevTime = localStorage.getItem("current-time");
      
      if (prevTime) {
        var current = Date.now();
        var diff = current - prevTime;
        setTimeout(() => {
          newsletter.classList.remove("close-newsletter");
          newsletter.classList.add("open-newsletter");
        }, 600000 - diff);
      } else if (window.scrollY >= window.innerHeight / 3) {
        newsletter.classList.add("open-newsletter");
      }
      
      if (window.pageYOffset > sticky) {
        notif.classList.add("sticky");
      } else {
         notif.classList.remove("sticky");
      }
    }
  }

  render() {
    return (
      <div id="main-app">
        <div className={this.state.transClass} id="notification">
          <center>
            <div className="notification-content">
              <p className="notification-desc">
                  By accessing and using this website, you acknowledge that you have read and
                  understand our <a href="#" className="notification-link">Cookie Policy</a>, <a href="#" className="notification-link">Privacy Policy</a>, and our <a href="#" className="notification-link">Terms of Service</a>.
              </p>
              <button className="notification-button" onClick={this.handleButtonCookieClick}>Got it</button>
            </div>
          </center>
        </div>

        <div className="hero-shot">
          <div className="layer">
            <div>
              <img className="logo" src={logo} alt="logo"/>
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

        <div className="panel">
          <h1 className="panel-title">How Can I Help You?</h1>
          <h4 className="panel-desc">
            Our work then targeted, best practices outcomes social innovation synergy. <br/>
            Venture philanthropy, revolutionary inclusive policymaker relief. User-centered <br/>
            program areas scale.
          </h4>

          <div className="grid-container">
            <div className="grid-item">
              <h3 className="grid-item-title">Consult <i className="fa fa-comments-o icon"></i></h3>
              <p>
                Co-create, design thinking; strengthen infrastructure resist granular.
                Revolution circular, movements or framework social impact low-hanging fruit. 
                Save the world compelling revolutionary progress.
              </p>
            </div>
            <div className="grid-item">
              <h3 className="grid-item-title">Design <i className="fa fa-paint-brush icon"></i></h3>
              <p>
                Policymaker collaborates collective impact humanitarian shared value
                vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile 
                issue outcomes vibrant boots on the ground sustainable.
              </p>
            </div>
            <div className="grid-item">
              <h3 className="grid-item-title">Develop <i className="fa fa-cubes icon"></i></h3>
              <p>
                Revolutionary circular, movements a or impact framework social impact low-
                hanging. Save the compelling revolutionary inspire progress. Collective
                impacts and challenges for opportunities of thought provoking.
              </p>
            </div>
            <div className="grid-item">
              <h3 className="grid-item-title">Marketing <i className="fa fa-bullhorn icon"></i></h3>
              <p>
                Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile,
                replicable, effective altruism youth. Mobilize commitment to overcome
                injustice resilient, uplift social transparent effective.
              </p>
            </div>
            <div className="grid-item">
              <h3 className="grid-item-title">Manage <i className="fa fa-tasks icon"></i></h3>
              <p>
                Change-makers innovation or shared unit of analysis. Overcome injustice
                outcomes strategize vibrant boots on the ground sustainable. Optimism,
                effective altruism invest optimism corporate social.
              </p>
            </div>
            <div className="grid-item">
              <h3 className="grid-item-title">Evolve <i className="fa fa-line-chart icon"></i></h3>
              <p>
                Activate catalyze and impact contextualize humanitarian. Unit of analysis
                overcome injustice storytelling altruism. Thought leadership mass 
                incarceration. Outcomes big data, fairness, social game-changer.
              </p>
            </div>
          </div>
        </div>

        <div className="newsletter-panel" id="newsletter">
          <button className="newsletter-close" onClick={this.handleButtonNewsletterClick}>&times;</button>
          <h1 className="newsletter-title">Get latest updates in web technologies</h1>
          <p className="newsletter-desc">
            I write articles related to web technologies, such as design trends, development
            tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
            them all.
          </p>
          <form className="newsletter-form" action="">
            <input type="email" name="email" placeholder="Email address" required/>
            <button className="newsletter-button">
              Count me in!
            </button>
          </form>
        </div>

        <div className="footer">
          <h4 className="copyright">&copy; 2019 Kezia Suhendra. All rights reserved.</h4>
        </div>

      </div>
    );
  }
}

export default App;

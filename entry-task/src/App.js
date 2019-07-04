import React, { Component } from 'react';
import logo from '../public/y-logo-white.png';
import './App.css';

class App extends Component {
  render() {
    return (
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
    );
  }
}

export default App;

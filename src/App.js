import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Styleguide</h2>
        </div>
        <p className="App-intro">
          Welcome to Styleguide
        </p>
        <nav>
          <ul>
            <li>color</li>
          </ul>
        </nav>
        <div>
          <div className="color purple"></div>
          <div className="color pink"></div>
          <div className="color green"></div>
          <div className="color yellow"></div>
          <div className="color blue"></div>
          <div className="color orange"></div>
        </div>
      </div>
    );
  }
}

export default App;

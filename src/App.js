import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Styleguide
        </h1>
        <nav>
          <ul>
            <li>color</li>
          </ul>
        </nav>
        <main>
          <div className="color purple"></div>
          <div className="color pink"></div>
          <div className="color green"></div>
          <div className="color yellow"></div>
          <div className="color blue"></div>
          <div className="color orange"></div>
        </main>
      </div>
    );
  }
}

export default App;

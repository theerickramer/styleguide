import React, { Component } from 'react';
import Color from './color/Color';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Styleguide</h1>
        <nav>
          <ul>
            <li>color</li>
          </ul>
        </nav>
        <main>
          <Color />
        </main>
      </div>
    );
  }
}

export default App;

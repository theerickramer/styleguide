import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Color from './color/Color';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Styleguide</h1>
        <nav>
          <ul>
            <li><Link to="/color">color</Link></li>
          </ul>
        </nav>
        <main>
          <Route path="/color" component={Color} />
        </main>
      </div>
    );
  }
}

export default App;

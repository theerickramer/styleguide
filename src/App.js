import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Color from './color/Color';
import Typography from './typography/Typography';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__head">
            <h1>Styleguide</h1>
          </div>
          <div className="App__body">
            <nav>
              <ul>
                <li>
                  <Link to="/color">Color</Link>
                </li>
                <li>
                  <Link to="/typography">Typography</Link>
                </li>
              </ul>
            </nav>
            <main>
              <Route path="/color" component={Color} />
              <Route path="/typography" component={Typography} />
            </main>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';

export default class Color extends Component {
  colors = {
    purple: '#7901BB',
    pink: '#D80076',
    green: '#9EF100',
    yellow: '#FFFF00',
    blue: '#00DFCF',
    orange: '#FF6F00'
  };

  colorArray = Object.keys(this.colors).map((color, index) =>
    <div className={`color ${color}`} key={index}>
      <p>
        {color}
        <br />
        {this.colors[color]}
      </p>
    </div>
  );

  render() {
    return (
      <div>
        {this.colorArray}
      </div>
    );
  }
}

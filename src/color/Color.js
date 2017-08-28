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
  render() {
    const colorArray = [];
    for (let color of Object.keys(this.colors)) {
      colorArray.push(
        <div className={`color ${color}`} key={color}>
          <p>
            {color}: {this.colors[color]}
          </p>
        </div>
      );
    }
    return (
      <div>
        {colorArray}
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Link to="/hello">go to hello</Link>
      </div>
    );
  }
}

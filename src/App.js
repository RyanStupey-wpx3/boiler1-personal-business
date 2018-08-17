import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopSpan from "./Components/TopSpan.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
        <TopSpan/>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

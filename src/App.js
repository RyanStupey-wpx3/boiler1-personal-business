import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopSpan from "./Components/TopSpan.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopSpan/>
        <div className="alpha-1"> <div className="beta-1"></div></div>
        <div className="alpha-1"> <div className="beta-1"></div></div>
        <div className="alpha-1"> <div className="beta-1"></div></div>
        {/* alpha-1 == width: 100% | beta-1 == width: 80%ish; margin: 0 auto; | webContent == style as needed   */}
      </div>
    );
  }
}

export default App;

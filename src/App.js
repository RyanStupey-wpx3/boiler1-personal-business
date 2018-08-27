import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopSpan from "./Components/TopSpan.js"
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
      <TopSpan message="from my heart to yours"/>
        {routes}
      </div>
    );
  }
}

export default App;

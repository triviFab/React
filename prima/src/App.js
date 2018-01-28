import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Htwo from './Htwo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Htwo value="Ecchice!" />
      </div>
    );
  }
}

export default App;

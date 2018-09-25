import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import image1 from './imgs/8marches.png';
import image2 from './imgs/25marches.png';

import Travels from "./Travels";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
        // <p className="App-intro">
        //   To get started, edit <code>src/App.js</code> and save to reload.
        // </p>
        <Travels
          photo={image1}
          country="France"
          destination="rue blabla"
          distance="8 marches"
        />
        <Travels
          photo={image2}
          country="France"
          destination="rue des moulins"
          distance="25  marches"
        />
      </div>
    );
  }
}

export default App;

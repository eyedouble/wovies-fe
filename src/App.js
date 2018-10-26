import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';

import AppMenuBar from './partials/AppMenuBar/AppMenuBar';

class App extends Component {
  render() {
    return (
      <div className="App">

      <AppMenuBar></AppMenuBar>
        <header className="App-header">

   
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Reactc
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;

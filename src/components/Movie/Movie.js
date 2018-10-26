import React, { Component } from 'react';
import AppMenuBar from '../../partials/AppMenuBar/AppMenuBar';

import './Movie.css';

import Button from '@material-ui/core/Button';



class Movie extends Component {

    State = {};
    

    constructor ( Props ) {
        super();

        if ( typeof Props.match.params.id !== 'undefined' )
            this.State.id = Props.match.params.id;


        console.log ( this.State.id );
    }

  render() {
    return (
      <div className="movie">

      <AppMenuBar Title="Movie"></AppMenuBar>
        <header className="App-header">

        <h1>Movie zxz</h1>

        

   
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

export default Movie;

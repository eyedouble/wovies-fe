import React, { Component } from 'react';

import HttpClient from './../../clients/HttpClient';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './Movies.css';

import AppMenuBar from '../../partials/AppMenuBar/AppMenuBar';
import MoviesList from './List/MoviesList';

class Movies extends Component {

    state = {
        Movies: null,
    };

    constructor ( Props ) {
        super ( );

        // this.fetchMovies ( ).then ( ( R ) => {
        //     this.Movies = R.data.results;
        //     console.log ( this.Movies );            
        // } );

        
    }

    componentDidMount() {
        this._fetchMovies ( ).then ( ( R ) => {
            this.setState({Movies:R.data.results});
            
            console.log ( this.state.Movies );  
        } );
    }    

    render() {
        let Content;

        if ( this.state.Movies === null ) {
            Content = <h1>Loading ...</h1>;
        } else {                       
            Content = 
                <>
                    <section>
                        <h1>Search</h1>
                        <TextField
                            id="outlined-search"
                            label="Search for movies"
                            type="search"
                            className=""
                            margin="normal"
                            variant="outlined"/>
                        <Button variant="outlined"  className="">
                            Search
                        </Button>
                    </section>
                    <section>
                        <h1>Popular right now</h1>
                        <MoviesList movies={this.state.Movies}></MoviesList>
                    </section>
                </>;
        }

        return (
            <div className="movies">

                <AppMenuBar Title="Movies"></AppMenuBar>
                
                <main>
                       {Content}     
                </main>  

            </div>
        );
    }


    _fetchMovies ( ) {
        const httpClient = new HttpClient ( );
        return httpClient.get ( 'movie/popular?api_key=7e719bfe3cd3786ebf0a05d3b138853d' );
    }

}

export default Movies;

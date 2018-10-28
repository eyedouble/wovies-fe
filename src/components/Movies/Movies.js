import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';

import HttpClient from './../../clients/HttpClient';
import Watchlater from './../../modules/watchlater/WatchLater';
import AppMenuBar from './../../partials/AppMenuBar/AppMenuBar';
import AppSpinner from './../../partials/AppSpinner/AppSpinner';
import MoviesList from './../../partials/MoviesList/MoviesList';

import './Movies.css';

class Movies extends Component {

    state = {
        movies: null        
        ,search: ''
        ,searching:false
        ,httpClient: new HttpClient()
    };

    componentDidMount = ( ) => {
        this._fetchMovies().then((R) => {                        
            this.setState({ movies: R.data });           
        });        
    }

    handleClick = ( E ) => {      
        if ( E.action === 'open' )
            return this.props.history.push ( '/movie/' + E.detail );
        if ( E.action === 'add_to_watchlater' )
            return Watchlater.add ( E.detail ).then ( ( R ) => {
                window.dispatchEvent ( new CustomEvent ( 'AppSnackbar', {detail:{message:'Movie added to your watch later list.', action:'ok'}} ) );
            } ); 
    }

    handleSearch = ( E ) => {
        if ( E.target.value.length < 1 )
            return this._fetchMovies().then((R) => { 
                this.setState ( {search:'', searching:false, movies: R.data} );         
            });
    

        this.setState ( {search:E.target.value, searching:true} );       
        this._searchMovies ( E.target.value ).then ( ( Response ) => {            
            if ( Response.ok )
                this.setState ( {movies: Response.data } );

            return this.setState ( {searching:false} );
        }, ( Error ) => {

            return this.setState ( {searching:false} );            
        } )
    }

    render ( ) {
        let Content;

        if (this.state.movies === null || this.state.searching ) {
            Content = <AppSpinner></AppSpinner>;
        } else {
            Content =
                <>                    
                    <section>
                        { this.state.search.length > 0 && ( <h1>Results for '{ this.state.search }'</h1> ) }
                        { !this.state.search.length > 0 && ( <h1>Popular right now</h1> ) }
                        <MoviesList 
                            movies={ this.state.movies }                            
                            clickCallback={ this.handleClick }></MoviesList>
                    </section>
                </>;
        }

        return (
            <div className="movies">

                <AppMenuBar title="Movies"></AppMenuBar>

                <main>
                    <section>
                            <h1>Search</h1>
                            <form className="__search" noValidate autoComplete="off" onSubmit={ this.handleSearch }>
                                <TextField
                                    id="outlined-search"
                                    label="Search for movies"
                                    type="search"
                                    value={ this.state.search } 
                                    onChange={ this.handleSearch }
                                    className="__input"
                                    margin="normal"
                                    variant="outlined" />
                                {/* <Button variant="outlined" size="large" className="__button">
                                    Search
                                </Button> */}
                            </form>
                        </section>
                    {Content}
                </main>
                
            </div>
        );
    }


    /* Unmount -> Cancel outstanding http reqs
    
    */


    _fetchMovies = ( ) => {       
        return this.state.httpClient.get ( 'movie/popular' );
    }

    _searchMovies = ( Qs ) => {          
        return this.state.httpClient.get ( 'movie/search?query=' + Qs );
    }

}

export default Movies;

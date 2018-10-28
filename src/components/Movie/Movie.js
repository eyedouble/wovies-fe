import React, { Component } from 'react';
import HttpClient from './../../clients/HttpClient';
import Watchlater from './../../modules/watchlater/WatchLater';
import AppMenuBar from '../../partials/AppMenuBar/AppMenuBar';
import AppSpinner from '../../partials/AppSpinner/AppSpinner';
import MovieArtwork from './Artwork/MovieArtwork';
import MovieDetails from './Details/MovieDetails';
import './Movie.css';


class Movie extends Component {

    state = {
        movie: null
        ,id: null
    };

    constructor ( Props ) {
        super ( );
        if ( typeof Props.match.params.id !== 'undefined' )
            this.state.id = Props.match.params.id;
    }

    componentDidMount = ( ) => {
        this._fetchMovie ( this.state.id ).then( ( Response ) => {           
            this.setState ( {movie: Response.data} );            
            
        } );
    }

    handleClick = ( Event ) => {
        if ( Event.action === 'add_to_watchlater' )
            return Watchlater.add ( Event.detail ).then ( ( R ) => {
                window.dispatchEvent ( new CustomEvent ( 'AppSnackbar', {detail:{message:'Movie added to your watch later list.', action:'ok'}} ) );
            } ); 
    }

    render = ( ) => {
        let Content;

        if ( this.state.movie === null ) {
            Content = 
            <>
                <AppMenuBar title="Movie"></AppMenuBar>
                <AppSpinner></AppSpinner>
            </>;
        } else {
            Content =
                <>
                    <AppMenuBar 
                        title={ this.state.movie.title } 
                        back={ true }></AppMenuBar>
                    <main>
                        <MovieArtwork 
                            className='__artwork'   
                            title={ this.state.movie.title }                  
                            src={ 'https://image.tmdb.org/t/p/original' + this.state.movie.poster_path }></MovieArtwork>    
                            
                        <MovieDetails 
                            className="__details"
                            id={ this.state.movie.id }
                            subtitle={ this.state.movie.tagline }
                            copy={ this.state.movie.overview}
                            vote_average={ this.state.movie.vote_average}
                            runtime={ this.state.movie.runtime}
                            genres={ this.state.movie.genres}
                            clickCallback={ this.handleClick }
                            ></MovieDetails>
                    </main>            
                </>;
        }

        return (
            <div className="movie">
                    {Content}
            </div>
        );
    }

    _fetchMovie = ( Id ) => {
        const httpClient = new HttpClient ( );
        return httpClient.get ( 'movie/' + Id );
    }

}

export default Movie;

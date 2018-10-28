import React, { Component } from 'react';
import HttpClient from './../../clients/HttpClient';
import Auth from './../../modules/auth/Auth';
import WatchLater from './../../modules/watchlater/WatchLater';
import AppMenuBar from '../../partials/AppMenuBar/AppMenuBar';
import AppSpinner from '../../partials/AppSpinner/AppSpinner';
import MoviesList from './../../partials/MoviesList/MoviesList';

import './WatchLaterList.css';

class WatchLaterList extends Component {

    state = {
        movies: null        
        ,order: null
        ,user: Auth.getUser ( ).data       
        ,httpClient: new HttpClient ( )
    };

    componentDidMount = ( ) => {
        this.loadList ( );
    }
    
    handleClick = ( E ) => {
        if ( E.action === 'open' )
            this.props.history.push ( '/movie/' + E.detail );        
        if ( E.action === 'move_up_watchlater' )
            WatchLater.swap ( E.detail, E.detail - 1  ).then ( ( R ) => {
                this.emitMessage ( 'Movie moved up in list.' );
                this.loadList ( ); 
            } );
        if ( E.action === 'move_down_watchlater' )
        WatchLater.swap ( E.detail, E.detail + 1  ).then ( ( R ) => {
            this.emitMessage ( 'Movie moved down in list.' );
            this.loadList ( ); 
        } );
        if ( E.action === 'remove_watchlater' )
            WatchLater.remove ( E.detail ).then ( ( R ) => {
                this.emitMessage ( 'Movie is removed from list.' );
                this.loadList ( );
            } );
    }


    loadList = ( ) => {
        WatchLater.getAggerated ( ).then ( ( R ) => {
            const List = R.order.map ( ( Id ) => {
                return R.data[Id]
            } );              
            this.setState({ movies: List });           
        });
    }

    emitMessage = ( Message, Action='ok' ) => {
        window.dispatchEvent ( new CustomEvent ( 'AppSnackbar', {detail:{message:Message, action:Action}} ) );
    }   

    render ( ) {
        let Content;

        if (this.state.movies === null || this.state.searching ) {
            Content = <AppSpinner></AppSpinner>;
        } else {
            Content =
                <>                    
                    <section>
                        <h1>Hi { this.state.user.firstname }, this is your watch later list</h1>
                    
                        <MoviesList 
                            movies={ this.state.movies }
                            clickCallback={ this.handleClick }
                            watchLater={true}></MoviesList>
                    </section>
                </>;
        }

        return (
            <div className="movies">

                <AppMenuBar title="Movies" back={ true }></AppMenuBar>

                <main>                    
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

export default WatchLaterList;

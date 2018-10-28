import React, { Component } from 'react';

import MoviesCard from './../MoviesCard/MoviesCard';

import './MoviesList.css';

class MoviesList extends Component {

    State = {};    

    constructor ( Props ) {
        super();       
    }

    render() {
        return (            
            this.props.movies.map ( ( Movie, I ) => {                
                return(
                        <MoviesCard
                            key={ I }
                            number={ I + 1 }  
                            first={ I === 0 }                        
                            last={ ( I + 1 ) === this.props.movies.length }                        
                            id={ Movie.id }
                            title={ Movie.title }
                            copy={ Movie.overview }
                            backdrop={ Movie.backdrop_path }
                            poster={ Movie.poster_path }
                            clickCallback={ this.props.clickCallback }
                            watchLater={this.props.watchLater}></MoviesCard>
                    );
            } )            
        );
    }
}

export default MoviesList;

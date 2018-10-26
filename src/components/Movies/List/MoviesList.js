import React, { Component } from 'react';

import './MoviesList.css';

import MoviesCard from './../Card/MoviesCard';




class MoviesList extends Component {

    State = {};    

    constructor ( Props ) {
        super();       
    }

    render() {
        return (            
            this.props.movies.map ( (Movie, I) => {
                return(
                        <MoviesCard
                            key={ I }
                            Title={ Movie.title }
                            Copy={ Movie.overview.substring ( 0, 100 ) + '...' }
                            Media={ Movie.backdrop_path }></MoviesCard>
                    );
            } )            
        );
    }
}

export default MoviesList;

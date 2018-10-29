import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MovieArtwork.css';


class MovieArtwork extends Component {

    render = ( ) => {
        
        return (
            <section 
                className="movie-artwork" 
                style={ { backgroundImage:'url(' + this.props.src + ')' } }>
                <h1 className="__title">{ this.props.title }</h1>
            </section>
        );
    }  

}

MovieArtwork.propTypes = {   
    title: PropTypes.string.isRequired
    ,src: PropTypes.string.isRequired
};

export default MovieArtwork;

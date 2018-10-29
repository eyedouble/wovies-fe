import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Chip } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import './MovieDetails.css';


class MovieDetails extends Component {

    render  = ( ) => {
        
        return (
            <section className="movie-details">
                <h2>{ this.props.subtitle }</h2>
                <span className="__chips">
                    <Chip label={ this.props.vote_average } icon={ <StarIcon /> } variant="outlined" />
                    <Chip label={ this.props.runtime + ' m' } icon={ <AccessTimeIcon /> } variant="outlined" />
                    {this.props.genres.map ( ( Genre, I ) => {
                        return(
                            <Chip label={ Genre.name } key={ I } variant="outlined" />
                        );
                    } )}
                </span>
                <p className="__copy">{ this.props.copy }</p>
                <Button 
                    variant="outlined" 
                    onClick={ ( ) => this.props.clickCallback ( {action: 'add_to_watchlater', detail: this.props.id} ) }>
                    Add to watch later&nbsp;<PlaylistAddIcon />
                </Button>
            </section>
        );
    }  

}

MovieDetails.propTypes = {
    subtitle: PropTypes.string.isRequired
    ,copy: PropTypes.string.isRequired
};

export default MovieDetails;

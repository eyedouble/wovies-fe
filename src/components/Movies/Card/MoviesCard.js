import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './MoviesCard.css';


class MoviesCard extends Component {
  render() {
    return (
      <Card className="movies__card">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Co



            ntemplative Reptile"
            className="__media"
            height="140"
            image={'https://image.tmdb.org/t/p/w500' + this.props.Media}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.Title}
            </Typography>
            <Typography component="p">
              {this.props.Copy}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default MoviesCard;

import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@material-ui/icons/ArrowDownwardOutlined';
import './MoviesCard.css';


class MoviesCard extends Component {

	render = ( ) => {

		return (
			<Card className="movies__card">

				{ this.props.watchLater && <span className="--number">{this.props.number + ''}</span> }

				<CardActionArea onClick={ ( ) => this.props.clickCallback ( {action: 'open', detail: this.props.id} ) }>
					<CardMedia
						component="img"
						alt={ this.props.title }
						className="__media"
						height="140"
						image={ 'https://image.tmdb.org/t/p/w500' + ( this.props.backdrop ? this.props.backdrop : this.props.poster ) }
						title={ this.props.title }/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{ this.props.title }
						</Typography>
						<Typography component="p" className="__copy">
							{ this.props.copy }
						</Typography>
					</CardContent>
				</CardActionArea>

				<CardActions>
					{!this.props.watchLater &&
						<Button
							size="small"
							color="primary"
							onClick={ ( ) => this.props.clickCallback ( {action: 'add_to_watchlater', detail: this.props.id} ) }>
								Add to watch later
						</Button>
					}

					{this.props.watchLater &&
						<>
							{!this.props.first && 
								<IconButton
									aria-label="Move up"
									onClick={ ( ) => this.props.clickCallback ( {action: 'move_up_watchlater', detail: this.props.number} ) }>
									<ArrowUpwardOutlinedIcon />
								</IconButton>
							}
							{!this.props.last && 
								<IconButton
									aria-label="Move down"
									onClick={ ( ) => this.props.clickCallback ( {action: 'move_down_watchlater', detail: this.props.number} ) }>
									<ArrowDownwardOutlinedIcon />
								</IconButton>
							}
							<IconButton
								aria-label="Delete"
								onClick={ ( ) => this.props.clickCallback ( {action: 'remove_watchlater', detail: this.props.id} ) }>
								<DeleteOutlinedIcon />
							</IconButton>
						</>
					}

				</CardActions>

			</Card>
		);
	}
}

export default MoviesCard;

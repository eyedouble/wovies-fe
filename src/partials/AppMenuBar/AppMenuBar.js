import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import MovieOutlinedIcon from '@material-ui/icons/MovieOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Button } from '@material-ui/core';
import Auth from './../../modules/auth/Auth';
import AppUserMenu from './AppUserMenu/AppUserMenu';
import './AppMenuBar.css';


class AppMenuBar extends React.Component {
	
	state = {
		auth: Auth.isAuthenticated ( )
		,appMenuTarget: null
		,appUserMenuTarget: null
	}
	
	handleAppUserMenu = ( Event ) => {
		this.setState ( {appUserMenuTarget: Event.currentTarget} );
	}

	handlePrimaryButton = ( _Event ) => {
		if ( this.props.back )
			this.props.history.goBack ( );
	}

	handleAppUserMenuClose = ( Event ) => {    
		if ( typeof Event.navigate !== 'undefined' )
			this.props.history.push ( Event.navigate );

		this.setState({ appUserMenuTarget: null });
	};

	render = ( ) => {    
		const {auth, appMenuTarget, appUserMenuTarget} = this.state;  
		const appUserMenuOpen = Boolean(appUserMenuTarget);

		return (
			<div>      
				<AppBar className="app-menu-bar" position="fixed">
					<Toolbar className="__toolbar">

					 <div className="__left">
							<IconButton
								aria-owns={ appMenuTarget ? 'menu-appbar' : null }
								aria-haspopup="true"                
								onClick={ this.handlePrimaryButton }
								color="inherit">
								{ this.props.back && <ArrowBackOutlinedIcon /> }
								{ !this.props.back && <MovieOutlinedIcon /> }
							</IconButton>

							<Typography variant="h6" color="inherit">
								{ this.props.title }
							</Typography>
						
					 </div>
				
						<div className="__right">
							{ auth && (
								<>
								<IconButton
								aria-owns={appUserMenuTarget ? 'menu-appbar' : null}
								aria-haspopup="true"
								onClick={ this.handleAppUserMenu }
								color="inherit">
								<AccountCircle />
							</IconButton>

							<AppUserMenu 
								target={ this.state.appUserMenuTarget }
								open={ appUserMenuOpen }
								onClose={ this.handleAppUserMenuClose }></AppUserMenu>
								</>
							) }
							{ !auth && (
								<Link to="/user/login">
									<Button variant="outlined">
										Sign in
									</Button>
								</Link>                
							) }              
						</div>            
						
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

AppMenuBar.propTypes = {
	title: PropTypes.string,
};

export default withRouter ( AppMenuBar );

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'

import './AppMenuBar.css';

import AppMenu from './AppMenu/AppMenu';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';






class AppMenuBar extends React.Component {
  state = {
    auth: true,
    menuTarget: null,
  };

  handleMenu = E => {
    this.setState ( {menuTarget: E.currentTarget} );
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  // handleMenu = event => {
  //   console.log ( event );
  //   this.setState({ anchorEl: event.currentTarget });
  // };

  handleMenuClose = ( E ) => {
    console.log ( E );
    console.log ( this.props );
    if ( typeof E.navigate !== 'undefined' )
      this.props.history.push ( E.navigate );

    this.setState({ menuTarget: null });
  };

  render() {
    // const { classes } = this.props;
    const { auth, menuTarget } = this.state;
    const open = Boolean(menuTarget);

    return (
      <div>
        {/* <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup> */}
        <AppBar className="app-menu-bar" position="fixed">
          <Toolbar className="__toolbar">
           <div className="__left">
            <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                {this.props.Title}
              </Typography>
           </div>
        
            <div className="__right">
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

              <AppMenu 
                target={this.state.menuTarget}
                open={open}
                onClose={this.handleMenuClose}></AppMenu>
              
            </div>
            
            {/* {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )} */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

// AppMenuBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles()(AppMenuBar);
export default withRouter ( AppMenuBar );
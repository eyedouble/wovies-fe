import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import './AppMenu.css';

import Button from '@material-ui/core/Button';



class AppMenu extends Component {
    
    state = {      
        menuEl: null,
    };  

    render() {
        // const { menuEl } = this.state;
        // const open = Boolean(menuEl);

        return (
            <Menu
                id="menu-appbar"
                anchorEl={this.props.target}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={this.props.open}
                onClose={this.props.onClose}
              >
                <MenuItem onClick={() => this.props.onClose ( {navigate:'watch-later/01'} ) }>Profile</MenuItem>
                <MenuItem onClick={() => this.props.onClose ( {navigate:'movie/01'} ) }>My account</MenuItem>
              </Menu>
        );
    }    

}

Menu.propTypes = {
    target: PropTypes.element,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default AppMenu;

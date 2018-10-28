import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Auth from './../../../modules/auth/Auth';
import './AppUserMenu.css';


class AppUserMenu extends Component {

    state = {
        menuEl: null,
        user: Auth.getUser ( ).data
    };

    render = ( ) => {
        const {user} = this.state;        

        return (
            <Menu
                id="menu-appbar"
                anchorEl={ this.props.target }
                anchorOrigin={ {
                    vertical: 'top',
                    horizontal: 'right',
                } }
                transformOrigin={ {
                    vertical: 'top',
                    horizontal: 'right',
                } }
                open={ this.props.open }
                onClose={ this.props.onClose }
            >                          
                <MenuItem onClick={ ( ) => this.props.onClose ( {navigate: '/user/account'} ) }>{ user.firstname } { user.surname }</MenuItem>
                <MenuItem onClick={ ( ) => this.props.onClose ( {navigate: '/watch-later/my-list'} ) }>Watch later list</MenuItem>
                <MenuItem onClick={ ( ) => this.props.onClose ( {navigate: '/user/logout'} ) }>Logout</MenuItem>
            </Menu>
        );
    }

}

AppUserMenu.propTypes = {    
    open: PropTypes.bool.isRequired
    , onClose: PropTypes.func.isRequired
};

export default AppUserMenu;

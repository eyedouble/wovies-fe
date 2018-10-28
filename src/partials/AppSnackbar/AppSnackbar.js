import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

/*
*   Use `window.dispatchEvent ( new CustomEvent ( 'AppSnackbar', {detail:{message:'example', action:'ok'}} ) );` to
*   dispatch snackbars.
*/
class AppSnackbar extends React.Component {
    
    state = {
        open: false
        ,message: ''
        ,action:''
    };

    componentDidMount = ( ) => {
        window.addEventListener ( 'AppSnackbar', this.handleMessage );        
    }

    handleMessage = ( Event ) => {
        if ( this.state.open ) 
            this.handleClose ( null, 'new msg' );

        this.setState ( { 
            open: true            
            ,message: Event.detail.message
            ,action: Event.detail.action
        } );
    };

    handleClose = ( _Event, Reason ) => {
        if ( Reason === 'clickaway' ) {
            return;
        }

        this.setState ( { 
            open: false            
            ,message: ''
            ,action: ''
        } );
    };

    render = ( ) => {
    
        return (
            <div>          
                <Snackbar
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    ContentProps={{
                    'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.state.message}</span>}
                    action={[
                    <Button key="{this.state.action}" color="secondary" size="small" onClick={this.handleClose}>
                        {this.state.action}
                    </Button>,
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                    //   className={classes.close}
                        onClick={this.handleClose}
                    >
                        <CloseIcon />
                    </IconButton>,
                    ]}
                />
            </div>
        );
    }
}

AppSnackbar.propTypes = {
    message: PropTypes.string
    ,action: PropTypes.string
};

export default AppSnackbar;

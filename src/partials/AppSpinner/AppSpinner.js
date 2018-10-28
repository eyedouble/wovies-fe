import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './AppSpinner.css';

class AppSpinner extends Component {

    render = ( ) => {
        
        return (
            <div className="app-spinner">
                <CircularProgress color="primary" size={ 50 } thickness={ 1 } />
            </div>
        );
    }

}

export default AppSpinner;

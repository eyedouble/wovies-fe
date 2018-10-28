import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { cyan, deepPurple } from '@material-ui/core/colors';
import * as serviceWorker from './serviceWorker';

import Routes from './modules/router/Routes';

import AppSnackbar from './partials/AppSnackbar/AppSnackbar';
import './index.css';


const theme = createMuiTheme ( {
    palette: {
        type: 'dark',
        primary: cyan,
        secondary: deepPurple,
    },
    typography: {
        useNextVariants: true
    }
} );

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <Router>
            <div>                   
                {Routes()}                 
            </div>
        </Router>
        <AppSnackbar></AppSnackbar>       
    </MuiThemeProvider>
    ,
    document.getElementById('root')
);

serviceWorker.unregister();
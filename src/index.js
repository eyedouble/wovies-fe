import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Routes from './router/Routes';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { cyan, deepPurple } from '@material-ui/core/colors';

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
    </MuiThemeProvider>
    ,
    document.getElementById('root')
);

serviceWorker.unregister();
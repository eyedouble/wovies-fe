
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import ProtectedRoute from './ProtectedRoute';

import Movies from './../components/Movies/Movies';
import Movie from './../components/Movie/Movie';
import { Login } from './../components/User/User';


const Routes = ( ) => (
    <Switch>
        <Route exact path="/" component={Movies} />     
        <Route exact path="/movie/:id" component={Movie} />
        <Route exact path="/user/login" component={Login} />
        <ProtectedRoute exact path="/watch-later/:id" component={Movie} />
        <Redirect from="*" to="/" />
    </Switch>
);

export default Routes;
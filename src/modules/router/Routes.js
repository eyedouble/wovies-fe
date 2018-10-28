import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Movies from './../../components/Movies/Movies';
import Movie from './../../components/Movie/Movie';
import WatchLaterList from './../../components/WatchLaterList/WatchLaterList';
import { Login, Logout, Register } from './../../components/User/User';
import ProtectedRoute from './ProtectedRoute';


const Routes = ( ) => (
    <Switch>
        <Route exact path="/" component={Movies} />     
        <Route exact path="/movie/:id" component={Movie} />        
        <ProtectedRoute exact path="/watch-later/:id" component={WatchLaterList} />

        <Route exact path="/user/login" component={Login} />
        <Route exact path="/user/register" component={Register} />
        <ProtectedRoute exact path="/user/logout" component={Logout} />

        <Redirect from="*" to="/" />
    </Switch>
);

export default Routes;

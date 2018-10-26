import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        window.localStorage.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/user/login' />
    )} />
);

export default ProtectedRoute;
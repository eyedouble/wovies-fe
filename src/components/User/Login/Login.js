import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';

import AppMenuBar from './../../../partials/AppMenuBar/AppMenuBar';
import Auth from './../../../modules/auth/Auth';

import './Login.css';


class Login extends Component {

    state = {
        username:''
        ,password:''
    }
   
    handleChange = ( Event ) => {       
        let update = {};
        update[Event.target.name] = Event.target.value;
        this.setState ( update );
    }

    handleSubmit = ( Event ) => {
        Event.preventDefault ( );

        const emitMessage = ( Message, Action ) => {

            return window.dispatchEvent ( new CustomEvent ( 'AppSnackbar', {detail:{
                message: Message
                ,action: Action
            }} ) );
        };

        if ( this.state.username.length < 3 )
            return emitMessage ( 'Please provide a username', 'ok' );            
        
        if ( this.state.password.length < 3 )
            return emitMessage ( 'Please provide a password', 'ok' );
       
        Auth.login ( this.state.username, this.state.password ).then ( ( Success ) => {
            this.props.history.push ( '/' );

            return emitMessage ( 'Welcome back!', 'ok' );  
        }, ( Error ) => {
            console.log ( Error );

            return emitMessage ( 'The credentials you entered are invalid', 'ok' );             
        } );
 
    }  

    handleCreateAccount = ( ) => {
        this.props.history.push ( '/user/register' );
    }

    render = ( ) => {
        return (
            <div className="login">
                <AppMenuBar title="Sign in" back={ true }></AppMenuBar>
                
                <form className="__form" noValidate autoComplete="off" onSubmit={ this.handleSubmit }>
                    <TextField
                        name="username"
                        label="Username or email"
                        className=""
                        value={ this.state.username } 
                        onChange={ this.handleChange }
                        margin="normal"
                        variant="outlined"
                        required
                        />
                    <TextField
                        name="password"
                        label="Password"                        
                        className=""
                        value={ this.state.password } 
                        onChange={ this.handleChange }
                        margin="normal"
                        variant="outlined"
                        type="password"
                        required
                        />
                    <Button 
                        type="submit"
                        variant="outlined" 
                        className="submit">
                        Sign in
                    </Button>
                    <Button size="small" onClick={ this.handleCreateAccount }>
                        Create an account
                    </Button>

                </form>
                
            </div>
        );
    }

}

export default Login;

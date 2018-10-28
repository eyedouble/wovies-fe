import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';

import AppMenuBar from './../../../partials/AppMenuBar/AppMenuBar';
import Auth from './../../../modules/auth/Auth';

import './Register.css';


class Register extends Component {

    state = {
        firstname:''
        ,surname:''
        ,username:''
        ,password:''
        ,password2:''        
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

        const incomplete = Object.keys ( this.state ).reduce ( ( Acc, X ) => {           
            return Acc ? Acc : ( this.state[X].length < 3 );
        }, false );

        if ( incomplete )
            return emitMessage ( 'Please fill out all fields', 'ok' ); 

        if ( this.state.password !== this.state.password2 )
            return emitMessage ( 'Passwords do not match each other', 'ok' );
               
        Auth.register ( 
            this.state.username
            ,this.state.password 
            ,this.state.firstname
            ,this.state.surname
        ).then ( ( Success ) => {     
            this.props.history.push ( '/user/login' );

            return emitMessage ( `Thanks for registering ${this.state.firstname}. Please login with your email and password.` , 'ok' );  
        }, ( Error ) => {

            return emitMessage ( 'Could not register, your email may already exist.', 'ok' );             
        } );
 
    }  

    handleCreateAccount = ( ) => {

        return this.props.history.push ( '/user/register' );
    }

    render = ( ) => {

        return (
            <div className="login">
                <AppMenuBar title="Register" back={ true }></AppMenuBar>
                
                <form className="__form" noValidate autoComplete="off" onSubmit={ this.handleSubmit }>
                    <TextField
                        name="firstname"
                        label="First Name"
                        className=""
                        value={ this.state.firstname } 
                        onChange={ this.handleChange }
                        margin="normal"
                        variant="outlined"
                        required
                        />
                    <TextField
                        name="surname"
                        label="Surname"
                        className=""
                        value={ this.state.surname } 
                        onChange={ this.handleChange }
                        margin="normal"
                        variant="outlined"
                        required
                        />
                    <TextField
                        name="username"
                        label="Email"
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
                    <TextField
                        name="password2"
                        label="Repeat Password"                        
                        className=""
                        value={ this.state.password2 } 
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
                        Register
                    </Button>                    

                </form>
                
            </div>
        );
    }

}

export default Register;

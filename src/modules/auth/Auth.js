import jwt from 'jsonwebtoken';
import HttpClient from './../../clients/HttpClient';

class Auth {
  
    static isAuthenticated ( ) {
        
        return this.getUser ( ) ? true : false;
    }

    static getUser ( ) {
        
        return this.decodeToken ( this.readToken ( ) );        
    }

    static login ( Username, Password ) {
        
        return new Promise ( ( Resolve, Reject ) => {
            new HttpClient ( )
            .post ( 'auth/login', {
                username: Username
                ,password: Password
            } )
            .then ( ( Response ) => {
                if ( Response.ok )                      
                    if ( this.writeToken ( Response.data ) )                       
                        return Resolve ( this.decodeToken ( Response.data ) );
               
                return Reject ( );                    
            } );            
        } );
    }   

    static register ( Email, Password, Firstname, Surname ) {
        
        return new Promise ( ( Resolve, Reject ) => {
            new HttpClient ( )
            .post ( 'auth/register', {
                id: Email
                ,password: Password
                ,firstname: Firstname
                ,surname: Surname
            } )
            .then ( ( Response ) => {               
                if ( Response.ok )
                    return Resolve ( Response.data );
               
                return Reject ( );                    
            } );            
        } );

    }

    static logout ( ) {
        
        return sessionStorage.removeItem ( 'auth' );
    }

    static decodeToken ( Token ) {        
        const Decoded = jwt.decode ( Token );
        if ( Decoded )
            if ( Decoded.exp > Math.floor ( Date.now ( ) / 1000 ) )
                return Decoded;

        return null;
    }

    static writeToken ( Token ) {
        if ( this.decodeToken ( Token ) ) {
            sessionStorage.setItem ( 'auth', Token );
            return sessionStorage.getItem ( 'auth' );
        }

        return null;
    }

    static readToken ( ) {

        return sessionStorage.getItem ( 'auth' );
    }

}

export default Auth;

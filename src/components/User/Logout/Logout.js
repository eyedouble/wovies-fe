import React, { Component } from 'react';
import Auth from './../../../modules/auth/Auth';


class Logout extends Component {

   constructor ( Props ) {
       super ( );
       Auth.logout ( );
       Props.history.push ( '/' );
       window.dispatchEvent ( new CustomEvent ( 'AppSnackbar', {detail:{
           message: 'You have been logged out.'
           ,action: 'ok'
       }} ) );
   }

   render ( ) {
       return (
           <p>Logging out ...</p>
       )
   }
    
}

export default Logout;

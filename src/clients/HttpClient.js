import axios from 'axios';
import Auth from './../modules/auth/Auth';

class HttpClient {

    constructor ( ) {

        let baseURL;
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            baseURL = 'http://localhost:9090/api/';
        } else {
            baseURL = window.location.protocol + '//' + window.location.host + '/api/'; 
        }
        
        const client = axios.create ( {
            baseURL: baseURL
            ,timeout: 6000
        } );        
        
        /* Request interceptor */
        client.interceptors.request.use ( function ( Config ) {
            if ( Auth.isAuthenticated ( ) )
                Config.headers.Authorization =  Auth.readToken ( );

            return Config;
        }, function (error) {           

            return Promise.reject(error);
        } );
        
        /* Response interceptor */
        client.interceptors.response.use ( function ( Response ) {      
            if ( typeof Response.headers.authorization !== 'undefined' )
                Auth.writeToken ( Response.headers.authorization );

            return Response.data;
        }, function ( Error ) {           
            window.dispatchEvent ( new CustomEvent ( 'AppSnackbar', {detail:{
                message:'Network error, your connection may be unstable.'
                ,action:'ok'}
            } ) );

            return Promise.reject ( Error );
        } );

        return client;
    }

}

export default HttpClient;

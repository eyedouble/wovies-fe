import HttpClient from './../../clients/HttpClient';


class WatchLater {
      
    static get ( ) {

        return new Promise ( ( Resolve, Reject ) => {                      
            new HttpClient ( )
            .get ( 'watchlater' )
            .then ( ( Response ) => {                
                if ( Response.ok )        
                    return Resolve ( Response.data.list );
               
                return Reject ( );                    
            } );            
        } );
    }   
      
    static getAggerated ( ) {

        return new Promise ( ( Resolve, Reject ) => {                 
            new HttpClient ( )
            .get ( 'watchlater/aggregated' )
            .then ( ( Response ) => {                
                if ( Response.ok )        
                    return Resolve ( Response.data );
               
                return Reject ( );                    
            } );            
        } );
    }   
 
    static add ( Id ) {

        return new Promise ( ( Resolve, Reject ) => {               
            new HttpClient ( )
            .post ( 'watchlater/' + Id, {} )
            .then ( ( Response ) => {                           
                if ( Response.ok )        
                    return Resolve ( Response.data );
               
                return Reject ( );                    
            } );            
        } );
    } 
    
    static remove ( Id ) {

        return new Promise ( ( Resolve, Reject ) => {                  
            new HttpClient ( )
            .delete ( 'watchlater/' + Id, {} )
            .then ( ( Response ) => {                
                if ( Response.ok )        
                    return Resolve ( Response.data );
               
                return Reject ( );                    
            } );            
        } );
    }   

    static swap ( From, To ) {
        
        return new Promise ( ( Resolve, Reject ) => {                 
            new HttpClient ( )
            .put ( 'watchlater/swap', {
                from: From
                ,to: To
            } )
            .then ( ( Response ) => {                
                if ( Response.ok )        
                    return Resolve ( Response.data );
               
                return Reject ( );                    
            } );            
        } );
    }       

}

export default WatchLater;

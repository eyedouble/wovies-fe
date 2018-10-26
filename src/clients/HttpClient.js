import axios from 'axios';

class HttpClient {

    constructor ( ) {
        return axios.create({
            baseURL: 'https://api.themoviedb.org/3/',
            timeout: 1000,
            // headers: {'X-Custom-Header': 'foobar'}
          });
    }




}

export default HttpClient;
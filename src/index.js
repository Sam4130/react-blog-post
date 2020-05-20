import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// global url
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// token and content type
//axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
//axios.defaults.headers.post['Content-Type'] = 'application/jason';

// how to configure global access and error handling with servers
axios.interceptors.request.use(request =>{
        console.log(request);
        // must always return the request in order not to block it
        return request;

    },// this error will only show up if their is no internet connection or somthing like that
    error => {
        console.log(error);
        return Promise.reject(error);
    });

axios.interceptors.response.use( response =>{
        console.log(response);
        // must always return the request in order not to block it
        return response;

    },// this error will only show up if their is no internet connection or somthing like that
    error => {
        console.log(error);
        return Promise.reject(error);
    });


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();

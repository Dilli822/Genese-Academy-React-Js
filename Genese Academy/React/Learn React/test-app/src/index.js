
// index.js acts as index.html
// here we can even add app.js component
import React from 'react';
import ReactDOM from 'react-dom';
// if export default is not used in app js
// import {App} from './App.js';
import App from './App';
import './App.css';

// let a = <h1> Hello World! </h1>

// write js in any where anyplace inside the component within in curly barcs
// {console.log("wrting the js within the component!")}
// {
//     let a = [1,'2','hari']
//     a.forEach(function(value){
//         console.log(value)
//     });
// }
// ReactDOM.render(a, document.getElementById('root'))

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
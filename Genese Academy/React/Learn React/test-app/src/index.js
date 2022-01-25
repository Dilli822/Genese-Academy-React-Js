
// index.js acts as index.html
// here we can even add app.js component
import React from 'react';
import ReactDOM from 'react-dom';

let a = <h1> Hello World! </h1>

// write js in any where anyplace inside the component within in curly barcs
{console.log("wrting the js within the component!")}
{
    let a = [1,'2','hari']
    a.forEach(function(value){
        console.log(value)
    });
}
ReactDOM.render(a, document.getElementById('root'))
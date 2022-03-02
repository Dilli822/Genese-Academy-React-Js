

// This App js is main component in our react app

import React, { Component } from "react";
import './App.css';
import  Routes from './routes';


export default class App extends Component{
    render() {
        return (
            // accepts inline css too in react
            // we write the css in camelCase in react 
            // <div style={{color: '#ffa07a'}}>
            // <div className="firstDiv" style={{margin: 'auto'}}>
            //     <p style={{fontSize:30, textAlign:'Center', margin:'1rem'}}> This is Class Based Component </p>
            //     <p style={{color: '#000'}}> Check the console.</p>
            //     {console.log("write js inside the component within curly braces!")}
            // // </div>

            // <MyFirstComponent/>
            // </div>

            <div>
                {/* <MyFirstComponent/> */}
                <Routes/>
            </div>
        );
    }
}


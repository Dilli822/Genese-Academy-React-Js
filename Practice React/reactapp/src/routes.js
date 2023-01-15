import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from './home_Component';
import Digital_Clock from './digitalClock';
import Practice from './practice';
import ApiCall from './apiCall/apiCallEg';

class Main_Router extends Component{
    render(){
        return(
            <div>
                <Router>
                    <Routes>
                        <Route path='/' element={ <Home />} exact></Route>
                        <Route path='/clock' element={<Digital_Clock />} exact></Route>
                        <Route path='/practice' element={<Practice />} exact></Route>
                        <Route path='/api-call' element={<ApiCall/>} exact></Route>
                    </Routes>
                </Router>
            </div>
       
        )
    }
}

export default Main_Router;
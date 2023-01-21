import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from './components/home/home_Component';
import Digital_Clock from './digitalClock';
import Practice from './components/react_practices/practice';
import ApiCall from './apiCall/apiCallEg';
import Practice_Routes from './components/react_practices/practice_routes';
import SearchApp from './components/app/searchApp/searchApp';
import Auto_Search from './components/app/searchApp/autoSearch';

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
                        <Route path='/practice-routes' element={<Practice_Routes/>} exact></Route>
                        <Route path='/searchApp' element={<SearchApp/>} exact></Route>
                        <Route path='/autoSearch' element={<Auto_Search/>} exact></Route>
                    </Routes>
                </Router>
            </div>
       
        )
    }
}

export default Main_Router;
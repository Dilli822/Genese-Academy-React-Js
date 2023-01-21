import React,{Component} from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Practice_Home from "./practice_home";
import Practice_Api_Call from "./practice_apiCall";
import Practice_CovidCard from "./Practice_Covid_Card";
import Practice_Props from "./practice_props";
import Practice_State from "./practice_state";
import Practice from "./practice";
import Auto_Search from "../app/searchApp/autoSearch";
import SearchApp from "../app/searchApp/searchApp";
import Practice_Error_Component from "./Practice_Error_Component";
class Practice_Router extends Component{
    render(){
        return(
            <div>
                <Router>
                    <Routes>
                        <Route path='/' element={ <Practice_Home /> } exact></Route>
                        <Route path='/practice-props' element= { <Practice_Props/> } exact></Route>
                        <Route path='/practice-covid-card' element={<Practice_CovidCard/>} exact></Route>
                        <Route path='/practice_Error_Component' element={<Practice_Error_Component/>} exact></Route>
                        <Route path='/practice-api-call' element={<Practice_Api_Call/>} exact></Route>
                        <Route path='/practice-state' element={<Practice_State/>} exact></Route>
                        <Route path='/practice' element={<Practice/>} exact></Route>
                        <Route path='/searchApp' element={<SearchApp/>} exact></Route>
                        <Route path='/autoSearch' element={<Auto_Search/>} exact></Route>
                    </Routes>
                </Router>
            </div>
        )
    }
};
export default Practice_Router;
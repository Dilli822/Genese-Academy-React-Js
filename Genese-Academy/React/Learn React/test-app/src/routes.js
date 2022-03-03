
import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import MyFirstComponent from './component/MyFirstComponent';
import MySecondComponent from './component/MySecondComponent';
import MyThirdComponent from './component/MyThirdComponent';
import DigitalClock from './digitalClock';
import ApiCall from './apiCall';
import CovidCard from './component/covidCard';


export default class Routes extends Component {
    render() {
        return (
        <div>
        <Router>
            <Switch>
                <Route path="/" exact>
                    <MyFirstComponent />
                </Route>

                {/* Second Routing */}
                {/* exact instruct exact path with exact link name/url */}
                <Router path="/MySecondComponent" exact>
                    <MySecondComponent/>
                </Router>

                <Router path="/MyThirdComponent" exact>
                    <MyThirdComponent/>
                </Router>

                {/* Digital Clock */}
                <Router path="/digitalClock" exact>
                    <DigitalClock />
                </Router>

                {/* ApiCall Route */}
                <Router path="/api-Call" exact>
                    <ApiCall />
                </Router>



          </Switch>
        </Router>
        </div>
        );
    }
}

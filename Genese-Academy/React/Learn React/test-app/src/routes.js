
import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import MyFirstComponent from './component/MyFirstComponent';
import MySecondComponent from './component/MySecondComponent';



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
          </Switch>
        </Router>
        </div>
        );
    }
}

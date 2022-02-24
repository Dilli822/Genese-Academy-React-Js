
import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import MyFirstComponent from './component/MyFirstComponent';
import MySecondComponent from './component/MySecondComponent';



class Routes extends Component {
    render() {
        return (
        <div>
        <Router>
            <Switch>
                <Route path="/" exact>
                    <MySecondComponent />
                </Route>

                {/* Second Routing */}
                <Router path="/secondComponent" exact>
                    <MyFirstComponent/>
                </Router>
          </Switch>
        </Router>
        </div>
        );
    }
}

export default Routes;

import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  
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
          </Switch>
        </Router>
        </div>
        );
    }
}

export default Routes;
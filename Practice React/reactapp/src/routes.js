import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import weatherHome from "./weatherInfo/weatherHome";

class Routes extends Component{
    render(){
        return(
            <div>
                <Router>
                    <switch>
                    <Route path="/weatherApp" exact>
                        <weatherHome/>
                    </Route>
                    </switch>

                </Router>
            </div>
        )
    }
}

export default Routes;
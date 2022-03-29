
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
import MaterialHome from './material-example/material-home';
import MaterialTab from './material-example/material-tab';
import WeatherHome from './weatherInfo/WeatherHome';
import MyFirstHook from './react-hook/firstHook';
import PrevState from './component/prevState';
import MyThirdHook from './react-hook/thirdHook';
import UserProfile from './react-hook/userProfile';
import EffectHookExample from './react-hook/effectHook';
import TimerApp from './timerApp/timerApp';
import ApiCallExampleHook from './react-hook/api-call-eg-in-reactHook';

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
                <Route path="/MySecondComponent" exact>
                    <MySecondComponent/>
                </Route>

                <Route path="/MyThirdComponent" exact>
                    <MyThirdComponent/>
                </Route>

                {/* Digital Clock */}
                <Route path="/digitalClock" exact>
                    <DigitalClock />
                </Route>

                {/* ApiCall Route */}
                <Route path="/api-Call" exact>
                    <ApiCall />
                </Route>

                {/* dynamic Route  with any id --numbers, strings and its value */}
                <Route path="/dynamicRoute/:id/:value" exact>
                    <MySecondComponent />
                </Route>

                {/* Route for Simple Material UI example */}
                <Route path="/mui" exact>
                    <MaterialHome />
                </Route>


                {/* TabUI Route */}
                <Route path="/tabUI" exact>
                    <MaterialTab />
                </Route>


                {/* Weather App */}
                <Route path="/weatherApi" exact>
                    <WeatherHome/>
                </Route>

                {/* fIRST REACT HOOK ROUTING */}
                <Route path="/firstHook" exact>
                    <MyFirstHook />
                </Route>

                {/* PrevState Example */}
                <Route path="/prevState" exact>
                    <PrevState />
                </Route>


                {/* Example of reacthook based function component passing and getting props
                <Route path = "/hookProps" exact>
                    <secondHook />
                </Route> */}

                {/* react third hook routing */}
                <Route path="/thirdHook" exact>
                    <MyThirdHook />
                </Route>
                
                {/* react third hook routing */}
                <Route path="/inc/:id" exact>
                    <MyThirdHook />
                </Route>

                {/* react third hook routing */}
                <Route path="/thirdHook/t/edit/:id" exact>
                    <MyThirdHook />
                </Route>

                {/* React UserProfile */}
                <Route path="/userProfile" exact>
                    <UserProfile />
                </Route>

                {/* effectHook Example */}
                <Route path="/effectHook" exact>
                    <EffectHookExample />
                </Route>


                {/* Routes for TimerApp */}
                <Route path="/timerApp" exact>
                    <TimerApp />
                </Route>


                {/* Hook Api Call Example */}
                <Route path="/hook-api-call" exact>
                    <ApiCallExampleHook />
                </Route>

          </Switch>
        </Router>
        </div>
        );
    }
}

import React, { Component } from "react";
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div>
                <h5>Routes</h5>
                home component
                <div>
                    <h5>Changing Route with Button</h5>
                    <p>We use Link of react router dom to point the routing</p>
                    <p>This is direct link</p>
                    <Link to={'/clock'}>  <button>Go to the digitalClock</button> </Link>

                    <p>routing with path search hash and state value</p>
                    <Link to={{
                        pathname: "/clock",
                        search: "?sort=name",
                        hash: "#the-hash",
                        state:{dashboard: true},

                    }}> 
                    <button>Digital Clock</button>
                    </Link>

                    <p>APICALL EXAMPLE</p>
                    <Link to={'/api-call'}> <button> Go to the Api Call Example </button> </Link>
                  
                   
                </div>
            </div>
        )
    }
}
export default Home;
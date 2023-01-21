import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component{
    render(){
        return(
            <div className="home container">
                <div className="home wrapper"> 
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
                        <Link to={'/practice-routes'}><button>Go to practice routes</button></Link>
                      <h5>
                        <button onClick={()=> this.props.history.push('/clock')}>Go to digitalClock programmatically</button>
                      </h5>

                      <Link to={'/searchApp'}>  <button>Auto search app</button> </Link>
                      <Link to={'/autoSearch'}>     <button>Static Search app</button></Link>
                    
                 
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Home;

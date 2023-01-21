import React,{Component} from "react";
import Practice_Router from "./practice_routes";
import {Link} from "react-router-dom";

class Practice_Home extends Component{
    render(){
        return (
            <div>
                <div>
                    <h2>Welcome to Practice Home Component</h2>
                </div>

                <Link to='/practice-props'><button>Go to PRACTICE PROPS</button></Link> <br></br>
                <Link to='/practice-state'><button>Go to Practice State</button></Link> <br></br>
                <Link to='/practice-api-call'><button>Go To  api call example</button></Link>
                <Link to='/practice-covid-card'><button>Go to practice. covid card</button></Link>
                <Link to='/practice'><button>Practice</button></Link>
                <Link to={'/searchApp'}>  <button>Auto search app</button> </Link>
                <Link to={'/autoSearch'}>     <button>Static Search app</button></Link>
            </div>
        )
    }
};
export default Practice_Home;
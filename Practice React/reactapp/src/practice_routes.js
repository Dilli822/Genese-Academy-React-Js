import React, {Component} from "react";
import { Route } from "react-router-dom";

class Pracice_Routes{
    render(){
        return(
            <div>
                <div>
                    <h5>Practice routes</h5>
                </div>
                {/* <!----- ROUTE IS PACAKGE COMPONENT ITSELF ----> */}
                <Route>
                    {/* SWITCH ITSELF SWITCH THE REQUIRED REQUESTED ROUTES ON CLIENT SIDE */}
                    <Switch>
                        <Route path="/" exact>
                            
                        </Route>
                    </Switch>
                </Route>
            </div>
        )
    }
};
export default Pracice_Routes;
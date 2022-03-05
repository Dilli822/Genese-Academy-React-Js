
import React, { Component } from "react";


export default class ErrorComponent extends Component {
    render(){
        return(
            <div>
                <h3> Something Went Wrong!</h3>
                {/* passing functional props */}
                <button onClick={()=> this.props.onRetry()}>Retry</button>
            </div>
        );
    };
};
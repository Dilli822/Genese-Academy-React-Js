import React, {Component} from "react";

class Error_Component extends Component{
    render(){
        return(
            <div>
                <div>
                    <h1>Error something went wrong</h1>
                    <button onClick={()=>this.props.onRetry()}>Retry</button>
                </div> 
            </div>
        )
    }
};
export default Error_Component;
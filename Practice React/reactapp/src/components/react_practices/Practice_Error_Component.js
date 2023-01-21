import React, {Component} from "react";

class Practice_Error_Component extends Component{
    render() {
        return(
            <div>
                <h2>Error!something went wrong</h2>
                <button onClick={()=> this.props.apiErrorHandle()}>retry</button>
            </div>
        )
    }
};
export default Practice_Error_Component;
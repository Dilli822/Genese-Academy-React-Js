import React, {Component} from "react";

class PropExample extends Component{
    render(){
        return(
            <div>
                <div> state value is sent into here from statePropsExample component to propsExample Component. </div>
                <div> props username: <span style={{color: "green"}}> {this.props.username} </span> </div>
            </div>
        )
    }
}
export default PropExample;
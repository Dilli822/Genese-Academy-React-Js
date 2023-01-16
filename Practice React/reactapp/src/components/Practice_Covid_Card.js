import React,{Component} from "react";
import Practice_ApiCall from "../practice_apiCall";

class Practice_Covid_Card extends Component{
    render(){
        return(
            <div>
                <div>
                    {this.props.data.country}
                </div>
            </div>
        )
    }
};

export default Practice_Covid_Card;
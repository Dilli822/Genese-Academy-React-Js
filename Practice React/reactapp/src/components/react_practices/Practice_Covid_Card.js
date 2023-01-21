import React,{Component} from "react";
import Practice_Api_Call from "./practice_apiCall";

class Practice_CovidCard extends Component{
    render(){
        let items = this.props.data;
        return(
            <div>
                <div>
                    {items.country}
                </div>
            </div>
        )
    }
};

export default Practice_CovidCard;
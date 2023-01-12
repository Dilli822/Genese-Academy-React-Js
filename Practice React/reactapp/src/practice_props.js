import React,{Component} from "react";


class Props_Practice extends Component{
    render(){
        return(
            <div>
           
            {this.props.customerName}
            {this.props.address}
        </div>
        )
    }
};

export default Props_Practice;
import React,{Component} from "react";


class Props_Practice extends Component{
    render(){
        return(
            <div>
           
            {this.props.username}
            {this.props.address}
            {this.props.phoneNumber}
            <div> <h4> Getting Function from parent to Child</h4> </div>
            {this.props.callFromParent}
            <br></br>
            <div> <h4> Getting Parent function value here </h4></div>
            {this.props.gettingValueFromChildComp}

            <div>
                <h5>Practice props</h5>
                practice username: {this.props.username}
                function practice as props: {this.props.parentFunc}
                passing value to parent {this.props.childFunc}
            </div>
        </div>
        )
    }
};

export default Props_Practice;
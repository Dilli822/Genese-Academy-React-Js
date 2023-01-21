import React, {Component} from "react";

class Practice_Props extends Component{
    render(){
        let items = this.props.data;
        return(
            <div>
                <div>
                    <h3>Practice Props</h3>
                    <p>Getting state here as props since props value doesnot change but state value changes</p>
                    username props: {this.props.username} <br></br>
                    address props: {this.props.address} <br></br>
                    <h5>Getting parent function here as child .This is from another component</h5>
                    {this.parenFunc}
                    {this.childFunc}

                    {this.childVal}

                    <div>

                    
                          
                    </div>
                   
                </div>
            </div>
        )
    }
};
export default Practice_Props;
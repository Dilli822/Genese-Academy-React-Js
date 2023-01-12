import React , {Component} from "react";
import Props_Practice from "./practice_props";

class Practice_State extends Component{

    // state
    constructor(props){
        super(props);
        this.state = {
            customerName: "",
            address: "",
        }
    }

    // arrow functions here itself bind with constructor and state
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
        return(
            <div>
                <input type="text" name="customerName" onChange={this.handleChange}></input>
                <input type="text" name="address" onChange={this.handleChange}></input>
                customerName{this.state.customerName} <br></br>
                address{this.state.address}
                <Props_Practice customerName={this.state.customerName} address={this.state.address}/>
                
            </div>
        )
    }
}
export default Practice_State;
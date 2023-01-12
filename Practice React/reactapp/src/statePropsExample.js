
// import React , {Component} from "react";


// // state is used to handle the data works in react
// // how to present and handle data for component or it is used to pass the data to the components
// // lesser the state better the application , one state can be reused for many common components
// // it is declared with class constructor
// class State_Props_Route_Example extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             username: "",
//             address: "",
//         };
//     }


//     // arrow functions here also bind the constructor data
//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     };

//     render(){    
//         return(
//             <div>

//                 <input type="text" name="username" onChange={this.handleChange}></input> <br></br>
//                 <input type="text" name="address" onChange={this.handleChange}></input> <br>
//                 </br>
//                 username: {this.state.username} <br></br>
//                 address: {this.state.address}
//             </div>
//         )
//     }

// }

// export default State_Props_Route_Example;

// state in react is used to handle data changes or flow of data or passing of data
// less state better the app works

// state is one of the feature of react that can hold/store the value of class (or variable)
// state value can be changed with the setState 

import React , {Component} from "react";
import PropExample from "./propsExample";
class StatePropsEx extends Component{
    // state is defined in constructor
    constructor(props){
        super(props);
        this.state = {
            username: "",
            address: "",
        }
    }

    // making state without using constructor
    state = {
        studentName: "",
        phoneNumber: "",
    }



    // props and state main difference is that props are immutable whose value cannot be changed
    // for example in state we pass data that passed data is hold into state but sent/passed to component as props whose value cannot be changed


    // function defined here
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        },
        this.setState({
            studentName: "Dilli Hang Rai"
        })
    )
    }
    render(){
        return(
            <div>
             <input type="text" name="username" onChange={this.handleChange} placeholder="Enter your username"></input> <br></br>
             <input type="text" name="address" onChange={this.handleChange} placeholder="Enter your address" style={{color: "red"}}></input>  <br></br>
             username: {this.state.username} <br></br>
             address: {this.state.address}
          

             {/* passing values as props to anothercomponent  */}
            <PropExample username={this.state.username} address={this.state.address} />

            </div>
        )
    }
}

export default StatePropsEx;

import React, {Component} from 'react';


export default class MySecondComponent extends Component{
    render(){
        return(
            // always store the component inside the div
            <div>
            
            This is Second Component! We are receiving the component 1 data with the props 
            Once props is declared cannot be changed .But here our state is changed everytime
            it is typed inside the field input type. so our props is bringing the new data each time the state 
            gets changed! <br></br>
            <div style={{"color": "black", "backgroundColor": "#fff"}}>
            <p> UserName SetState Changes dynamically typed from component 1:  
            {this.props.userName}  </p>
            <p>  Address is : {this.props.address}  </p>
            <p> Phone Number is : {this.props.phoneNumber} </p>
            <p> Age is {this.props.age} </p>
            </div> 
            </div>
           
        )
    }
}



import React, {Component} from 'react';
// import Link
import { Link } from "react-router-dom";
import {withRouter} from "react-router-dom";

 class MySecondComponent extends Component{

    // constructor here
    constructor(props){
        super(props);
        console.log(this.props);
    }

    // our exact isFalse 
    render(){
        return(
            // always store the component inside the div
            <div>

            <div > This is Dynamic Route Given Id: 
                <span style={{color: "red" }}>
                { this.props.match.params.id} </span> </div>
                
            <div> This is Dynamic Route Given Value: 
            <span style={{color: "red" }}>
                {this.props.match.params.value} </span></div>


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

            {/* button for calling the function which is passed as props here from myfirstComponent */}
            {/* <button onClick={()=>this.props.clickFunction('dilli')}>ALERT</button> */}
            <button onClick = { () => this.props.clickFunction('dummy username')}>alert</button>
            </div> 
            
            {/* Link with route name without reloading the page */}
            <Link to={'/'}><button> GO TO FIRST COMPONENT WITHOUT RELOADING </button></Link>
          
            </div>
            
           
        )
    }
}

export default withRouter (MySecondComponent);


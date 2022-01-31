
import React, {Component} from 'react';
// import MySecondComponent from './MySecondComponent'
// import MyThirdComponent from './MyThirdComponent';



export default class MyFirstComponent extends Component{
    // we write the constructor here

    constructor(props){
        super(props)
        this.state={
            username: "",
            age: 21,
        };
        // we need to bind the handleChange event with function handleChange
        // this.handleChange.bind = this.handleChange();
    }

    // handleChange(){ or make it arrow function
        handleChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    render() {
        return (
            <div class="firstDiv">
                {/* This is my First Component!
                <MySecondComponent/>
                <MyThirdComponent/> */}
                {/* // state is like container where we store data and everytime state changes components will rendered */}
             
             {/* {this.state.username}
             {this.state.age} */}
             {/* let's make an input field with onChange event showing the name of type
             users name */}
             <input type="text" onChange={this.handleChange} placeholder='Enter your Name'/>
             <p> {this.state.username} </p> 

            </div>
        )
    }
}

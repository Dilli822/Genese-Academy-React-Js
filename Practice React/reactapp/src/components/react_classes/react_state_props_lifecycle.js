import React, {Component} from "react";
import Props_Practice from "../react_practices/practice_props";

class React_State_Props extends Component{
    // we call constructor with state always here
    constructor(props){
        super(props);
        this.state = {
            username: "",
            address: "",
            phoneNumber: "",
            dummy: "dummy",
            age: 23,

            date: new Date()
        }
    }


    // setting state with handlechange arrow function that binds the above function
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    // digital clock
    // React component life cycles 
    // componentdid is just as windows.onload
    componentDidMount(){
        console.log("Component Did Mount");
        let self = this;
        this.timer = setInterval(() => {
            self.setState({
                date: new Date()
            })
        }, 1000);
    }

    componentWillUnmount(){
        console.log("Component Unmount");
        // component will unmount gets called at the end of the state ending
        // it is important to clear the timer when class ends it is important to clear the timer and again component lifeycle repeats
        clearInterval(this.timer);
    }

    // timer always return something
    clearTimer=()=>{
        clearInterval(this.timer);
        alert("Clock Timer is Cleared or Clock is stopped")
    }

    // passing function to child component frmo parent
    callFromParent = () => {
        console.log("Hello I am Parent Component Function !")
    }

    // getting child data to parent as username
    gettingValueFromChildComp =(username)=>{
        console.log("Hello this is name form child " + username);
    }

  
    render(){
        return(
            <div>
                <div><h4>This is practice Component!</h4></div>
                <div>
                    <span>Static Data</span> <br></br>
                    {this.state.dummy} <br></br>
                    {this.state.age}
                </div>

                <div>
                    <h3>This is dynamic state example</h3>
                    <input type="text" name="username" onChange={this.handleChange} placeholder="Enter your name"></input>
                    <input type="text" name="address" onChange={this.handleChange} placeholder="Enter your address"></input>
                    <input type="number" name="phoneNumber" onChange={this.handleChange} placeholder="Enter your phonenumber"></input>
                </div>
                <div>
                    username: {this.state.username} <br></br>
                    address: {this.state.address}<br></br>
                    phoneNumber: {this.state.phoneNumber}<br></br>
                </div>

                <div> Digital Clock with componentDidMount</div>
                <div>
                    <h3>This is Digital Clock</h3>
                    {this.state.date.getHours()-12}:
                    {this.state.date.getMinutes()}:
                    {this.state.date.getSeconds()}
                </div>
                
                <div>
                    <h5> Clear Timer </h5>
                    <div>
                        <button onClick={this.clearTimer}>Clear Timer / Stop the Clock</button>
                    </div>
                </div>

                <div>
                    <Props_Practice username={this.state.username} 
                    address={this.state.address} 
                    phoneNumber={this.state.phoneNumber} 
                    callFromParent={this.callFromParent()}
                    gettingValueFromChildComp={this.gettingValueFromChildComp("dilli hang")}>
                    </Props_Practice>
                </div>
            </div>
        )
    }
};

export default React_State_Props;
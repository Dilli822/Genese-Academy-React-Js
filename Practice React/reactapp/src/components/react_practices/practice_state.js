import React, {Component} from "react";
import Practice_Props from "./practice_props";

class Practice_State extends Component{
    // creating state with using constructor
    constructor(props){
        super(props);
        this.state = {
            username: "",
            address: "",
            date: new Date(),
        }
    };

    // component overriding to mount the handlechange
    componentDidMount(){
        console.log("component did mount");
        let self = this;
        this.timer = setInterval(()=>{
            self.setState({
                date: new Date(),
            })
        }, 1000)
    };

    // clearing the time interval
    componentWillUnmount(){
        console.log("component is unmounting");
        clearInterval(this.timer);
    };

    // handleChange 
    handleChange = (event) => {
        let self = this;
        self.setState({
            [event.target.name]: event.target.value
        })
    };

    // parent function passing to child
    parenFunc = () => {
        console.log("hello to child component from parent component as parent function");
    }

    childFunc = (childVal) => {
        console.log(childVal);
    };

    // digital clock to stop the timer
    clearTimer = () => {
        clearInterval(this.timer);
    };
    

    render(){
        return(
            <div>
                <div>
                    <h4>Practice State</h4>
                </div>

                <div>
                    <h4>This is dynamic state</h4>
                    <input type="text" onChange={this.handleChange} placeholder="enter your name" name="username"/>
                    <input type="text" onChange={this.handleChange} placeholder="Enter your address" name="address" />
                    <br></br>
                    username: {this.state.username} <br></br>
                    address: {this.state.address} <br></br>
                </div>

                <div>
                    <h4>Digital Clock with component did mount using settime setInterval </h4>
                    {this.state.date.getHours()}:
                    {this.state.date.getMinutes()} :
                    {this.state.date.getSeconds()} 
                </div>

                <div>
                    <h4>Component did unmount example using clear interval</h4>
                    <button onClick={this.clearTimer}>Clear interval or stop the watch</button>
                </div>

                <div>
                    <h3>Passing State as props to another component</h3>
                    <Practice_Props username={this.state.username} address={this.state.address}  parenFunc ={this.parenFunc()} childFunc ={this.childFunc("sdfsdfs")}/>
                </div>
            </div>
        )
    }
};
export default Practice_State;
import React,{Component} from "react";
import Props_Practice from "./practice_props";

class Practice extends Component{
    // constructor with state 
    constructor(props){
        super(props);
        this.state = {
            username: "",
            address: "",
            date: new Date(),
            customerName: "dilli hang ra",
        }
    };

    // setting state with handleChange arrow function that binds with above state and class
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    // component overriding with component did mount which works just as windows.onload function in vanilla js
    componentDidMount () {
        let self = this;
        console.log("Component Did Mount gets called when component get rendered");
        this.timer = setInterval(function(){
            self.setState({
                date: new Date(),
            })
        },1000)
    };


    // component did unmount gets called when component or view going to get terminated
    componentWillUnmount () {
        console.log("COmponent is unmounting ");
        clearInterval(this.timer);
    }

    // demonstarting with button clicking action
    clearTimer = () => {
        clearInterval(this.timer);
    }

    // definining parent function here
    parentFun = () =>{
        console.log("hello from parent func");
        console.log("hello from parent func rendering in child component as props")
    }

    passValueFunc = (childValue) => {
        console.log("recieveing value is " + childValue)
    };


    // render method 
    render(){
        return(
            <div>

                <div>
                    <h4>Practice Component</h4>
                </div>

                <div>

                    <div>
                        Static State component <br></br>
                        username static: {this.state.customerName}
                    </div>

                    <div>
                        <h5>Dynamic State Values examples</h5>
                        <input type="text" name="username" onChange={this.handleChange}></input> <br></br>
                        <input type="text" name="address" onChange={this.handleChange}></input> <br></br>
                        username: {this.state.username} <br></br>
                        address: {this.state.address} <br></br>
                    </div>

                    <div>
                        <h5>GLIMPSE OF REACT LIFE CYCLE COMPONENT COMPONENT DID MOUNT AND WILL UNMOUNT</h5>
                        <div>
                            <h6>Digital Clock</h6>
                            {this.state.date.getHours()}:
                            {this.state.date.getMinutes()}:
                            {this.state.date.getSeconds()}
                        </div>

                        <div>
                            <h5>EXAMPLE OF CLEAR INETERVAL OR COMPONENT UNMOUNT</h5>
                            <button onClick={this.clearTimer}>Clear Interval or stop the clock</button>
                        </div>
                    </div>

                </div>
                


                <div>
                    <h6>Passing State as props to another component</h6>
                    we can also pass function to child component from parent component

                    <Props_Practice customerName={this.state.customerName} parentFun={this.parentFun} passValueFunc={this.passValueFunc("m12")}></Props_Practice>
                </div>

            </div>
        )
    }
};

export default Practice;
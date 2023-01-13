import React,{Component} from "react";
import Props_Practice from "./practice_props";


class Practice extends Component{
    // state is created with constructor 
    constructor(props){
        super(props);
        this.state = {
            username: "",
            address: "",
            date: new Date()
        }
    };

    // setting state here with arrow function which binds the data with above class
    handleChange = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    // components in react overriding it works same as windows.onload
    componentDidMount(){
        console.log("componend did mount is here!");
        let self = this;
        this.timer = setInterval(()=>{
            self.setState({
                date: new Date()
            })
        },1000)
    }

    // component unmount gets called before ending the react component lifecycle
    componentWillUnmount(){
        console.log("Component unmount is here!");
        clearInterval(this.timer);
    }

    // buttons showing the clear interval
    clearTimer=()=>{
        clearInterval(this.timer);
        console.log("clearing the timer as it returns unwanted something data !");
    }


    // pracfunc passing to child from parent component
    parentFunc=()=> {
        alert("parent function");
    }

    //vetting value from child
    childFunc=()=> {
        alert("getting value from child component");
    }

    

    // render method
    render(){
        return(
            <div>
                <div><h5>Practice Component</h5></div>

                <div>
                    <h5>state in react is feature of class component which holds the value or data that is dynamic</h5>
                    <p>Example of static state </p>
                    {this.state.pi}
                </div>

                <div>
                    <h3>Example of dynamic state</h3>
                    <input type="text" name="username" onChange={this.handleChange}></input>
                    username:{this.state.username}
                </div>

                <div>
                    <h4>Component did mount example with clock</h4>
                    
                    {this.state.date.getHours()}h:
                    {this.state.date.getMinutes()}m:
                    {this.state.date.getSeconds()}s
                </div>

                <div>
                    <h5>Example of Component UNmount</h5>
                    <button onClick={this.clearTimer}>Clear Timer or Stop</button>
                </div>

                <div>
                    <h5>Passing function as props to another component</h5>
                    <Props_Practice childFunc = {this.childFunc("child value to parent")} parentFunc = {this.parentFunc()} username = {this.state.username}/>
                </div>
            </div>
        )
    }
};

export default Practice;
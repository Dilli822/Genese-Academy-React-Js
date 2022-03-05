
import React, {Component} from 'react';
import MySecondComponent from './MySecondComponent'
import { Link } from 'react-router-dom';
// import MyThirdComponent from './MyThirdComponent';
import {withRouter} from "react-router-dom";


class MyFirstComponent extends Component{
    // we write the constructor here

    constructor(props){
        super(props)
        // here this is scope of MyFirstComponent 
        // we keep the state key value pair here
        this.state = {
            // name of state: "value"
            // these username address .. are also variabkes of state
            // 
            username: "",
            address: "",
            phoneNumber: "",
            age: "",
        };
        // we need to bind the handleChange event with function handleChange
        // this.handleChange.bind = this.handleChange();

        // binding the function here will not require the arrow function
        // this.handleChange = this.handleChange.bind(this);
        // this is scope indication to certain class
        // we need to bind the this with .bind method or directly use the  arrow function
        // state in react  It may also define that the state of component holds information which changes over the lifetime of the component.
        
    }

    // handleChange(event){ 
        // or make it arrow function
        handleChange = (event) => {
        // let's console it 
        console.log(event.target.name);
        console.log(event.target.value);

        // we change the state here 
        this.setState({
            // setState return or render the value typed in input 
            // username: event.target.value,
            // address: event.target.value,
            // TARGET.NAME is setname and .value is it's value 
            // so with event.target.name we can use single function for multiple purposes
            // event, target , .value() method , receives the value that is typed in the input field
            [event.target.name]: event.target.value
        });
    }

    // this handleChange1 is actually another function which handle the address 
    // change name but this will be very bad practice and not proper way to do
    // handleChange1 = (event) => {
    //     this.setState({
    //         address: event.target.value
    //     });
    // }  
    
    // Parent Function which will be called
    // we have also took name from secondCOmponent and used here as para argument in alert function
    // so here param is name 
    callingParentFunction = (name) => {
        alert('Hello ' + name);
        // alert('Hello this is Parent Function being called by child passed as props!THIS IS NOT STATE IT IS FUNCTION ITSELF WHICH IS PASSED AS PROPS------')
        console.log('hello testing');
    }

   
    render() {
        return (
            <div className='firstDiv'>
                {/* This is my First Component!
                <MySecondComponent/>
                <MyThirdComponent/> */}
                {/* // state is like container where we store data and everytime state changes components will rendered */}
             <h3> This is first component !</h3>
             {/* {this.state.username}
             {this.state.age} */}
             {/* let's make an input field with onChange event showing the name of type
             users name */}
             <input type="text" name="username" onChange={this.handleChange} placeholder='Enter your Name Here'/> <br></br> 
             {/* <input type="text" name="address" onChange={this.handleChange1} placeholder='Enter your address' /> */}
             <input type="text" name="address" onChange={this.handleChange} placeholder='Enter your Address here '/> <br></br>
             <input type="number" min="0" name="phoneNumber" onChange={this.handleChange} placeholder='Enter your Number Here '/> <br></br>
             <input type="number" min="0" name="age" onChange={this.handleChange} placeholder="Enter your age in year" /> <br></br>
             <p> Username: {this.state.username} </p> 
             <p> Address: {this.state.address} </p>
             <p> Your Phone Number: {this.state.phoneNumber} </p>
             <p> Your age is: {this.state.age} </p>

             {/* props is used to send the data from one component to another component */}
             {/* the main difference between props and state is that props are immutable theis why the container
             should define the state that can be updated and changed, while the child components should only pass data from
             the state using props. Once props is declared it cannot be changed 
             if any component receives the data or value then it is sent with props form to pass
             data from one component to another props is used */}

             <div className="secondComponent">
                 <MySecondComponent
                  userName={this.state.username}
                  // we can also send many other props
                //   declaring the state props here 
                  address = {this.state.address}
                  age = {this.state.age}
                  phoneNumber = {this.state.phoneNumber}
                //   function itself is passed as props to secondComponent
                clickFunction =  {this.callingParentFunction}
                 />

             </div>

             <Link to = {{
                //  '/MySecondComponent'
                pathname: "/MySecondComponent",
                search: "?sort=name",
                hash: "#the-hash-example",
                state: { fromDashboard: true }
                }}> 
                {/* // Now link will be http://localhost:3000/MySecondComponen?sort=name#the-hash-example */}
                <button> Go to Second Component</button></Link> <br/><br/>
                <Link to={{pathname: "/MyThirdComponent" }}> 
                <button>Go To Third Component</button></Link> <br/> <br/>
{/* 
                <Link to = {{pathname: '/digitalClock'} 
                    // we can even send the data with this method of programtical routing
                    <button> Try Digital Clock </button> 
                </Link> &nbsp; &nbsp; */}

                <Link to = {{ pathname: '/api-Call' }}>
                    <button> ApiCall </button>
                </Link>

                {/* Change Route with Programmatically */}
                {/* to use the programmatically route with history.push
                we must send the component withRouter () 
                the main advantage of programmatical route is that we can make 'routing 
                anywhere on our component unlike the pathname routing */}
                <button onClick={
                    ()=> this.props.history.push('/digitalClock',

                    // we can even send the data with this method of programtical routing
                    {name: this.state.username}
                )
                }
               >
                Change Route Programmatically</button>

                {/* <Link to = {{ pathname: '/dynamicRoute'}}> */}
                <button onClick={
                    ()=> this.props.history.push ('/dynamicRoute/book/45')
                }>Dynamic Route</button>
                {/* </Link> */}



            </div>
        )
    }
}

export default withRouter (MyFirstComponent);

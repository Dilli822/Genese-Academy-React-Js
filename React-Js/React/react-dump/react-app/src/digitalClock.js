import React, {Component} from 'react';
import {withRouter} from "react-router-dom";

class DigitalClock extends Component {

    constructor(props){
        super(props);
    // Maintaining Dynamic State Here
    this.state = {
        date: new Date()
       }
    }


    // let's call the state dynamically
    componentDidMount(){
        console.log(this.props)
        // here self = this is this for outer component but not setInterval's This
        let self = this;
        this.state.timer = setInterval(function(){
            // if we have wrote the this here down then this will be this for function setInteval
            // as this is scope of setInterval function 
            // so self this is this for setState outerstate
            self.setState({
                date: new Date()
            })
        }, 1000)
        console.log(this.state.timer)
    }

    // timer state will be unmounted here with componentwillUnmount
    componentWillUnmount(){
        clearInterval(this.timer)
    }

    // example of Unmounting state woth clearTimer()
    clearTimer=()=> {
        clearInterval(this.state.timer)
    };

    render() {
        return (
            <div>
                <div> <h3> This is Digital ClocK! </h3> 
                <p style={{border: "1px solid red"}}> 
                This is passed/exchange data from MyFirstComponent with the help of withRouter --
                <span style={{color: "green"}}>
                {this.props.location.state.name} </span>
                </p>
                </div>
                <div style={{display: 'flex', color: 'red', fontWeight: 'bold', fontSize: 35, border: '1px solid brown', width: '100%'}}>
                    <div style={{padding: 20, border: '1px solid brown', width: '100%'}}>{this.state.date.getHours()}Hr</div>
                    <div style={{padding: 20, border: '1px solid brown', width: '100%'}}>{this.state.date.getMinutes()}Min</div>
                    <div style={{padding: 20, border: '1px solid brown', width: '100%'}}>{this.state.date.getSeconds()}s</div>
                </div>
                <button onClick={this.clearTimer}>Clear/Stop the Timer</button> &nbsp;
            </div>
        )
    }
}

export default withRouter (DigitalClock);
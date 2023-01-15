import React, {Component} from "react";

class Digital_Clock extends Component{

    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    };

    componentDidMount(){
        let self = this;
        this.state.timer = setInterval(function(){
            self.setState({
                date: new Date()
            })
        }, 1000)

    }

    render(){
        const d = new Date();
        let hour = d.getHours();
        if(hour > 12){
              var t = hour - 12;
              var ante_meridian = "PM";
              console.log(t);
        }else{
            var t = hour;
            var ante_meridian = "AM";
            console.log(t);
        }

        return(
            <div>
                <h5>Digital Clock</h5>
                <p>we have used componentDidMount with using state and setstate. here setstate is wrapped with setinterval function which will
                    call the componentDidMount at every 1000 second that means component lifecycle ends every at 1 getSeconds
                    callback function gets called at the end of the program in a general .
                codelevel:
                In this code, state.timer is a variable that is being used to store a reference to the interval timer that is created using setInterval.
                setInterval is a JavaScript function that takes two arguments: a callback function and a delay in milliseconds. It returns a unique timer ID that can be used to stop the timer using clearInterval(timer).
                The state.timer variable is being set to the return value of setInterval, which is the timer ID. This ID can be used to stop the interval later on by calling clearInterval(this.state.timer).
                </p>
                <div style={{position:"relative"}}> 
                <div style={{display: "flex", fontSize: "35px",position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)"}}>
                    <div style={{padding: "0.0005rem" }}>{t}:</div>
                    <div style={{padding: ".0005rem" }}>{this.state.date.getMinutes()}:</div>
                    <div style={{padding: ".0005rem" }}>{this.state.date.getSeconds()}:</div>
                    <div style={{padding: ".0005rem" }}>{ante_meridian}</div>
                    </div>
                </div>
            </div>
        )
    }

};

export default Digital_Clock;
import React, {Component} from 'react';


export default class DigitalClock extends Component {

    constructor(props){
        super(props);
    // Maintaining Dynamic State Here
    this.state = {
        date: new Date()
       }
    }


    // let's call the state dynamically
    componentDidMount(){
        // here self = this is this for outer component but not setInterval's This
        let self = this;
        this.state.timer = setInterval(function(){
            self.setState({
                date: new Date()
            })
        })
    }

    render() {
        return (
            <div>
                <div style={{display: 'flex', color: 'red'}}>
                    <div style={{padding: 20}}>{this.state.date.getHours()}</div>
                    <div style={{padding: 20}}>{this.state.date.getMinutes()}</div>
                    <div style={{padding: 20}}>{this.state.date.getSeconds()}</div>
                </div>
                <div>This is Digital CLOCK!</div>

            </div>
        )
    }
}
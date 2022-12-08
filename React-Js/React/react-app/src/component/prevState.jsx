
import React, {Component} from 'react';


export default class PrevState extends Component {

    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }

    handleIncrement = () => {
        // ***** WITHOUT PREVSTATE 
        // this.setState({
        //     counter: this.state.counter+1
        // })

        // *** WITH PREV STATE 
        // prevstate always return the initial value of key pair in state
        this.setState(prevState=> ({
        counter: prevState.counter+1
        }));
    }
    render () {
        return(
            <div>
                <h2> This is an example of Prev State! </h2>
                <p> Counter Value is : {this.state.counter} </p>
                <button onClick={()=> this.handleIncrement()}> Increment </button>
            </div>
        )
    }
}
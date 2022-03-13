
import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField/TextField";


class FormExample extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render(){
        return (
            <div>
                <label> THis is label Click under below: </label> < br/>
                <TextField id="standard-basic" label="Standard input form" color='secondary' />
                <TextField id="outlined-basic" label="This is outlined Basic" color='secondary' variant="outlined"/>
                <TextField id="filled-basic" label="This is filled Basic" color='secondary' variant="filled"/>

                < br/>

                <TextField 
                id="name" label="Enter Your Name" 
                color="primary" variant="outlined"
                value = {this.state.name}
                error = {false}
                // disabled = {true}
                helperText = "Please Enter Valid Name"
                onChange = {this.handleChange}
                // width 100% fullWidth
                fullWidth = {true}
                />
                < br/>
                <p> UserName is: &nbsp; {this.state.name} </p>
            </div>
        )
    }
}

export default FormExample;
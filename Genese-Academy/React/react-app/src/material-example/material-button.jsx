
import React, { Component } from "react";
import Button from "@material-ui/core/Button/Button";
import StartIcon from "@material-ui/icons/AccessAlarm";
import ButtonGroup from '@mui/material/ButtonGroup';

class MaterialButton extends Component{
    render(){
        return (
            <div>
                <h3> These are material ui buttons.</h3>
                <Button variant="text">Text</Button> &nbsp;
                <Button variant="contained" color="secondary">Contained</Button>  &nbsp;
                <Button variant="outlined">Outlined</Button>  &nbsp;

                < br/> <br />
                {/* ADD Icons to Buttons */} &nbsp;&nbsp;
                <Button variant="outlined" color="secondary"
                 startIcon={<StartIcon />}>
                    Button with Icon
                </Button>

                < br/> <br />
                &nbsp;&nbsp;
                <Button variant="contained" color="secondary"
                 startIcon={<StartIcon />}>
                    Button without Border 
                </Button>

                < br/> <br />

                &nbsp;&nbsp;
                <ButtonGroup color="secondary" aria-label="outlined primary button group">
                    <Button color="primary"  variant="outlined"> btn 1 </Button> &nbsp;
                    <Button color=""  variant="contained" > btn 2 </Button> &nbsp;
                    <Button color="secondary" variant="outlined" > btn 3 </Button> 
                </ButtonGroup>
            </div>
        )
    }
}

export default MaterialButton;


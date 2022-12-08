
import React , {Component} from "react";
import Grid from '@mui/material/Grid';
import TextField from "@material-ui/core/TextField/TextField";

class MaterialGrid extends Component {
  render (){
    return(
        <div>
            <h2> This is Material UI Grid Container with spacing 1.</h2>
                {/* <Grid item xs={6}> */}
                <Grid container spacing={1}>
                    {
                        [0,1,2].map((value) => (
                            // play with xs sm classes it works similarly to boostrap classes
                            <Grid Key={value} item xs="6" sm="4">
                            <TextField id="" label="Standard input form" color='secondary' variant="outlined" />
                            </Grid>
                        ))}
                    </Grid>
                {/* </Grid> */}
            </div>
            );
        }
    }

export default MaterialGrid;
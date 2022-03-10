
import React, {Component} from "react";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "@material-ui/core/Drawer/Drawer";



class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            openDrawer: false
        }
    }

    render(){
        return (
            <div>
                {/* // color theming with color="" look theme.js for more details */}
                <AppBar position="static" color="secondary">
                    <Toolbar variant="dense">
                         <IconButton onClick = {()=>this.setState({openDrawer: true})}
                         edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                             <MenuIcon />
                        </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Photos
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Drawer anchor="left" open={this.state.openDrawer} onClose={()=>this.setState({openDrawer: false})}>
                    Drawer will remain opened
                    </Drawer>
            </div>
        )
    }
}

export default Header;

import React, {Component} from "react";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


class Header extends Component {
    render(){
        return (
            <div>
                <AppBar position="static">
                    <Toolbar variant="dense">
                         <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                             <MenuIcon />
                        </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Photos
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Header;
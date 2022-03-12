
import React, {Component} from "react";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from "@material-ui/core/Drawer/Drawer";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';



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
                    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="InboxIcon" />
      </ListItemButton>


    </List>
    </Drawer>
</div>
        )
    }
}

export default Header;
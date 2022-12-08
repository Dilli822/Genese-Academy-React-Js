
import React, { Component } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

class MaterialDialogue extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: false,
            openMenu: false,
            anchor: ''
        }
    }

    handleClose = () => {
        this.setState({
            open: false,
            openMenu: false
            })
        }


        // openMenu method
    openMenu = (event) => {
        this.setState({
                anchor: event.curretnTarget,
                openMenu: true
            })
        }

    render(){
        return (
            <div>
                <h3> This is Material UI Dialogue Box . </h3>
                <Button variant="outlined" onClick={()=>this.setState({open: true})}>Open alert dialog</Button>

{/* This is Dialog Boxes of Material UI */}
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose}>Disagree</Button>
          <Button onClick={this.handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      <br />

      <h3> This is Open Menu with Anchorel.</h3>

    {/* This is Menu Box of Material UI */}
    <Button onClick={this.openMenu} color="primary" variant="outlined"> Open Menu </Button>
    <Menu
    id="simple-menu"
    // anchorEl = {anchorEl}
    anchorEl={this.state.anchor}
    keepMounted
    open={this.state.openMenu}
    onClose={this.handleClose}
    MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >

        {/* You can change the onClick method as your wish */}
        <MenuItem onClick={this.handleClose}> Profile </MenuItem> <br />
        <MenuItem onClick={this.handleClose}> My Account </MenuItem> <br />
        <MenuItem onClick={this.handleClose}> Logout </MenuItem> <br />
    </Menu>
    
            </div>
        )
    }
}

export default MaterialDialogue;

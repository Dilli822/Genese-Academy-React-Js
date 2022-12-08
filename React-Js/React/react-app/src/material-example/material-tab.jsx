
import React, { Component }  from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';

class MaterialTab extends Component {

    constructor(props){
        super(props);
        this.state = {
            tabIndex: 0
        }
    }

    handleChange = (event, newValue) => {
        this.setState({
            tabIndex: newValue
        })
    }

    // getTabPanel =()=> {
    //     if(this.state.tabIndex == 0){
    //         return `<div> 1 </div>`
    //     }

    //     else if (this.state.tabIndex ==1){
    //         return `<div> 2 </div>`
    //     }
    //     else {
    //         return `<div> 3 </div>`
    //     }
    // }

    render(){
        return(
            <div>
                <h2> This is Material UI Tab! </h2>

                <AppBar position="static" style = {{ backgroundColor: "#6FDDA4" }}>
                    <Tabs value={this.state.tabIndex} onChange={this.handleChange}>
                        <Tab label="Item One"  />
                        <Tab label="Item Two"  />
                        <Tab label="Item Three" />
                    </Tabs>
                    {this.state.tabIndex == 0 ?
                    <div>
                        <p> index is 0</p> 
                    </div>: ''} 
                    {this.state.tabIndex ==1 ?
                        <div>
                            index is 1
                        </div>: ''    
                        }  
                        {this.state.tabIndex == 2 ?
                        <div>
                            index is 2
                        </div>: ''}


                </AppBar>
            </div>
        )
    }
}


export default MaterialTab;



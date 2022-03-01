import React, { Component } from "react";
import axios from 'axios';


export default class ApiCall extends Component{

    // constructor class
    // storing the api data here
    constructor(props){
        super(props);
        this.state = {
            covidData: []
        }
    }
        // We always keep our api in componentDidMount()
        componentDidMount(){
            this.getRemoteData();
        }


            // arrow function getRemoteData for apifetch with axios package
            getRemoteData = () => {
                let self = this;
                // api for covide information 
                axios.get('https://coronavirus-19-api.herokuapp.com/countries')
                .then(function(response){
                    console.log(response.data)
                    self.setState({
                        covidData: response.data
                    })
                    
                })
                .catch(function(error){
                    console.log(error)
                });
            }
    render(){
        // return here
        return(
            <div> 
                <h3> This is an api Call Example. </h3>

            </div>
        );
    }
}


/** Note: User https://jsoneditoronline.org/ for simplying the complex api data to similar infos */
import React, {Component} from "react";
import axios from "axios";

class ApiCall extends Component {
    constructor(props){
        super(props);
        this.state = {
            CovidData: [],
        }
    }

    // COMPONENT overriding to call the api
    componentDidMount(){
        this.getRemoteData();
    }

    // function to get api data with axios get method, then method and catch method
    getRemoteData = () =>{
        // since it has getfullfilled and getreject function has its own this so we are using self this for class ApiCall
        let self = this;
        axios.get('https://opendata.ecdc.europa.eu/covid19/casedistribution/json/').then((response)=>{
            console.log(response.data);
            self.setState({
                CovidData: response.data
            })
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        })
    }

    render(){
        return(
            <div>
                <div>
                    <h5> Api Call Example with Axios </h5>
                    <div>

                    </div>
                    
                </div>
                
            </div>
        )
    }
};

export default ApiCall;
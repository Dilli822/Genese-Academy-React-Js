
import React, {Component} from 'react';
import {CONFIG} from './config';
import { WeatherApi } from './weatherApi';

 class WeatherHome extends Component {

    //  constructor class
    constructor(props){
        super(props);
        this.state = {
            city: "dharan",
            weatherData: {},
            isLoading: true
        }
    }
    // Mounting our component
    componentDidMount(){
        this.getWeatherData();
    }

    getWeatherData=()=> {
        let self = this;
        WeatherApi.getCurrentWeatherData('dharan').then(
            function(res){
                self.setState({
                weatherData:res.data,
                isLoading:false
                })
            }
        );
    }

   

    render(){
        return (
            <div>
                <h5>Open Weather</h5>
            </div>
        )
    }
}

export default WeatherHome;
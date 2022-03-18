
import React, {Component} from 'react';
import {CONFIG} from './config';
import { WeatherApi } from './weatherApi';

 class WeatherHome extends Component {
    // Mounting our component
    // ComponentWillMount(){
    //     this.getWeatherData();
    // }

    getWeatherData=()=> {
        let weatherdemoApi = WeatherApi.getCurrentWeatherData('Kathmandu');
        console.log(weatherdemoApi)
        console.log("Hello World ")
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
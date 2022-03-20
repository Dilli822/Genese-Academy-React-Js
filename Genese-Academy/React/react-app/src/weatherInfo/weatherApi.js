
import axios from 'axios';
import {CONFIG} from './config';


export class WeatherApi{

    // making the function api call async and await
    static  getCurrentWeatherData = async (cityName)=> {
        let url = CONFIG.WEATHER_API.replace('~', cityName);
        return await axios.get(url+CONFIG.WEATHER_API_KEY);
    }
}



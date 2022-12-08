import React, {Component} from 'react';
import {WeatherApi} from './weatherApi'
import Header from "./weather-Header";
import {CircularProgress} from "@material-ui/core";
import CurrentWeatherCard from "./currentWeatherCard";
import Card from "@material-ui/core/Card/Card";
import CardHeader from '@mui/material/CardHeader';

class WeatherHome extends Component {

    constructor(props){
        super(props);
        this.state={
            city:"dharan",
            weatherData:{},
            isLoading:true
        }
    }
  componentDidMount() {
        this.getWeatherData();
  }


    getWeatherData=()=>{
        let self=this;
        WeatherApi.getCurrentWeatherData('dharan').then(function (res) {
            console.log(res.data);
            self.setState({
                weatherData:res.data,
                isLoading:false
            })

        }).catch(function (error) {
            console.log(error);
        })
    };
    render() {
        return (
            <div>
                <Header/>
                {this.state.isLoading ? <CircularProgress/> :
                <div>
                    <Card>
                        Climate:
                     {this.state.weatherData.weather[0].description}
                     </Card>
                    
                </div>
                }

                {this.state.isLoading ? <CircularProgress/> :
                    <div>
                        <CurrentWeatherCard data={this.state.weatherData}/>
                    </div>
                }
                


            </div>
        );
    }
}

export default WeatherHome;

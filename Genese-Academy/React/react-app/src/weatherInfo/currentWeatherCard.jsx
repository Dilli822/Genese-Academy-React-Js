import React, {Component} from 'react';
import Card from "@material-ui/core/Card/Card";
import Grid from "@material-ui/core/Grid/Grid";

class CurrentWeatherCard extends Component {
    render() {
        let weather=this.props.data;
        return (
            <div>
               <Card>
                   <div style={{"color":"red"}}>
                      Today: {new Date().toDateString()}
                   </div>


                   <div>
                       {weather.name}, {weather.sys.country}
                   </div>

                    <div> Sunset: {new Date(weather.sys.sunset*1000).toLocaleString()} </div>
                    <div> SunRise: {new Date(weather.sys.sunrise*1000).toLocaleString()} </div>
                    <div> {weather.weather.description} </div>
                       

                    <Grid container  spacing={2} style={{marginTop:20}}>
                       <Grid  item xs="3" sm="2" style={{margin:10}}>
                           <div>Temperature</div>
                           <div>{weather.main.temp}   °C</div>
                       </Grid>
                       <Grid item xs="3" sm="2" style={{margin:10}}>
                           <div>Min Temperature </div>
                           <div>{weather.main.temp_min}  °C</div>
                       </Grid>
                       <Grid  item xs="3" sm="2" style={{margin:10}}>
                           <div>MAx Temperature</div>
                           <div>{weather.main.temp_max}  °C </div>
                       </Grid>
                       <Grid  item xs="3" sm="2" style={{margin:10}}>
                           <div>Pressure </div>
                           <div>{weather.main.pressure} hPa</div>
                       </Grid>
                       <Grid  item xs="3" sm="2" style={{margin:10}}>
                           <div>Humidity</div>
                           <div>{weather.main.humidity} %</div>
                       </Grid>
                   </Grid>
               </Card>
            </div>
        );
    }
}

export default CurrentWeatherCard;
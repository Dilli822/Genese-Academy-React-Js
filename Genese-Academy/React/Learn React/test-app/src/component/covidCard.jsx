
import React, {Component} from 'react';

class CovidCard extends Component {
    render() {
        let item = this.props.data;
        return (
            <div> 
                <h4>This is from CovidCard Component.</h4> 
                <div style={{background: "#ECECEC", fontSize: "1.2rem"}}>
                <ul style={{}}>
                <li  style={{color: "#7023CA"}}> Country: {item.country}</li>
                <li  style={{color: "#097C80"}}>Case: {item.cases}</li>
                <li  style={{color: "red"}}>  Deaths: {item.deaths}</li>
                <li  style={{color: "green"}}>  Recovered: {item.recovered}</li>
                <li  style={{color: "#C92293"}}> Active: {item.active}</li>
                <li  style={{color: "#FD0076"}}> Today Deaths: {item.todayDeaths}</li>
                <li  style={{color: "#FD3F00"}}> Critical Case: {item.critical}</li>
                </ul>
                
                </div>
            </div>
        );
    }
}
export default CovidCard;
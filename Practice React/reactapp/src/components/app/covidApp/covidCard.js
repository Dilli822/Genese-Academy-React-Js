import React, {Component} from "react";

class Covid_Card extends Component{
   
    render(){
        let items = this.props.data;
        return(
                    <div style={{}}>
                         {/* <h5>Covid Card Design with Props Passed down here</h5> */}
                        <div style={{display: "flex", flexWrap: "wrap", height: "70px", overflow: "auto", margin: "0.25rem 0", alignItems: "center", justifyContent: "space-between", border: "1px solid #000", width: "100%", padding: "0.5rem",}}>
                        <div> Country:<br></br> {items.country}</div>
                        <div>Tested: <br></br>{items.tested}</div>
                        <div>Recovered: <br></br>{items.recovered}</div>
                        <div>infected: <br></br>{items.infected}</div>
                        </div>
                    </div>
        )
    }
};

export default Covid_Card;
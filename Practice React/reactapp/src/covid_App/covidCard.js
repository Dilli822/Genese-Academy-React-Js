import React, {Component} from "react";

class Covid_Card extends Component{
   
    render(){
        let items = this.props.data;
        return(
            <div>
                {/* <h5>Covid Card Design with Props Passed down here</h5> */}
                <div>

                    <div>
                        <div style={{display: "flex", justifyContent: "space-between", border: "1px solid #000", padding: "0.5rem",}}>
                        <div> Country:<br></br> {items.country}</div>
                        <div>Tested: <br></br>{items.tested}</div>
                        <div>Recovered: <br></br>{items.recovered}</div>
                        <div>infected: <br></br>{items.infected}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Covid_Card;
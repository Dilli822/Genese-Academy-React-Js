import React, {Component} from "react";
import axios from "axios";
import Practice_Covid_Card from "./components/Practice_Covid_Card";

class Practice_ApiCall extends Component{
    constructor(props){
        super(props);
        this.state = {
            covidData: [],
            loading: true,
            error: false
        }
    };

    componentDidMount(){
        this.getCovidData();
    };

    getCovidData = () => {
        let self = this;
        axios.get('').then((response)=>{
            console.log(response.data);
            self.setState({
                covidData: response.data,
                loading: false
            })
        }).catch((error)=>{
            console.log(error);
            self.setState({
                error: true,
            })
        })
    };

    // error handling function 
    onRetry = () =>{
        this.setState({ error: false, loading: true});
        this.getCovidData();
    }

    render(){
        return(
            <div>
                <div>
                    {
                        this.state.error ?
                        <div> 
                            <Practice_Error_Component onRetry={this.onRetry} />
                        </div>:
                        this.state.loading ? 
                        <div> loading data </div> :

                        <div>
                            {this.state.covidData.map(()=>
                            <Practice_Covid_Card/>
                            )}
                        </div>
                    }
                </div>
            </div>
        )
    }
};

export default Practice_ApiCall;
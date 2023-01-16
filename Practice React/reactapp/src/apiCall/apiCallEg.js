import React, {Component} from "react";
import axios from "axios";
import Covid_Card from "../covid_App/covidCard";
import Error_Component from "../components/error_component";

class ApiCall extends Component {
    constructor(props){
        super(props);
        this.state = {
            CovidData: [],
            // since at first coviddata is empty and mapping to CovidData is error so loading is set true and below put ternary operator to check loading and CovidData
            CountryInfo: [],
            loading: true,
            error: false,
        }
    }

    // COMPONENT overriding to call the api
    componentDidMount(){
        this.getRemoteData();
        this.getGeographyApiData();
    }

    // function to get api data with axios get method, then method and catch method
    getRemoteData = () =>{
        // since it has getfullfilled and getreject function has its own this so we are using self this for class ApiCall
        let self = this;
        // axios.get('https://api.covid19api.com/countries').then((response)=>{
            axios.get('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true').then((response)=>{ 
           console.log("============ covidata api ==========");
           console.log(response.data);
            // console.log(response.data);
            self.setState({
                CovidData: response.data,
                // loading set false as CovidData is filled with response data
                loading: false
            })
        }).catch((error)=>{
            console.log(error);
            self.setState({
                error: true,
            })
        })
    };

    getGeographyApiData = () =>{
        let self = this;
        console.log("==============country info ==========");
          axios.get('https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/Geoenrichment/countries?f=pjson').then(function (response) {
              console.log(response.data.countries);
              self.setState({
                CountryInfo: response.data,
                loading: false,
              })
          }).catch(function (error) {
              console.error(error);
          });
    };

    // error handling function
    onRetry =()=> {
        this.setState({error: false, loading: true});
        this.getRemoteData();
    };

    render(){
        return(
            <div>
                <div>
                    <h5> Api Call Example with Axios </h5>
                </div>
                {
                this.state.error ? 
                <Error_Component onRetry={this.onRetry}/> :
                this.state.loading ?
                <div> <h3>data is loading </h3></div> :

                <div>
                    {/* Since our apidata here is array and so our state CovidData too so mapping is same as foreach loop */}
                    {this.state.CovidData.map((data)=>
                        // <div key={data}>
                        // {data.country}    
                        //  </div>
                        <Covid_Card data={data}></Covid_Card>    
                    )}
                </div> 
            }



            </div>
        )
    }
};

export default ApiCall;
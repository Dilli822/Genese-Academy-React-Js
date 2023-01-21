import React, {Component} from "react";
import axios from "axios";
import Covid_Card from "../components/app/covidApp/covidCard";
import Error_Component from "../components/status_handle/error_component";

class ApiCall extends Component {
    constructor(props){
        super(props);
        this.state = {
            covidData: [],
            duplicateCovidData: [],
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
                covidData: response.data,
                // duplicateCovidData which serves as copy of original made for specific filtering/searching
                duplicateCovidData: response.data,
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


    // handleSearch will handle the typed value inside the input field and do the filtering or searching
    handleSearch =(event)=>{
        // here val is value typed by users while searching in input field
        let data = this.state.covidData.filter((val)=>{
            if(val.country.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1){
                return val;
            }
        });
        this.setState({
            duplicateCovidData: data
        })
    };

    render(){
        return(
            <div>
                <div style={{ textAlign: "center"}}>
                    <h1> Api Call Example with Axios </h1>
                </div>
                {
                this.state.error ? 
                <Error_Component onRetry={this.onRetry}/> :
                this.state.loading ?
                <div> <h3 style={{textAlign: "center"}}> Please wait,Data is loading! </h3></div> :
              
                <div style={{ display: "block", margin: "0 auto", maxWidth: "900px"}}>
                    <div>
                        <label>Search:</label>
                        <input type="text" name="" onChange={this.handleSearch} style={{ width: "100%",border: "1px solid green", padding: "0.25rem", minHeight: "50px"}}placeholder="Type Here Country name to see the details of covid 19"></input>
                    </div>
                    {/* Since our apidata here is array and so our state CovidData too so mapping is same as foreach loop */}
                    {this.state.duplicateCovidData.map((data)=>
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
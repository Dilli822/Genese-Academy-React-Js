import React, {Component } from "react";
import axios from "axios";
import Practice_Error_Component from "../../react_practices/Practice_Error_Component";

class Auto_Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            apiData: [],
            duplicateApiData: [],
            loading: true,
            error: false,
            books_size: "",

        }
    };

    componentDidMount(){
        this.getRemoteApiData();
        this.handleSearch();
    }

    getRemoteApiData =() =>{
        let self = this;
        axios.get('https://openlibrary.org/works/OL45804W/editions.json').then(function (response) {
        console.log("response data entries of books api ")    
        console.log(response.data.entries);
        
        self.setState({
            apiData: response.data.entries,
            books_size: response.data.size,
            duplicateApiData: response.data.entries,
            loading: false
        });
    
        
        }).catch(function (error) {
            console.error(error);
            self.setState({
                error: true,
            })
        });
        
    };



    handleSearch=(event)=>{
        let data = this.state.apiData.filter((val)=>{
            if(val.title.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1){
            return val;
        }
        });

        this.setState({
            duplicateApiData: data,
        })
    }

    render(){
        return(
            <div>
                <div>
                    <h5>React api call example with filter search error handling</h5>

                    <div >
                        {
                            this.state.loading ?
                            <div style={{textAlign: "center"}}> Please wait, Data is loading </div> :
                            this.state.error ? 
                            <div><Practice_Error_Component/></div> :

                            <div> 
                      
                            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
                            <h2> Number of Total Books: <span style={{ color: "green"}}> {this.state.books_size}</span> </h2> 
                                <input type="text" onChange={this.handleSearch} style={{ width: "500px"}}placeholder="Type Books name to filter the search"></input>
                    
                                {this.state.duplicateApiData.map((data) => (
                                    <div style={{border: "1px dotted #000",borderRadius: "5%", margin: "0.3rem 0rem", padding:"0.5rem", minHeight: "100%", width:"30.33%"}} key={data.key}>
                                        <h5>Title</h5> 
                                        {data.title}
                                        <h5>Other Title:  </h5>
                                        {data.other_titles}
                                        <h5>Subtitle:
                                            {data.subtitle}
                                        </h5>
                                        <br></br>
                                       
                                        <div> 
                                            <h5> Publisher: </h5>
                                        <div> {data.publishers}</div>
                                        <h5>Keys:</h5>
                                        <div> {data.key} </div>
                                       {/* <h5>records</h5>
                                        {data.source_records}: */}
                                        <h5>Publish Country: </h5>
                                        {data.Publish_coutry}
                                        <h5>Form</h5>
                                        {data.Physical_format}
                                        <h5>Number of Pages:</h5>
                                        {data.number_of_pages}

                                        <h5>revision: {data.revision}</h5>
                                        <h5>
                                            Latest Version:
                                            {data.latest_revision}
                                           
                                        </h5>
                                        <h5>Weight {data.weight}</h5>

                                        <h5>Publish Date: {data.publish_date}</h5>
                                       <h5>Sizes: {data.publish_date}</h5>
                                       
                                      
                                        </div>
                                        
                                       
                                    </div>
                                  ))
                                }
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
};

export default Auto_Search;
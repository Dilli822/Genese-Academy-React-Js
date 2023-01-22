import axios from "axios";
import React, {Component} from "react";

class Practice extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchText: "",
      loading: true,
      error: false,
      apiData: [],
      dupApiData: [],
    }
  };

  componentDidMount(){
    this.getApiData();
  }

  getApiData = () =>{
    let self = this;
    axios.get('').then((res)=>{
      console.log(res.data);
      self.setState({
        apiData: res.data,
        loading: false,
        error: false,
      })
    }).catch((err)=>{
      console.log(err);
      self.setState({ error: true, loading: false })
    })
  }



  onRetry = () =>{

  };

  //error handling 
  onErrorRetry = () =>{
    let self = this;
    self.setState({ error: false, loading: true});
    this.getApiData();
  }

  render(){
    return(
      <div>

        <div>
          <h5>Practice search app</h5>
        </div>

        <div>
    
        </div>

      </div>
    )
  }
};

export default Practice;
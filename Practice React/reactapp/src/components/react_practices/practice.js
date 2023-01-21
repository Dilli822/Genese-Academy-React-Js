import React, { Component } from "react";
import axios from "axios";

class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      searchValue: "",
      noData: false
    };
  }

  componentDidMount() {
    this.getApiData();
  }

  getApiData = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        this.setState({ countries: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSearch = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  handleSubmit = () => {
    const filteredData = this.state.countries.filter((country) => {
      return country.name.common.toLowerCase().includes(this.state.searchValue.toLowerCase());
    });
    if(filteredData.length === 0){
      this.setState({ noData: true });
    } else {
      this.setState({ countries: filteredData, noData: false });
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchValue}
          onChange={this.handleSearch}
        />
        <button onClick={this.handleSubmit}>Search</button>
        {this.state.noData ? <div>No data found</div> :
        this.state.countries.map((country) => (
          <div key={country.name}>{country.name.common}</div>
        ))}
      </div>
    );
  }
}

export default Practice;

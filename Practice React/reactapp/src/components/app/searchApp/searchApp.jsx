import React, { Component } from 'react';
import axios from 'axios';

class SearchApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      searchText: '',
      loading: true,
      error: false,
      flagPath: 'https:://unsplash.it/459',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
        console.log(response.data);
      this.setState({ countries: response.data });
    }).catch((error)=>{
        console.log(error);
        this.setState({
            error: true
        })
    });
  }

  handleSearch() {
    let filteredCountries = this.state.countries.filter((country) => {
      return country.name.official.toLowerCase().includes(this.state.searchText.toLowerCase());
    });
    if (filteredCountries.length === 0) {
      this.setState({ countries: [], message: "No any Results found" });
    }
    else {
      this.setState({ countries: filteredCountries, message: "" });
    }
  }

  handleChange(event) {
    if (event.target.value === "") {
      axios.get('https://restcountries.com/v3.1/all').then((response) => {
        this.setState({ countries: response.data });
      });
    }
    else {
      this.setState({ searchText: event.target.value });
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search for a country"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSearch}>Search</button>
        <h3>No of countries: {this.state.countries.length}</h3>
        <div>
          {this.state.countries.map((country) => (
            <div key={country}>
                <h5>Country Official Name: <p>{country.name.official}</p> </h5>
                <h5>Capital: <h6>{country.capital}</h6></h5>
                <h5>Continents: <h6>{country.continents}</h6></h5>
                <h5>flags: <h6><img style={{ width: "50px"}}src={country.flags.png} alt={'flag of country ${country.name.official}'} />　</h6></h5>
                <hr></hr>
            </div>
          
          ))}
        </div>
        
        {this.state.message && <div>{this.state.message}</div>}
      </div>
    );
  }

}

export default SearchApp;

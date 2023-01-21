import React, { Component } from 'react';
import axios from 'axios';

class SearchApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      searchText: '',
      message: "",
      error: false,
      loading: true,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      this.setState({ 
        countries: response.data,
        loading: false,
       });
    }).catch((error)=>{
       console.log(error);
    })
  }

  handleSearch() {
    let filteredCountries = this.state.countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(this.state.searchText.toLowerCase());
    });
    if (filteredCountries.length === 0) {
      this.setState({ countries: [], message: "No data found" });
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

        
        {
          this.state.loading ? 
          <div> data is loading </div>:
          
          this.state.error ? <div> </div> :

          <div>
        <input
          type="text"
          placeholder="Search for a country"
          onChange={this.handleChange}
        />
        <button onClick={this.handleSearch}>Search</button>
                <ul>
          {this.state.countries.map((country) => (
            <li key={country.name.common}>{country.name.common}</li>
          ))}
        </ul>
        {this.state.message && <div>{this.state.message}</div>}
        </div>
          
        }

      </div>
    );
  }
}

export default SearchApp;

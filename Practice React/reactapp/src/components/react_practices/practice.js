import React, { Component } from 'react';
import axios from 'axios';

class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      searchText: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      this.setState({ countries: response.data });
    });
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
    );
  }

}

export default Practice;

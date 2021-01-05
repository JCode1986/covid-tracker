import React, { useState, useEffect } from "react";
import './App.css';
import {
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core"

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch ("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
      });
    };
    getCountriesData();
  }, [])

  return (
    <div className="App">
      <div className="app_header">
        <h1>Covid 19 Tracker</h1>
        <FormControl className="app_dropdown">
          <Select
            variant="outlined"
            value="abc"
          >
            {/* loop through countries for dropdown; api call from disease.sh */}
            {
              countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </div>

      {/* header */}
      {/* Title + select input dropdown field */}
      
      {/* info box 1 */}
      {/* info box 2 */}
      {/* info box 3 */}

      {/* table */}
      {/* graph */}

      {/* map */}
    </div>
  );
}

export default App;

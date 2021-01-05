import React, { useState, useEffect } from "react";
import './App.css';
import InfoBox from "./InfoBox";
import {
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core"

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("Worldwide");

  //get all countries from disease.sh
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

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    setCountry(countryCode)
  }

  return (
    <div className="App">
      <div className="app_header">
        <h1>Covid 19 Tracker</h1>
        <FormControl className="app_dropdown">
          <Select
            variant="outlined"
            onChange={onCountryChange}
            value={country}
          >
            <MenuItem value="Worldwide">Worldwide</MenuItem>
            {
              countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </div>

      <div className="app_stats">
            <InfoBox title="Coronavirus Cases" cases={123} total={2000}/>
            <InfoBox title="Recovered" cases={123} total={3000}/>
            <InfoBox title="Deaths" cases={123} total={4000}/>
      </div>
      
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

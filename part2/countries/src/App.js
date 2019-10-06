import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Results from "./components/Results";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");

  //Filter through all the countries, based on text from input
  const filteredCountries =
    searchCountry === ""
      ? countries
      : countries.filter(
          country => country.name.toLowerCase().indexOf(searchCountry.toLowerCase()) !== -1
        );
  console.log(filteredCountries);

  //Get data from Countries API
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  }, []);

  //Log values of country every time input value changes
  const handleCountryChange = event => {
    // setSelctedCountry([]) Add state that keeps track which country is selected
    setSearchCountry(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Countripedia</h1>
        <form>
          Search Countries <input value={searchCountry} onChange={handleCountryChange}></input>
        </form>
        <section className="results">
          <Results filteredCountries={filteredCountries}></Results>
          {/* {selectedCountry.length ? (
            <Results countries={countries} searchCountry={searchCountry}></Results>
          ) : (
            <SelectedCountry data={selectedCountry} />
          )} */}
        </section>
      </header>
    </div>
  );
};

export default App;

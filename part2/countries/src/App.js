import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Results from "./components/Results";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  //Get data from Countries API
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      setCountries(response.data);
    });
  }, []);

  //Log values of country every time input value changes
  const handleCountryChange = event => {
    setSearchCountry(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Country Search</h1>
        <form>
          Find Countries <input value={searchCountry} onChange={handleCountryChange}></input>
        </form>
        <section className="results">
          <Results countries={countries} searchCountry={searchCountry}></Results>
        </section>
      </header>
    </div>
  );
};

export default App;

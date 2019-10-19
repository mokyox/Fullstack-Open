import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import Results from "./components/Results";
import CountryStats from "./components/CountryStats";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");

  //Filter through all the countries based on text from input
  const filteredCountries =
    searchCountry === ""
      ? countries
      : countries.filter(
          country =>
            country.name.toLowerCase().indexOf(searchCountry.toLowerCase()) !==
            -1
        );

  //Get data from Countries API
  useEffect(() => {
    async function fetchCountriesAPIData() {
      let url = "https://restcountries.eu/rest/v2/all";
      await axios.get(url).then(response => {
        setCountries(response.data);
        setIsLoaded(true);
      });
    }
    fetchCountriesAPIData();
  }, []);

  //Log values of country every time input value changes
  const handleCountryChange = event => {
    setSearchCountry(event.target.value);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Countripedia</h1>
        <form>
          <StyledLabel>Search Countries</StyledLabel>
<<<<<<< HEAD
          <StyledInput
            value={searchCountry}
            onChange={handleCountryChange}
          ></StyledInput>
=======
          <StyledInput value={searchCountry} onChange={handleCountryChange}></StyledInput>
>>>>>>> 3bfb706... refactor design to improve mobile look
        </form>
        <section className='results'>
          {filteredCountries.length === 1 ? (
            <CountryStats
              country={filteredCountries[0]}
              setSelectedCountry={setSelectedCountry}
              selectedCountry={selectedCountry}
            ></CountryStats>
          ) : (
            <Results
              setSelectedCountry={setSelectedCountry}
              filteredCountries={filteredCountries}
              isLoaded={isLoaded}
              selectedCountry={selectedCountry}
            ></Results>
          )}
        </section>
      </header>
    </div>
  );
};

const StyledLabel = styled.p`
  margin: 0.4rem;
`;

const StyledInput = styled.input`
  display: block;
  position: relative;
  border-radius: 1000rem;
  padding: 5px;
<<<<<<< HEAD
  margin: 0.75rem auto;
  max-width: 360px;
=======
  margin: 0.1rem 0.5rem;
  max-width: 250px;
>>>>>>> 3bfb706... refactor design to improve mobile look
`;

export default App;

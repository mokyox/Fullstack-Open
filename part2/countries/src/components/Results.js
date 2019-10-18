import React, { useState } from "react";
import CountryStats from "./CountryStats";
import PropTypes from "prop-types";

const Results = ({ filteredCountries }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  console.log(selectedCountry, "is the selectedCountry");
  if (filteredCountries.length > 10) {
    return <p>Too many matches, please specify another filter.</p>;
  }
  return (
    <ul>
      {filteredCountries.map(country => (
        <React.Fragment key={country.name}>
          <li>{country.name}</li>
          <button
            onClick={() => {
              setSelectedCountry(country);
              setIsClicked(!isClicked);
            }}
          >
            {selectedCountry.name === country.name && isClicked ? "Showing" : "Show"}
          </button>

          {/*TODO: Move <CountryStats></CountryStats> outside of the <li></li> so it doesn't render between them*/}
        </React.Fragment>
      ))}
      {selectedCountry ? <CountryStats country={selectedCountry}></CountryStats> : ""}
    </ul>
  );
};

Results.propTypes = {
  filteredCountries: PropTypes.array
};
export default Results;

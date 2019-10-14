import React, { useState } from "react";
import CountryStats from "./CountryStats";
import PropTypes from "prop-types";

const Results = ({ filteredCountries }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  if (filteredCountries.length > 20) {
    return <p>Too many matches, please specify another filter.</p>;
  }
  return (
    <ul>
      {filteredCountries.map(country => (
        <React.Fragment key={country.name}>
          <li>{country.name}</li>
          <button
            onClick={() => {
              setSelectedCountry(country.name);
              setIsClicked(!isClicked);
            }}
          >
            {isClicked === true ? "Hide" : "Show"}
          </button>
          {selectedCountry === country.name && isClicked === true ? (
            <CountryStats country={country}></CountryStats>
          ) : (
            ""
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

Results.propTypes = {
  filteredCountries: PropTypes.array
};
export default Results;

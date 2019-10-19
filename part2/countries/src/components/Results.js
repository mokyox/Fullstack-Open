import React, { useState } from "react";
import CountryStats from "./CountryStats";
import PropTypes from "prop-types";
import styled from "styled-components";

const Results = ({ filteredCountries, isLoaded, setSelectedCountry, selectedCountry }) => {
  const [isClicked, setIsClicked] = useState(false);

  //Get API weather data after country API data from parent component is called

  if (filteredCountries.length > 10) {
    return <p> Please specify filter further.</p>;
  }
  if (filteredCountries.length === 0 && isLoaded) {
    return <p>No countries found.</p>;
  }
  return (
    <>
      <StyledResults>
        <ul>
          {filteredCountries.map(country => (
            <React.Fragment key={country.name}>
              <StyledResult>
                <li>{country.name}</li>
                <StyledButton
                  onClick={() => {
                    setSelectedCountry(country);
                    setIsClicked(!isClicked);
                  }}
                >
                  Display
                </StyledButton>
              </StyledResult>
            </React.Fragment>
          ))}
        </ul>
      </StyledResults>
      {selectedCountry ? (
        <CountryStats
          country={selectedCountry}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          isLoaded={isLoaded}
        ></CountryStats>
      ) : (
        ""
      )}
    </>
  );
};

const StyledResults = styled.div`
  /* border: solid 3px green; */
  margin: 1rem auto;
  max-width: 640px;
  text-align: center;
  padding: 1rem;
`;

const StyledResult = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  background: #ac5610;
  border: 1px solid #ac5610;
  color: white;
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.1s ease-in-out;
  margin: 5px 1rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &:hover,
  &:focus {
    outline: none;
  }
`;

Results.propTypes = {
  filteredCountries: PropTypes.array
};

export default Results;

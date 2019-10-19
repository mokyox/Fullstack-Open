import React, { useState } from "react";
import CountryStats from "./CountryStats";
import PropTypes from "prop-types";
import styled from "styled-components";

const Results = ({ filteredCountries }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  console.log(selectedCountry, "is the selectedCountry");
  if (filteredCountries.length > 10) {
    return <p>Too many matches, please specify another filter.</p>;
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
      {selectedCountry ? <CountryStats country={selectedCountry}></CountryStats> : ""}
    </>
  );
};

const StyledResults = styled.div`
  /* border: solid 1px green; */
  text-align: center;
  margin: 5px 0;
`;

const StyledResult = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
`;

const StyledButton = styled.button`
  background: ${props => (props.primary ? "#25d366" : "#e76c67")};
  border: ${props => (props.primary ? "1px solid #25d366" : "1px solid #e76c67")};
  color: white;
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.1s ease-in-out;
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

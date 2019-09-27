import React from "react";

const Results = ({ countries, searchCountry }) => {
  //Filter through all the countries, based on text from input
  const filteredCountries =
    searchCountry === ""
      ? countries
      : countries.filter(
          country => country.name.toLowerCase().indexOf(searchCountry.toLowerCase()) !== -1
        );
  console.log(filteredCountries);

  if (filteredCountries.length === 1) {
    return (
      <>
        <h1>{filteredCountries[0].name}</h1>
        <p>Population: {filteredCountries[0].population}</p>
        <h3>Languages</h3>
        <ul>
          {filteredCountries[0].languages.map(language => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
        <img src={filteredCountries[0].flag} alt="flag"></img>
      </>
    );
  }

  if (filteredCountries.length > 10) {
    return <p>Too many matches, please specify another filter.</p>;
  }

  return (
    <>
      <ul>
        {filteredCountries.map(country => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    </>
  );
};
export default Results;

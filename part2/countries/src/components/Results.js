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

  //Display stats for a country
  const showCountries = country => {
    return (
      <>
        <h1>{country.name}</h1>
        <p>Population: {new Intl.NumberFormat().format(country.population)}</p>
        <h3>Languages</h3>
        <ul>
          {country.languages.map(language => (
            <React.Fragment key={language.name}>
              <li key={language.name}>{language.name}</li>
            </React.Fragment>
          ))}
        </ul>
        <img src={country.flag} alt="flag"></img>
      </>
    );
  };

  if (filteredCountries.length === 1) {
    return showCountries(filteredCountries[0]);
  }

  if (filteredCountries.length > 20) {
    return <p>Too many matches, please specify another filter.</p>;
  }

  return (
    <>
      <ul>
        {filteredCountries.map(country => (
          <React.Fragment key={country.name}>
            <li>{country.name}</li>
            <button
              onClick={() => {
                console.log("clicked");
              }}
            >
              Show
            </button>
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};
export default Results;

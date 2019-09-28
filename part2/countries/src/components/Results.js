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

  const showCountries = () => {
    return (
      <>
        <h1>{filteredCountries[0].name}</h1>
        <p>Population: {new Intl.NumberFormat().format(filteredCountries[0].population)}</p>
        <h3>Languages</h3>
        <ul>
          {filteredCountries[0].languages.map(language => (
            <React.Fragment key={language.name}>
              <li key={language.name}>{language.name}</li>
            </React.Fragment>
          ))}
        </ul>
        <img src={filteredCountries[0].flag} alt="flag"></img>
      </>
    );
  };

  if (filteredCountries.length === 1) {
    return showCountries();
  }

  if (filteredCountries.length > 10) {
    return <p>Too many matches, please specify another filter.</p>;
  }

  return (
    <>
      <ul>
        {filteredCountries.map(country => (
          <React.Fragment key={country.name}>
            <li>{country.name}</li>{" "}
            <button
              onClick={() => {
                console.log(showCountries());
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

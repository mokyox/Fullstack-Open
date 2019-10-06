import React from "react";

const CountryStats = ({ country }) => {
  //Display stats for a country
  console.log(country, "country");
  return (
    <>
      <h1>{country[0].name}</h1>
      <p>Population: {new Intl.NumberFormat().format(country[0].population)}</p>
      <h3>Languages</h3>
      <ul>
        {country[0].languages.map(language => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={country[0].flag} alt="flag"></img>
    </>
  );
};

export default CountryStats;

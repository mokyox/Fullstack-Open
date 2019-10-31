import React from "react";

const CountryStats = ({ country }) => {
  //Display stats for a country
  console.log(country, "country");
  return (
    <div>
      <h1>{country.name}</h1>
      <p>Population: {new Intl.NumberFormat().format(country.population)}</p>
      <h3>Languages</h3>
      <ul>
        {country.languages.map(language => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt="flag"></img>
    </div>
  );
};

export default CountryStats;

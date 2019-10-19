import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import axios from "axios";
import getIcon from "./icons";

const CountryStats = ({ country, setSelectedCountry, selectedCountry }) => {
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState("");
  const [temperature, setTemperature] = useState("");
  const [wind, setWind] = useState("");
  const [description, setDescription] = useState("");
  //API Key
  const API_KEY = process.env.REACT_APP_API_KEY;

  //setSelectedCountry if there is only 1 result
  if (country) {
    setSelectedCountry(country);
  }

  //Get weather data from API
  useEffect(() => {
    async function fetchWeatherAPIData() {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCountry.capital}&appid=${API_KEY}&units=metric`;
      await axios
        .get(url)
        .then(response => {
          setIcon(response.data.weather[0].icon);
          setTemperature(response.data.main.temp);
          setWind(response.data.wind.speed);
          setDescription(response.data.weather[0].description);
        })
        .catch(err => {
          if (err) {
            console.log(err, "This is an error.");
          }
        });
    }
    fetchWeatherAPIData();
  }, [API_KEY, selectedCountry.capital, setWeather]);

  return (
    <>
      {weather && (
        <CountryCard>
          <h1>{country.name}</h1>
          <img src={country.flag} alt="flag"></img>
          <p>
            <strong>Population</strong>: {new Intl.NumberFormat().format(country.population)}
          </p>
          <h4>Languages</h4>
          <ul>
            {country.languages.map(language => (
              <li key={language.name}>{language.name}</li>
            ))}
          </ul>
          <h4>Weather in {country.capital}</h4>
          <WeatherIcon className={getIcon(icon)}></WeatherIcon>
          <span>{description.charAt(0).toUpperCase() + description.slice(1)}</span>
          <span>Temperature: {Math.floor(temperature)}°C </span>
          <span>Wind: {Math.floor(wind)} kph</span>
        </CountryCard>
      )}
    </>
  );
};

const CountryCard = styled.div`
  /* border: solid 1px red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 640px;
  margin: 0.5rem auto;
  padding: 1rem;
  p,
  h4 {
    margin: 0.6rem 0;
    padding: 0.5rem 0;
  }
  h1,
  img {
    align-self: center;
  }
`;

const WeatherIcon = styled.div`
  font-size: 75px;
  margin: 1rem;
`;

CountryStats.propTypes = {
  country: PropTypes.object
};

export default CountryStats;

const getIcon = weatherIcon => {
  const iconsMap = {
    "01d": "wi wi-day-sunny",
    "02d": "wi wi-day-cloudy",
    "03d": "wi wi-day-sunny-overcast",
    "04d": "wi wi-cloud",
    "09d": "wi wi-rain",
    "10d": "wi wi-day-showers",
    "11d": "wi wi-day-thunderstorm",
    "13d": "wi wi-day-snow",
    "50d": "wi wi-day-fog",

    "01n": "wi wi-night-clear",
    "02n": "wi wi-night-partly-cloudy",
    "03n": "wi wi-cloudy",
    "04n": "wi wi-night-cloudy",
    "09n": "wi wi-night-alt-showers",
    "10n": "wi wi-night-rain",
    "13n": "wi wi-night-snow",
    "50n": "wi wi-night-fog"
  };
  return iconsMap[weatherIcon];
};

export default getIcon;

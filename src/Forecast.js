import axios from "axios";
import React, { useState } from "react";
import "./Forecast.css";
import WeatherForecastDay from "./WeatherForecastDay.js";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="weatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5)
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} icon={props.icon} />
                </div>
              );
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "3fo704e022f51t707bae6d88b742b43f";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=imperial
`;
    axios.get(apiUrl).then(handleResponse);
  }
  return null;
}

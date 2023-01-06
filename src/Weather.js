import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormatDate from "./FormatDate";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";

export default function Weather(props) {
  let [city, setCity] = useState();
  const [weather, setWeather] = useState({ ready: false });
  function handleResponse(response) {
    setWeather({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      date: new Date(response.data.time * 1000),
      icon: `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "3fo704e022f51t707bae6d88b742b43f";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-9">
              <input
                type="Search"
                placeholder="Type a city...."
                onChange={updateCity}
                className="form-control"
                id="search"
              />
            </div>
            <div className="col-sm-3">
              <input
                type="Submit"
                value="Search"
                className="form-control"
                id="submit"
              />
            </div>
          </div>
        </form>
        <h1>{city}</h1>
        <ul>
          <li>
            <FormatDate date={weather.date} />
          </li>
          <li className="text-capitalize">{weather.description}</li>
        </ul>
        <div className="row">
          <div className="col-sm-6">
            <span className="temperature">
              {Math.round(weather.temperature)}
            </span>
            <span className="unit">°F</span>
          </div>
          <div className="col-sm-6">
            <ul>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return "loading...";
  }
}

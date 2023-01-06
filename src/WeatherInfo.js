import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.defaultCity}</h1>
      <ul>
        <li>
          <FormatDate />
        </li>
        <li className="text-capitalize">{props.weather.description}</li>
      </ul>
      <div className="row">
        <div className="col-sm-6">
          <span className="temperature">
            {Math.round(props.weather.temperature)}
          </span>
          <span className="unit">°F</span>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>Humidity: {props.weather.humidity}%</li>
            <li>Wind: {props.weather.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="tempColumn">
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-sm-6" id="temperatureColumn">
          <img
            src={props.data.iconUrl}
            className="icon-description"
            alt="weather-icon"
          />
          <span className="temperature">
            {Math.round(props.data.temperature)}
            <span className="unit">°F</span>
          </span>
        </div>
        <div className="col-sm-6">
          <ul className="elements">
            <li>
              <strong>Humidity:</strong> {props.data.humidity}%
            </li>
            <li>
              <strong>Wind:</strong> {Math.round(props.data.wind)} mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

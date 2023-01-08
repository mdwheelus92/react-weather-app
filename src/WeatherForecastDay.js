import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <span className="day">{day()}</span>
      <div className="icon">
        <img src={props.icon} width="75px" alt="icon" />
      </div>
      <span className="high">
        <strong>{Math.round(props.data.temperature.maximum)}°</strong> |
      </span>
      <span className="low">
        {" "}
        {Math.round(props.data.temperature.minimum)}°
      </span>
    </div>
  );
}

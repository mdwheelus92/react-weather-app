import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <span className="temperature">
        {Math.round(props.fahrenheit)}
        <span className="unit">
          °F | °
          <a href="/" onClick={convertToCelcius}>
            C
          </a>
        </span>
      </span>
    );
  } else {
    let celcius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <span className="temperature">
        {Math.round(celcius)}
        <span className="unit">
          °
          <a href="/" onClick={convertToFahrenheit}>
            F
          </a>{" "}
          | °C
        </span>
      </span>
    );
  }
}

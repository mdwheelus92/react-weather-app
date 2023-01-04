import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-sm-9">
            <input
              type="Search"
              placeholder="Type a city...."
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
      <h1>Mammoth Lakes</h1>
      <ul>
        <li>January, 3rd 2023</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-sm-6">
          <span className="temperature">🌤 7°</span>
          <span className="unit">F</span>
        </div>
        <div className="col-sm-6">
          {" "}
          <ul>
            <li>Precipitation:</li>
            <li>Humidity:</li>
            <li>Wind:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

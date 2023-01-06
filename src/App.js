import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Mammoth Lakes" />
        <footer>
          <a
            href="https://github.com/mdwheelus92/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-Sourced Code{" "}
          </a>
          by: Michelle Wheelus
        </footer>
      </div>
    </div>
  );
}

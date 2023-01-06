import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
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

export default App;

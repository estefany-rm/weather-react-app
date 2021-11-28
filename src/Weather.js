import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter a city..."
          className="form-control"
        />
        <input type="submit" value="search" className="btn btn-primary" />
      </form>
      <h1>Amsterdam</h1>
      <ul>
        <li>Monday 13:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Cloudy"
          />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 16%</li>
            <li>Humidity: 67%</li>
            <li>Wind: 13km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

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
          autoFocus="on"
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
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="Cloudy"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">6</span>
              <span className="unit">°C</span>
            </div>
          </div>
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

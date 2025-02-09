import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function minTemperature() {
    const temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function maxTemperature() {
    const temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function day() {
    const date = new Date(props.data.time * 1000);
    const day = date.getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <div>
        <WeatherIcon code={props.data.condition.icon} size={45} />
      </div>
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
      </div>
    </div>
  );
}

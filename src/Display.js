import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

const key = "1777249fd459a0292a31c19d149222af";

const Display = ({ city }) => {
  const [data, setData] = useState(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`;
  let emoji = "cloud";

  const fetchWeather = async () => {
    const response = await fetch(url);
    const resJson = await response.json();
    if (resJson.cod === 404) {
      setData(null);
      return;
    }
    setData(resJson);
    if (data !== null) {
      console.log(data);
      console.log("temp 111");
      if (data.weather[0].description === "haze") {
        console.log("second");
        emoji = "bolt";
      }
    }
    console.log(data);
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <div>
      {!data ? (
        <p>No data found for city "{city}"</p>
      ) : (
        <div className="container">
          <div className="city">
            {data.name}
            <i className={`fas fa-${emoji} icon`}></i>
          </div>
          <div className="temp">{data.main.temp} °C </div>
          <div className="sky">{data.weather[0].description} </div>
        </div>
      )}
    </div>
  );
};
export default Display;

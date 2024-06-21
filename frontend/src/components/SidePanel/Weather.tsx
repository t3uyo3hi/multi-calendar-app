import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    icon: string;
  }[];
}

const cloud = () => {
  const [city, setCity] = useState<string>("tokyo");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [PopUpVisible, setPopUpVisible] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const response1 = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}
    `
      );

      setWeatherData(response1.data);
      console.log(response1.data);
      setPopUpVisible(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event: any) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    fetchData();
  };

  const PopUpbutton = () => {
    setPopUpVisible(!PopUpVisible);
  };

  return (
    <div>
      <div className="weather d-flex justify-content-around pt-2">
        <div className="form mt-3 w-75 m-auto ">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="都市名を入力"
              value={city}
              onChange={handleChange}
            />
          </form>
        </div>
      </div>

      {PopUpVisible && weatherData && (
        <div className="PopUp">
          <p className="fs-4">{city}</p>
          <div className="degree">
            <p className="degree1">{weatherData.main.temp}°C</p>

            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="Weather Icon"
              className="weather-icon"
            />
          </div>
          <div className="weatherbtn">
            <button onClick={PopUpbutton}>閉じる</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default cloud;

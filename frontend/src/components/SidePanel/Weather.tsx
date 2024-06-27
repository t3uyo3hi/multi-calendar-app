import React, { useEffect, useState } from "react";
import axios from "axios";

interface WeatherData {
  weather: {
    icon: string;
    main: string;
    description: string;
  }[];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  rain?: {
    "1h"?: number;
    "3h"?: number;
  };
  name: string;
}

const Weather = ({ city }: { city: string }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [PopUpVisible, setPopUpVisible] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ja&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );

      setWeatherData(response.data);
      console.log(response.data);
      setPopUpVisible(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  const PopUpbutton = () => {
    setPopUpVisible(!PopUpVisible);
  };

  return (
    <div className="weather">
      <button onClick={PopUpbutton}>
        {weatherData && (
          <>
            <h2 className="weather-name">{weatherData.name}</h2>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="Weather Icon"
              className="weather-icon"
            />
          </>
        )}
      </button>
      {PopUpVisible && weatherData && (
        <div className="PopUp ">
          <div className="text-start">
            <p>{weatherData.name}</p>
            <p>{weatherData.weather[0].description}</p>
            <table>
              <tbody>
                <tr>
                  <td>気温:</td>
                  <td>{weatherData.main.temp}℃</td>
                </tr>
                <tr>
                  <td>湿度:</td>
                  <td>{weatherData.main.humidity}%</td>
                </tr>
                <tr>
                  <td>降雨量:</td>
                  {weatherData.rain
                    ? weatherData.rain["3h"]
                      ? ` ${weatherData.rain["3h"]} mm(過去３時間)`
                      : ` ${weatherData.rain["1h"]} mm(過去１時間)`
                    : "データなし"}
                </tr>
                <tr>
                  <td>最高気温:</td>
                  <td>{weatherData.main.temp_max}℃</td>
                </tr>
                <tr>
                  <td>最低気温:</td>
                  <td>{weatherData.main.temp_min}℃</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-end">
            <div className="btn btn-primary text-right mt-5">
              <button onClick={PopUpbutton}>閉じる</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;

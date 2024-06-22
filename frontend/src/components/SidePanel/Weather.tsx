import React, { useEffect, useState } from "react";
import axios from "axios";

interface WeatherData {
  weather: {
    icon: string;
  }[];
}

const Weather = ({ city }: { city: string }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );

      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <div className="weather-icon">
      {weatherData && (
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="Weather Icon"
          className="weather-icon"
        />
      )}
    </div>
  );
};

export default Weather;

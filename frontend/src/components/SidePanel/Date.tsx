import React from "react";
import Weather from "./Weather";
import WeatherForm from "./WeatherForm";
import { useState } from "react";

const Date = () => {
  const [city, setCity] = useState<string>("tokyo");

  return (
    <div>
      <div className="d-flex fs-4 gap-2">
        <p className="ms-4 mt-1">5/8</p>
        <Weather city={city} />
      </div>
      <span>WednesDay</span>
      <div className="ms-4">
        <WeatherForm setCity={setCity} />
      </div>
    </div>
  );
};

export default Date;

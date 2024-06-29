import React, { useState } from "react";
import Weather from "./Weather";
import WeatherForm from "./WeatherForm";

type DateProps = {
  date: Date;
};

const Date = ({ date }: DateProps) => {
  const [city, setCity] = useState("tokyo");
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div>
      <div className="d-flex fs-4 gap-2">
        <p className="ms-4 mt-3">{`${
          date.getMonth() + 1
        }/${date.getDate()}`}</p>
        <div className="ms-2">
          <Weather city={city} />
        </div>
      </div>
      <span>{dayOfWeek[date.getDay()]}</span>
      <div className="ms-2">
        <WeatherForm setCity={setCity} />
      </div>
    </div>
  );
};

export default Date;

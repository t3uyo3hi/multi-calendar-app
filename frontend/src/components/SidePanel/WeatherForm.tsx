import React from "react";

const WeatherForm = ({ setCity }: { setCity: (city: string) => void }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const city = event.currentTarget.city.value;
    setCity(city);
  };

  return (
    <div>
      <div className="weather d-flex justify-content-around pt-2">
        <div className="form mt-3  w-75 m-auto ">
          <form onSubmit={handleSubmit}>
            <input type="text" name="city" placeholder="都市名を入力" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default WeatherForm;

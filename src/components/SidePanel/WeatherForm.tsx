import React from "react";

const WeatherForm = ({ setCity }: { setCity: (city: string) => void }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const city = event.currentTarget.city.value;

    setCity(city);
  };

  return (
    <div>
      <div className="weather d-flex justify-content-start pt-2">
        <div className="form mt-3  w-75   ">
          <form onSubmit={handleSubmit}>
            <div className="bg-light rounded-pill overflow-hidden">
              <input
                type="text"
                name="city"
                placeholder="都市名を入力"
                className="ms-2"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WeatherForm;

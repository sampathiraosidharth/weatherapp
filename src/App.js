import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);

  const handleSearch = () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=9328464b60e60664bca9985f98e83b1d`)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Weather Application</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="px-4 py-2 rounded-l-lg w-full focus:outline-none"
          placeholder="Enter location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {weather ? (
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-2">{weather.name}</h2>
          <p className="text-gray-800 text-lg">
            Temperature: {weather.main.temp}°F
          </p>
          <p className="text-gray-800 text-lg">
            Temperature feels like: {weather.main.feels_like}°F
          </p>
          <p className="text-gray-800 text-lg">
            Humidity: {weather.main.humidity}%
          </p>
          
          <div className="mt-4 flex items-center">
            <img
              className="h-20 w-20"
              src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt={weather.weather[0].description}
            />
            <p className="ml-2 text-gray-800">{weather.weather[0].description}</p>
          </div>
        </div>
      ) : (
        <div className="text-gray-800 font-bold">Loading...</div>
      )}
    </div>
  );
};

export default App;

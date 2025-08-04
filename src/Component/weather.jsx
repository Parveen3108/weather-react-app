import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";

export default function Weather() {
  const [search, setSearch] = useState("Hansi, India");
  const [weatherInfo, setWeatherInfo] = useState({});

  const getWeather = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=292d58c8188f1f351c0b7444170b411c&units=metric`;

      const response = await fetch(url);
      const Data = await response.json();

      const { temp, humidity, pressure } = Data.main;
      const { speed } = Data.wind;
      const { main } = Data.weather[0];
      const { country, sunset } = Data.sys;
      const { name } = Data;

      const weatherData = {
        temp,
        humidity,
        pressure,
        speed,
        main,
        country,
        sunset,
        name,
      };

      setWeatherInfo(weatherData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {}, []);

  return (
    <div className="flex flex-col items-center bg-zinc-800 h-screen ">
      <div className="flex flex-row items-center justify-center w-8/12 sm:w-5/12 lg:w-3/12 mt-20 m-12 bg-gray-200 rounded-lg relative">
        <input
          placeholder="search..."
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 p-1.5 w-full rounded-lg px-4"
        />

        {/* search button  */}

        <button
          onClick={getWeather}
          className=" absolute right-0  bg-blue-300 border-r border-black rounded-r-lg py-1.5
           sm:w-24 w-18 text-white cursor-pointer hover:bg-blue-400 transition duration-300 ease-in-out"
        >
          Search
        </button>
      </div>

      <WeatherCard weatherInfo={weatherInfo} />
    </div>
  );
}

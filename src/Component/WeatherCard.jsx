import React, { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { WiSunset } from "react-icons/wi";
import { RiCloudWindyLine } from "react-icons/ri";
import { WiCloud } from "react-icons/wi";
import { WiDayThunderstorm } from "react-icons/wi";
import { FaCloudSunRain } from "react-icons/fa";
import { FaCloudRain } from "react-icons/fa";
import { MdFoggy } from "react-icons/md";
import { FaRegSnowflake } from "react-icons/fa6";
import { CiCloudDrizzle } from "react-icons/ci";
import { WiSmoke } from "react-icons/wi";
import { GiTornado } from "react-icons/gi";

function WeatherCard({ weatherInfo }) {
  const [weatherState, setWeatherState] = useState(false);

  const { temp, humidity, pressure, speed, main, country, sunset, name } =
    weatherInfo;

  let sec = sunset;
  let date = new Date(sec * 1000); // convert seconds to milliseconds
  let sunsetTime = `${date.getHours()}:${date.getMinutes()}`; // format the time

  useEffect(() => {
    if (main) {
      switch (main) {
        case "Clouds":
          setWeatherState(<WiCloud />);
          break;
        case "Haze":
          setWeatherState(<WiHumidity />);
          break;
        case "Clear":
          setWeatherState(<FiSun />);
          break;
        case "Mist":
          setWeatherState(<WiSunset />);
          break;
        case "DayThunderstorm":
          setWeatherState(<WiDayThunderstorm />);
          break;
        case "CloudSunRain":
          setWeatherState(<FaCloudSunRain />);
          break;
        case "CloudRain":
          setWeatherState(<FaCloudRain />);
          break;
        case "Fog":
          setWeatherState(<MdFoggy />);
          break;
        case "Snow":
          setWeatherState(<FaRegSnowflake />);
          break;
        case "Drizzle":
          setWeatherState(<CiCloudDrizzle />);
          break;
        case "Smoke":
          setWeatherState(<WiSmoke />);
          break;
        case "Tornado":
          setWeatherState(<GiTornado />);
          break;
        default:
          setWeatherState(<FiSun />);
          break;
      }
    }
  }, [main]);

  return (
    <>
      <article className="flex flex-col border-2  shadow-black shadow-xl rounded-xl w-full  sm:w-7/12 md:w-7/12 lg:w-5/12 bg-white overflow-hidden">
        <div>
          <i className="flex items-center justify-center text-6xl sm:text-9xl h-44">
            {weatherState}
          </i>
        </div>

        {/* two part divided */}

        <div className=" relative bg-black text-white flex flex-row items-center h-28 justify-around">
          <div className=" absolute left-0 flex flex-row items-center w-8/12 h-full">
            <h1 className=" text-3xl sm:text-4xl pl-3">{temp}&deg; </h1>
            <div className="flex flex-col justify-center w-5/12 h-full m-3">
              <p className="text-2xl"> {main}</p>
              <span className="">
                {name} {country}
              </span>
            </div>
          </div>
          <div className="absolute right-0 flex items-center justify-center h-full w-4/12 font-extrabold text-sm  text-xl bg-teal-200">
            <h2 className="flex items-center justify-center h-full w-full p-20 ">
              {new Date().toLocaleString()}
            </h2>
          </div>
        </div>

        {/* last part of weather  */}

        <div className="flex flex-row justify-around gap-2 text-xs sm:text-base bg-gray-200 w-full rounded-b-xl">
          <div className="flex flex-row items-center gap-1 ">
            <i className="text-xl sm:text-4xl text-teal-400">
              <WiSunset />
            </i>
            <div className="text-[12px] sm:text-base ">
              <p>{sunsetTime}</p>
              <span>Sunset</span>
            </div>
          </div>
          <div className="flex flex-row items-center  gap-1">
            <i className="text-xl sm:text-3xl text-teal-400">
              <RiCloudWindyLine />
            </i>
            <div className="text-[12px] sm:text-base">
              <p>{pressure}</p>
              <span>Pressure</span>
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <i className="text-xl sm:text-4xl text-teal-400">
              <WiHumidity />
            </i>
            <div className="text-[12px] sm:text-base">
              <p>{humidity}</p>
              <span>Humiddity</span>
            </div>
          </div>
          <div className="flex flex-row items-center  gap-1">
            <i className=" text-xl sm:text-3xl text-teal-400">
              <FiWind />
            </i>
            <div className="text-[12px] sm:text-base">
              <p>{speed}</p>
              <span>Speed</span>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default WeatherCard;

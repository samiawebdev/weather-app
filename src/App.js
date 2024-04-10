import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";
import axios from "axios";
import logoLoading from '../src/assets/img/loading.gif'

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [indexOfTheClickedDay, setIndexOfTheClickedDay] = useState(0);

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const apiUrl = process.env.REACT_APP_WEATHER_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}?key=${apiKey}&q=Lyon&days=5&aqi=no&alerts=no`)
      .then(function ({ data }) { // Utilisez 'data' au lieu de 'response'
        if (!isDataLoaded) {
          setWeatherData(data);
          setIsDataLoaded(true);
          console.log(weatherData);
        }
        console.log(weatherData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [apiKey, apiUrl, isDataLoaded, weatherData]); // Ajoutez les dépendances ici

  function handleClickDay(index) {
    setIndexOfTheClickedDay(index);
  }

  return (
    <div className="App">
      <Header />
      <div className="row">
        <div className="col s12 m6 push-m3">
          {weatherData !== null && weatherData.forecast ? ( // Ajoutez une vérification pour weatherData.forecast
            <Weather 
              icon={weatherData.forecast.forecastday[indexOfTheClickedDay].day.condition.icon}
              tempC={weatherData.forecast.forecastday[indexOfTheClickedDay].day.avgtemp_c}
              windSpeed={weatherData.forecast.forecastday[indexOfTheClickedDay].day.maxwind_kph}
              windDegree={weatherData.forecast.forecastday[indexOfTheClickedDay].hour[0].wind_degree}
              handleClickDay={handleClickDay} 
            />
          ) : (
            <p><img src={logoLoading} alt="loading icon" /></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
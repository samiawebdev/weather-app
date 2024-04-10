
import "./weather.css"
import "../Days/days.css"
// import logoSun from '../../assets/img/sun.svg'
import Days from "../Days/Days"

function Weather({ weatherData, handleClickDay, icon, tempC, windSpeed, windDegree }) {
  // function handleClickDay(day) {
  //   console.log(day);
  // }
  console.log(weatherData);
  return (
    <div className="weather card blue-grey darken-1">

      {/* {isDtataLoaded ? () */}
      <div className="card-content white-text">
        <span className="card-title">Lyon</span>
        <p><img src={icon} alt="sun icon" /></p>
        <span className="temperature">{tempC}°</span>
        <div className="wind">Vent {windSpeed}km/h ({windDegree}°)</div>
      </div>
      <Days handleClickDay={handleClickDay} />
      {/* <Days /> */}
    </div>
  );
}

export default Weather;
import { useEffect, useState } from "react";

const WeatherCard = ({ data }) => {
  const { location, current } = data;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, [data]);

  const getWeatherIcon = (condition) => {
    const map = {
      Clear: "fas fa-sun",
      Clouds: "fas fa-cloud",
      Rain: "fas fa-cloud-showers-heavy",
      Drizzle: "fas fa-cloud-rain",
      Thunderstorm: "fas fa-bolt",
      Snow: "fas fa-snowflake",
      Mist: "fas fa-smog",
      Fog: "fas fa-smog"
    };

    return map[condition] || "fas fa-cloud";
  };

  return (
    <div className={`weather-card fade-in ${visible ? "show" : ""}`}>
      <h2>
        {location.city}, {location.country}
      </h2>

      <div className="temp">
        <i className={getWeatherIcon(current.condition)}></i>
        <span>{Math.round(current.tempC)}°C</span>
      </div>

      <p className="condition">{current.condition}</p>

      <div className="details" style={{ fontWeight: "bold" }}>
        <div>Feels Like: {Math.round(current.feelsLikeC)}°C</div>
        <div>Humidity: {current.humidity}%</div>
        <div>Wind: {current.windKph} km/h</div>
      </div>

      <span className="updated">
        Updated:{" "}
        {new Date(current.updatedAt).toLocaleString(undefined, {
          weekday: "short",
          hour: "2-digit",
          minute: "2-digit"
        })}
      </span>
    </div>
  );
};

export default WeatherCard;

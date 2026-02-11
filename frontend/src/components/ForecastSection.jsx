import { useEffect, useState } from "react";

const Forecast = ({ data }) => {
  const [visible, setVisible] = useState(false);

  // Fade-in animation on data load
  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, [data]);

  // FontAwesome icon map
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

  // Format day + time
  const formatDayTime = (item) => {
    const day = item.day || new Date(item.date || item.time).toLocaleDateString("en-US", { weekday: "short" });
    const time = item.time || new Date(item.date || item.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    return `${day}  ${time}`;
  };

  return (
    <div className={`forecast fade-in ${visible ? "show" : ""}`}>
      {data.map((item, index) => (
        <div className="forecast-card" key={index}>
          {/* Day + Time */}
          <p className="forecast-day" style={{ whiteSpace: "nowrap" }}>{formatDayTime(item)}</p>

          {/* Icon */}
          <i className={`forecast-icon ${getWeatherIcon(item.condition)}`}></i>

          {/* Temperature */}
          <strong>{Math.round(item.tempC)}°C</strong>
           <br />
          {/* Condition */}
          <span>{item.condition}</span>
        </div>
      ))}
    </div>
  );
};
99999999999999
export default Forecast;

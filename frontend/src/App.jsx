import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/ForecastSection";
import ForecastChart from "./components/ForecastChart";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

const fetchWeather = async () => {
  if (!city.trim()) return;

  try {
    setLoading(true);
    setError("");

    const weatherRes = await fetch(
      `${API_BASE}/weather?city=${city}`
    );

    if (!weatherRes.ok) {
      const errData = await weatherRes.json();
      throw new Error(errData.error?.message || "City not found");
    }

    const weatherData = await weatherRes.json();

    const forecastRes = await fetch(
      `${API_BASE}/forecast?city=${city}`
    );

    if (!forecastRes.ok) {
      throw new Error("Forecast data unavailable");
    }

    const forecastData = await forecastRes.json();

    setWeather(weatherData);
    setForecast(forecastData.forecast.slice(0, 5));

  } catch (err) {
    setError(err.message || "Something went wrong");
    setWeather(null);
    setForecast([]);
  } finally {
    setLoading(false);
  }
};


  return (
  <div className="app">
    <Header />

    <SearchBar
      city={city}
      setCity={setCity}
      onSearch={fetchWeather}
      loading={loading}
    />

    {loading && <p style={{ textAlign: "center" }}>Loading...</p>}
    {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

  {weather && forecast.length > 0 && (
  <div className="main-layout">
    
    {/* TOP ROW */}
    <div className="top-row">
      <WeatherCard data={weather} />
      <ForecastChart data={forecast} />
    </div>

    {/* BOTTOM ROW */}
    <div className="bottom-row">
      <Forecast data={forecast} />
    </div>

  </div>
)}
  </div>
);
}

export default App;

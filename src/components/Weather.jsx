import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeather = async () => {
    if (city === "") return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );

      const data = await res.json();

      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert("City not found");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="weather">
      <h2>🌤 Weather</h2>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Search</button>

      {weather && (
        <div className="weather-card">
          <h3>{weather.name}</h3>

          <p>🌡 {weather.main.temp} °C</p>

          <p>{weather.weather[0].main}</p>

          <p>Humidity : {weather.main.humidity}%</p>

          <p>Wind : {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
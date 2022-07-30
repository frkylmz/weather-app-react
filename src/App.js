import { useEffect, useState } from "react";
import Card from "./components/Card";
import { useTheme } from "./context/ThemeContext";
import "./App.css";
// import Footer from "./components/Footer";

function App() {
  const [city, setCity] = useState("İzmir");
  const [weatherData, setWeatherData] = useState([]);
  const { theme, setTheme } = useTheme();

  const mainBorder = theme === "light" ? "black" : "white";
  const mainColor = theme === "light" ? "black" : "white";

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    getData("İzmir");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(city);
    setCity(city);
  };

  async function getData(value) {
    const data = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=5c8026919afb4042bbb133346222906&q=${value}&days=3&aqi=no&alerts=no&lang=en
      `
    );
    const result = await data.json();
    setWeatherData(result.forecast.forecastday);
  }

  return (
    <div className={`body ${theme}`}>
      <div className="text-end fs-2">
        <button
          type="button"
          className="bg-transparent border-0"
          onClick={() => setTheme("light")}
          style={{
            visibility: theme === "light" && "hidden",
            marginRight: "-56px",
          }}
        >
          🌝
        </button>
        <button
          className="bg-transparent border-0"
          type="button"
          onClick={() => setTheme("dark")}
          style={{ visibility: theme === "dark" && "hidden" }}
        >
          🌚
        </button>
      </div>

      <div className="mt-5">
        <p className="text-center fw-bold fs-1" style={{ color: mainColor }}>
          Weather App
        </p>
      </div>

      <form className="justify-content-center d-flex " onSubmit={handleSubmit}>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            className="form-control bg-transparent border-3 fw-bold"
            placeholder="Search a city..."
            onChange={(event) => setCity(event.target.value)}
            value={city}
            style={{ borderColor: mainBorder, color: mainColor }}
          />
          <input
            type="submit"
            className="bg-transparent border-3 ms-2 rounded-3 ps-3 pe-3 fw-bold"
            style={{ borderColor: mainBorder }}
            value="🔎"
          />
        </div>
      </form>

      <div className="d-flex justify-content-center mt-2 bg-transparent mt-3 fw-bold row">
        {weatherData.map((item, i) => (
          <Card
            key={i}
            // date={gunler[tarih.getDay(item.date)]}
            date={days[new Date(item.date).getDay()]}
            mintemp={item.day.mintemp_c}
            maxtemp={item.day.maxtemp_c}
            condition={item.day.condition.text}
            icon={item.day.condition.icon}
          />
        ))}
      </div>
      <br />
    </div>
  );
}

export default App;

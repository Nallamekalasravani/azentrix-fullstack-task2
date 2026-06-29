import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";
import News from "./components/News";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "app dark" : "app light"}>

    <Navbar
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>

      <Hero />

      <Weather />

      <News />
    </div>
  );
}

export default App;
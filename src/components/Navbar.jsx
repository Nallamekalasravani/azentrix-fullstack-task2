import { motion } from "framer-motion";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="logo">🌤️ WeatherNews</div>

      <ul className="nav-links">
        <li><a href="#weather">Weather</a></li>
        <li><a href="#news">News</a></li>
      </ul>

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </motion.nav>
  );
}

export default Navbar;
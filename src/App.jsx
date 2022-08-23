import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import useLocalStorage from "use-local-storage";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div className="entireApp" data-theme={theme}>
      <button onClick={switchTheme}>Color mode</button>
      <Header />
      <Movies />
      <Footer />
    </div>
  );
}

export default App;

import React, { useContext, createContext } from "react";
import ThemeContext from "../Context/ThemeContext";

import AppTheme from "../Colors";

const HeroSection = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>Context API theme toggler</h1>
      <p>Click Below for Theme</p>
      <button
        onClick={() => {
          setThemeMode(themeMode === "light" ? "dark" : "light");
        }}
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#FFF",
          border: `${currentTheme.border}`,
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default HeroSection;

import React, { useContext } from "react";

import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <span>
        {themeMode === "light" ? (
          <img src="https://img.icons8.com/bubbles/50/000000/partly-cloudy-night.png" />  
          // night mode
        ) : (
          <img src="https://img.icons8.com/fluent/50/000000/sun.png" />
          // light mode
        )}
      </span>
    </div>
  );
};

export default ThemeToggler;

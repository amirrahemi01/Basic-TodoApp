import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function DarkMode() {

  function setDarkMode() {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedThemeType", "dark");
  }

  function setLightMode() {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedThemeType", "light");
  }

  const selectedTheme = localStorage.getItem("selectedThemeType");

  if (selectedTheme === "dark") {
    setDarkMode();
  }

  function toggleTheme(e) {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  }

  return (
    <div className="Dark-Mode">
      <input
        className="Dark-Mode-Input"
        type="checkbox"
        id="Dark-Mode-Toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === 'dark'}
      />

      <label className="Dark-Mode-Lable" for="Dark-Mode-Toggle">
        <FontAwesomeIcon icon={faMoon} className="moon" />
        <FontAwesomeIcon icon={faSun} className="sun" />
      </label>

      <h1>ToDo-List</h1>

    </div>
  );
}

export default DarkMode;

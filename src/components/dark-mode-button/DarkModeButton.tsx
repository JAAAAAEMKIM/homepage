"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import RoundButton from "../round-button/RoundButton";

const KEY = "DARK_MODE";

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const changeMode = (value: boolean) => {
    setIsDarkMode(value);
    window.localStorage.setItem(KEY, String(value));
    const body = document.querySelector("body");
    if (!body) return;

    body.dataset.theme = value ? "dark" : "light";
  };

  useEffect(() => {
    const storedValue = window.localStorage.getItem(KEY);
    if (storedValue !== null) {
      changeMode(storedValue === "true");
    }
  }, []);

  return (
    <RoundButton onClick={() => changeMode(!isDarkMode)}>
      <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
    </RoundButton>
  );
};

export default DarkModeButton;

import React, { useEffect, useState } from "react";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";
import "./ToggleMode.css";

const ToggleMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved user preference on load
    const userPreference = localStorage.getItem("theme");
    const isDarkModePreferred = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme = userPreference
      ? userPreference === "dark"
      : isDarkModePreferred;
    setIsDark(initialTheme);
    document.documentElement.setAttribute(
      "data-theme",
      initialTheme ? "dark" : "light"
    );
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.setAttribute(
      "data-theme",
      newTheme ? "dark" : "light"
    );
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <button className="w-8 h-8" onClick={toggleTheme}>
      {isDark ? (
        <SunIcon className="size-5 inline" />
      ) : (
        <MoonIcon className="size-4 inline" />
      )}
    </button>
  );
};

export default ToggleMode;

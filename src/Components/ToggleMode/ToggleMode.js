import React, { useEffect, useState } from 'react';

const ToggleMode = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved user preference on load
    const userPreference = localStorage.getItem('theme');
    const isDarkModePreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = userPreference ? (userPreference === 'dark') : isDarkModePreferred;
    setIsDark(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme}>
      {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ToggleMode;
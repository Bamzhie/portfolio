// DarkModeToggle.js
import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('isDarkMode') === 'true'
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('isDarkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('isDarkMode', 'false');
    }
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={handleDarkModeToggle}>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;

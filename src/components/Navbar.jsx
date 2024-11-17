import React, { useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  
    if (!darkMode) {
      document.documentElement.style.setProperty('--clr-bg', '#262626');
      document.documentElement.style.setProperty('--clr-bg-section', '#333333');
      document.documentElement.style.setProperty('--clr-bg-footer', '#1a1a1a');
      document.documentElement.style.setProperty('--clr-text-body', '#ffffff');
      document.documentElement.style.setProperty('--clr-text-heading', '#f3f6ff');
      document.documentElement.style.setProperty('--clr-text-navigation', '#ffffff');
      document.documentElement.style.setProperty('--white-to-gray', '#444444');
    } else {
      document.documentElement.style.setProperty('--clr-bg', '#ffffff');
      document.documentElement.style.setProperty('--clr-bg-section', '#f9f9f9');
      document.documentElement.style.setProperty('--clr-bg-footer', '#333333');
      document.documentElement.style.setProperty('--clr-text-body', '#333333');
      document.documentElement.style.setProperty('--clr-text-heading', '#161617');
      document.documentElement.style.setProperty('--clr-text-navigation', '#5d5d5e');
      document.documentElement.style.setProperty('--white-to-gray', '#ffffff');
    }
  };
  
  return (
    <>
      <nav
        className={`main-nav ${darkMode ? 'dark-mode-active' : ''}`}
        aria-label="main navigation"
      >
        <div className="container">
          <a href="">
            <img src="/solid.svg" alt="NVBA LOGO" />
          </a>

          <div className="darkmode-toggle">
            <p>{darkMode ? 'Dark Mode' : 'Light Mode'}</p>
            <label className="toggle">
              <input
                type="checkbox"
                id="darkmode-switch"
                onChange={toggleDarkMode}
                checked={darkMode}
              />
              <span className="slider"></span>
            </label>
          </div>

          <ul id="main-menu" className="main-menu">
            <li>
              <a href="#" className="nav-link">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-primary">
                <img src="/user-solid.svg" alt="" />
                <span>Sign in / up</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

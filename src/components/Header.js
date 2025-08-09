import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/header.css";

const Header = ({ allArticles }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setIsSearchVisible(false);
    }
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    if (!isSearchVisible) {
      setIsMenuOpen(false);
    }
  };

  const closeMobileMenu = () => {
    if (window.innerWidth <= 992) {
      setIsMenuOpen(false);
      setIsSearchVisible(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsMenuOpen(false);
        setIsSearchVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="header">
        <img className="cplogo" src="/images/cplogo.png" alt=""></img>

      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰"}
      </button>

      <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/html"
              className={location.pathname === "/html" ? "active" : ""}
              onClick={closeMobileMenu}
            >
              HTML
            </Link>
          </li>
          <li>
            <Link
              to="/css"
              className={location.pathname === "/css" ? "active" : ""}
              onClick={closeMobileMenu}
            >
              CSS
            </Link>
          </li>
          <li>
            <Link
              to="/javascript"
              className={location.pathname === "/javascript" ? "active" : ""}
              onClick={closeMobileMenu}
            >
              JavaScript
            </Link>
          </li>
          <li>
            <Link
              to="/react"
              className={location.pathname === "/react" ? "active" : ""}
              onClick={closeMobileMenu}
            >
              React
            </Link>
          </li>
          <li>
            <Link
              to="/node"
              className={location.pathname === "/node" ? "active" : ""}
              onClick={closeMobileMenu}
            >
              Node.js
            </Link>
          </li>
          <li>
            <Link
              to="/python"
              className={location.pathname === "/python" ? "active" : ""}
              onClick={closeMobileMenu}
            >
              Python
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <button className="menu-toggle search-toggle" onClick={toggleSearch}>
        {isSearchVisible ? "✕" : ""}
      </button>
    </header>
  );
};

export default Header;

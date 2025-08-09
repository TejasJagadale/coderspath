import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3>Popular Tutorials</h3>
        <ul>
          <li><Link to="/html" className={isActive('/html') ? 'active' : ''}>HTML Introduction</Link></li>
          <li><Link to="/css" className={isActive('/css') ? 'active' : ''}>CSS Flexbox</Link></li>
          <li><Link to="/javascript" className={isActive('/javascript') ? 'active' : ''}>JavaScript ES6</Link></li>
          <li><Link to="/react" className={isActive('/react') ? 'active' : ''}>React Hooks</Link></li>
          <li><Link to="/node" className={isActive('/node') ? 'active' : ''}>Node.js with Express</Link></li>
        </ul>
      </div>
      
      <div className="sidebar-section">
        <h3>Recent Articles</h3>
        <ul>
          <li><Link to="/articles/react-performance" className={isActive('/articles/react-performance') ? 'active' : ''}>Optimizing React Performance</Link></li>
          <li><Link to="/articles/css-grid" className={isActive('/articles/css-grid') ? 'active' : ''}>Mastering CSS Grid</Link></li>
          <li><Link to="/articles/javascript-promises" className={isActive('/articles/javascript-promises') ? 'active' : ''}>JavaScript Promises Explained</Link></li>
          <li><Link to="/articles/node-security" className={isActive('/articles/node-security') ? 'active' : ''}>Node.js Security Best Practices</Link></li>
        </ul>
      </div>
      
      <div className="ad-container">
        <p>Advertisement</p>
        <div id="sidebar-ad">
          <p>AdSense Ad Placeholder</p>
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
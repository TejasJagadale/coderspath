import React from 'react';
import '../styles/article.css';

const NodeSecurity = () => {
  return (
    <div className="article">
      <h1>Node.js Security Best Practices</h1>
      
      <div className="ad-container">
        <p>Advertisement</p>
        <div id="node-sec-top-ad">
          <p>AdSense Ad Placeholder</p>
        </div>
      </div>
      
      <p>Securing your Node.js applications is crucial in today's threat landscape. Follow these essential practices.</p>
      
      <h2>1. Keep Dependencies Updated</h2>
      <pre>{`# Check for vulnerabilities
npm audit

# Update packages
npm update

# Use npm-check-updates for major version updates
npx npm-check-updates -u`}</pre>
      
      <h2>2. Implement Helmet.js</h2>
      <pre>{`const express = require('express');
const helmet = require('helmet');

const app = express();
app.use(helmet());`}</pre>
      <p>Helmet sets various HTTP headers for security.</p>
      
      <div className="ad-container">
        <p>Advertisement</p>
        <div id="node-sec-middle-ad">
          <p>AdSense Ad Placeholder</p>
        </div>
      </div>
      
      <h2>3. Validate User Input</h2>
      <pre>{`const { body, validationResult } = require('express-validator');

app.post('/user', 
  body('email').isEmail(),
  body('password').isLength({ min: 8 }),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Process request
  }
);`}</pre>
      
      <h2>4. Rate Limiting</h2>
      <pre>{`const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per window
});

app.use(limiter);`}</pre>
      
      <h2>5. Secure Session Management</h2>
      <pre>{`const session = require('express-session');
const crypto = require('crypto');

app.use(session({
  secret: crypto.randomBytes(64).toString('hex'),
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: true,
    httpOnly: true,
    sameSite: 'strict'
  }
}));`}</pre>
      
      <div className="ad-container">
        <p>Advertisement</p>
        <div id="node-sec-bottom-ad">
          <p>AdSense Ad Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default NodeSecurity;
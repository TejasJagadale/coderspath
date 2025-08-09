import React from "react";
import "../styles/article.css";
import AdSenseAd from "../components/AdSenseAd";

const NodePage = () => {
  return (
    <div className="article">
      <h1>Node.js: JavaScript Runtime Environment</h1>

      <p>
        Node.js is an open-source, cross-platform, back-end JavaScript runtime
        environment that runs on the V8 engine and executes JavaScript code
        outside a web browser.
      </p>

      <h2>Core Modules</h2>

      <div className="code-example">
        <div className="code-example-title">HTTP Module</div>
        <pre>{`const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\\n');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});`}</pre>
      </div>

      <div className="code-example">
        <div className="code-example-title">File System Module</div>
        <pre>{`const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});`}</pre>
      </div>

      <h2>Express.js Framework</h2>
      <p>
        Express is a minimal and flexible Node.js web application framework that
        provides a robust set of features for web and mobile applications.
      </p>

      <pre>{`const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});`}</pre>

      <h2>Working with Databases</h2>

      <div className="code-example">
        <div className="code-example-title">MongoDB with Mongoose</div>
        <pre>{`const mongoose = require('mongoose');

// Connect to database
mongoose.connect('mongodb://localhost:27017/mydb', {useNewUrlParser: true});

// Define schema
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Create model
const User = mongoose.model('User', userSchema);

// Create and save user
const user = new User({ name: 'John', age: 30 });
user.save().then(() => console.log('User saved'));`}</pre>
      </div>

      <h2>REST API Development</h2>

      <pre>{`const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// In-memory database
let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' }
];

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST new user
app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).send();
});

app.listen(3000, () => console.log('Server started'));`}</pre>

      <AdSenseAd
        adSlot="7952094241"
        adFormat="auto"
        adStyle={{
          display: "block",
          margin: "30px auto",
          maxWidth: "336px",
          height: "280px"
        }}
      />
    </div>
  );
};

export default NodePage;

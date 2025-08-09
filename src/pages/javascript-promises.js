import React from 'react';
import '../styles/article.css';

const JavaScriptPromises = () => {
  return (
    <div className="article">
      <h1>JavaScript Promises Explained</h1>
      
      <div className="ad-container">
        <p>Advertisement</p>
        <div id="promises-top-ad">
          <p>AdSense Ad Placeholder</p>
        </div>
      </div>
      
      <p>Promises are the foundation of asynchronous programming in modern JavaScript. Let's break down how they work.</p>
      
      <h2>Creating a Promise</h2>
      <pre>{`const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation here
  if (success) {
    resolve(value); // Success case
  } else {
    reject(error); // Error case
  }
});`}</pre>
      
      <h2>Consuming Promises</h2>
      <pre>{`myPromise
  .then(value => {
    // Handle success
  })
  .catch(error => {
    // Handle error
  })
  .finally(() => {
    // Always executes
  });`}</pre>
      
      <div className="ad-container">
        <p>Advertisement</p>
        <div id="promises-middle-ad">
          <p>AdSense Ad Placeholder</p>
        </div>
      </div>
      
      <h2>Promise Methods</h2>
      <pre>{`// Wait for all promises to complete
Promise.all([promise1, promise2])
  .then(values => console.log(values));

// Wait for first promise to settle
Promise.race([promise1, promise2])
  .then(value => console.log(value));

// Wait for all to complete (regardless of rejection)
Promise.allSettled([promise1, promise2])
  .then(results => console.log(results));`}</pre>
      
      <h2>Async/Await Syntax</h2>
      <pre>{`async function fetchData() {
  try {
    const response = await fetch('api/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}`}</pre>
      
      <div className="ad-container">
        <p>Advertisement</p>
        <div id="promises-bottom-ad">
          <p>AdSense Ad Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptPromises;
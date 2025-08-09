import React from "react";
import "../styles/article.css";
import AdSenseAd from "../components/AdSenseAd";

const JavaScriptPage = () => {
  return (
    <div className="article">
      <h1>JavaScript: The Language of the Web</h1>

      <p>
        JavaScript is a high-level, interpreted programming language that
        conforms to the ECMAScript specification. It is the core technology of
        the web, enabling interactive web pages and is used by 98% of all
        websites.
      </p>

      <h2>JavaScript History</h2>
      <p>
        JavaScript was created by Brendan Eich in 1995 while working at
        Netscape. Key milestones:
      </p>
      <ul>
        <li>1997: ECMAScript 1 (First standardized version)</li>
        <li>2009: ES5 (Major enhancements)</li>
        <li>2015: ES6/ES2015 (Biggest update with classes, modules, etc.)</li>
        <li>Annual updates since 2015 (ES2016, ES2017, etc.)</li>
      </ul>

      <h2>Basic Syntax</h2>

      <div className="code-example">
        <div className="code-example-title">Variables and Data Types</div>
        <pre>{`// Variables
let name = 'John';      // String
const age = 30;         // Number
let isStudent = true;   // Boolean
let fruits = ['Apple', 'Banana']; // Array
let person = {          // Object
  name: 'John',
  age: 30
};
let nothing = null;     // Null
let notDefined;         // Undefined

// Typeof operator
console.log(typeof name); // "string"`}</pre>
      </div>

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

      <div className="code-example">
        <div className="code-example-title">Operators</div>
        <pre>{`// Arithmetic
let sum = 10 + 5;  // 15
let mod = 10 % 3;  // 1

// Comparison
console.log(5 == '5');   // true (loose equality)
console.log(5 === '5');  // false (strict equality)

// Logical
console.log(true && false);  // false (AND)
console.log(true || false);  // true (OR)
console.log(!true);          // false (NOT)

// Ternary
let status = (age >= 18) ? 'Adult' : 'Minor';`}</pre>
      </div>

      <h2>Control Structures</h2>

      <div className="code-example">
        <div className="code-example-title">Conditionals</div>
        <pre>{`// If-else
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

// Switch
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  // ...
  default:
    day = "Unknown";
}`}</pre>
      </div>

      <div className="code-example">
        <div className="code-example-title">Loops</div>
        <pre>{`// For loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// For...of (arrays)
for (const fruit of fruits) {
  console.log(fruit);
}

// For...in (objects)
for (const key in person) {
  console.log(key, person[key]);
}`}</pre>
      </div>

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

      <h2>Functions</h2>

      <div className="code-example">
        <div className="code-example-title">Function Types</div>
        <pre>{`// Function declaration
function greet(name) {
  return 'Hello ' + name;
}

// Function expression
const greet = function(name) {
  return 'Hello ' + name;
};

// Arrow function (ES6+)
const greet = (name) => {
  return \`Hello \${name}\`;
};

// Default parameters
function greet(name = 'Guest') {
  return \`Hello \${name}\`;
}

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b);
}`}</pre>
      </div>

      <h2>Arrays</h2>

      <div className="code-example">
        <div className="code-example-title">Array Methods</div>
        <pre>{`const numbers = [1, 2, 3, 4, 5];

// Map (transform)
const doubled = numbers.map(n => n * 2);

// Filter
const evens = numbers.filter(n => n % 2 === 0);

// Reduce
const total = numbers.reduce((sum, n) => sum + n, 0);

// Find
const firstEven = numbers.find(n => n % 2 === 0);

// Some/Every
const hasNegative = numbers.some(n => n < 0);
const allPositive = numbers.every(n => n > 0);

// Sort
const sorted = numbers.sort((a, b) => a - b);`}</pre>
      </div>

      <h2>Objects</h2>

      <div className="code-example">
        <div className="code-example-title">Object Features</div>
        <pre>{`// Object creation
const person = {
  name: 'John',
  age: 30,
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
};

// Accessing properties
console.log(person.name);       // Dot notation
console.log(person['age']);     // Bracket notation

// Object destructuring
const { name, age } = person;

// Spread operator
const newPerson = { ...person, city: 'New York' };

// Classes (ES6)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
}`}</pre>
      </div>

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

      <h2>DOM Manipulation</h2>
      <p>
        The Document Object Model (DOM) is a programming interface for web
        documents.
      </p>

      <div className="code-example">
        <div className="code-example-title">DOM Methods</div>
        <pre>{`// Selecting elements
const el = document.getElementById('id');
const els = document.querySelectorAll('.class');

// Modifying elements
el.textContent = 'New text';
el.innerHTML = '<strong>Bold text</strong>';
el.style.color = 'red';
el.classList.add('active');

// Creating elements
const newEl = document.createElement('div');
document.body.appendChild(newEl);

// Events
el.addEventListener('click', (e) => {
  console.log('Clicked', e.target);
});

// Forms
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
});`}</pre>
      </div>

      <h2>Asynchronous JavaScript</h2>

      <div className="code-example">
        <div className="code-example-title">Callbacks</div>
        <pre>{`function fetchData(callback) {
  setTimeout(() => {
    callback('Data received');
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});`}</pre>
      </div>

      <div className="code-example">
        <div className="code-example-title">Promises</div>
        <pre>{`const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data received');
    // or reject('Error occurred');
  }, 1000);
});

promise
  .then(data => console.log(data))
  .catch(error => console.error(error));`}</pre>
      </div>

      <div className="code-example">
        <div className="code-example-title">Async/Await</div>
        <pre>{`async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();`}</pre>
      </div>

      <h2>Modern JavaScript (ES6+)</h2>

      <div className="code-example">
        <div className="code-example-title">ES6+ Features</div>
        <pre>{`// Template literals
const message = \`Hello \${name}, you are \${age} years old\`;

// Arrow functions
const square = x => x * x;

// Default parameters
function greet(name = 'Guest') { ... }

// Rest/spread
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];

// Destructuring
const [first, second] = nums;
const { name, age } = person;

// Modules
// In file.js: export const pi = 3.14;
// In app.js: import { pi } from './file';

// Optional chaining
const street = user?.address?.street;

// Nullish coalescing
const value = input ?? 'default';`}</pre>
      </div>

      <h2>Error Handling</h2>

      <div className="code-example">
        <div className="code-example-title">Try/Catch</div>
        <pre>{`try {
  // Code that might throw an error
  nonExistentFunction();
} catch (error) {
  console.error('An error occurred:', error.message);
} finally {
  console.log('This always runs');
}`}</pre>
      </div>

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

      <h2>JavaScript Best Practices</h2>
      <ol>
        <li>
          Use <code>const</code> by default, <code>let</code> when rebinding is
          needed
        </li>
        <li>Always declare variables before use</li>
        <li>
          Use strict equality (<code>===</code>) instead of loose equality (
          <code>==</code>)
        </li>
        <li>Use template literals for string concatenation</li>
        <li>
          Follow consistent naming conventions (camelCase for
          variables/functions)
        </li>
        <li>Always handle errors and rejected promises</li>
        <li>Avoid global variables when possible</li>
        <li>Use arrow functions for concise callbacks</li>
        <li>Modularize code into smaller functions</li>
        <li>Keep functions pure when possible (no side effects)</li>
      </ol>

      <h2>Conclusion</h2>
      <p>
        JavaScript is a versatile language that powers the modern web. From
        simple DOM manipulations to complex single-page applications, JavaScript
        continues to evolve with new features and capabilities. Mastering
        JavaScript fundamentals is essential for any web developer, and
        understanding modern ES6+ features will make you more productive and
        write cleaner code.
      </p>
    </div>
  );
};

export default JavaScriptPage;

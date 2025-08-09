import React from "react";
import "../styles/article.css";
import AdSenseAd from "../components/AdSenseAd";

const ReactPage = () => {
  return (
    <div className="article">
      <h1>React: A JavaScript Library for Building User Interfaces</h1>

      <section>
        <p>
          React is an open-source JavaScript library for building user
          interfaces. It is maintained by Meta (formerly Facebook) and a
          community of individual developers and companies. React can be used as
          a base in the development of single-page or mobile applications.
        </p>

        <h2>Why Use React?</h2>
        <ul>
          <li>
            <strong>Component-Based:</strong> Build encapsulated components that
            manage their own state
          </li>
          <li>
            <strong>Declarative:</strong> Design simple views for each state in
            your application
          </li>
          <li>
            <strong>Learn Once, Write Anywhere:</strong> Develop new features
            without rewriting existing code
          </li>
          <li>
            <strong>Virtual DOM:</strong> Efficient updates and rendering with a
            virtual representation of the UI
          </li>
          <li>
            <strong>Rich Ecosystem:</strong> Large community and extensive
            third-party library support
          </li>
        </ul>
      </section>

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

      <section>
        <h2>Getting Started</h2>
        <p>To use React in your project, you can either:</p>

        <h3>1. Include React from CDN</h3>
        <pre>{`<script src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>`}</pre>

        <h3>2. Create React App</h3>
        <pre>{`npx create-react-app my-app
cd my-app
npm start`}</pre>

        <h3>3. Next.js or Vite</h3>
        <p>
          For more advanced setups, you can use frameworks like Next.js or Vite
          with React.
        </p>
      </section>

      <section>
        <h2>Core Concepts</h2>

        <h3>Components</h3>
        <p>
          React applications are built using reusable components. Components are
          like JavaScript functions that return HTML elements.
        </p>

        <div className="code-example">
          <div className="code-example-title">Functional Component</div>
          <pre>{`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`}</pre>
        </div>

        <div className="code-example">
          <div className="code-example-title">Class Component</div>
          <pre>{`class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}`}</pre>
        </div>

        <h3>JSX</h3>
        <p>
          JSX stands for JavaScript XML. It allows writing HTML in React and
          makes it easier to write and add HTML.
        </p>

        <pre>{`const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);`}</pre>

        <p>Without JSX, the same code would look like this:</p>

        <pre>{`const myElement = React.createElement('h1', {}, 'I do not use JSX!');`}</pre>

        <h3>Rendering Elements</h3>
        <p>Elements are the smallest building blocks of React apps:</p>
        <pre>{`const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));`}</pre>
      </section>

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

      <section>
        <h2>React Hooks</h2>
        <p>
          Hooks allow function components to have access to state and other
          React features. They were added in React 16.8.
        </p>

        <div className="code-example">
          <div className="code-example-title">useState</div>
          <pre>{`import { useState } from 'react';

function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  
  return (
    <div>
      <h1>My {brand}</h1>
      <p>It is a {model} from {year}.</p>
    </div>
  );
}`}</pre>
        </div>

        <div className="code-example">
          <div className="code-example-title">useEffect</div>
          <pre>{`import { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // Empty dependency array means run only once

  return <h1>I've rendered {count} times!</h1>;
}`}</pre>
        </div>

        <h3>Other Important Hooks</h3>
        <ul>
          <li>
            <strong>useContext:</strong> Access context in function components
          </li>
          <li>
            <strong>useReducer:</strong> Alternative to useState for complex
            state logic
          </li>
          <li>
            <strong>useCallback:</strong> Memoize functions to prevent
            unnecessary re-renders
          </li>
          <li>
            <strong>useMemo:</strong> Memoize expensive calculations
          </li>
          <li>
            <strong>useRef:</strong> Access DOM elements directly
          </li>
        </ul>
      </section>

      <section>
        <h2>React Props</h2>
        <p>
          Props are arguments passed into React components. They are passed to
          components via HTML attributes.
        </p>

        <pre>{`function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

function Garage() {
  return (
    <div>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </div>
  );
}`}</pre>

        <h3>PropTypes</h3>
        <p>React has built-in type checking abilities to catch bugs:</p>

        <pre>{`import PropTypes from 'prop-types';

function Student(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};`}</pre>
      </section>

      <section>
        <h2>React Events</h2>
        <p>React events are named using camelCase, rather than lowercase:</p>

        <pre>{`function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}`}</pre>

        <h3>Synthetic Events</h3>
        <p>
          React events are SyntheticEvent wrappers around native events with
          cross-browser compatibility.
        </p>
      </section>

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

      <section>
        <h2>React Forms</h2>
        <p>
          React forms work differently than HTML forms to provide more control.
        </p>

        <h3>Controlled Components</h3>
        <pre>{`function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}`}</pre>

        <h3>Handling Multiple Inputs</h3>
        <pre>{`function Reservation() {
  const [inputs, setInputs] = useState({
    going: true,
    numberOfGuests: 2
  });

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    setInputs(values => ({...values, [name]: value}));
  }

  return (
    <form>
      <label>
        Is going:
        <input
          name="going"
          type="checkbox"
          checked={inputs.going}
          onChange={handleChange} />
      </label>
      <br />
      <label>
        Number of guests:
        <input
          name="numberOfGuests"
          type="number"
          value={inputs.numberOfGuests}
          onChange={handleChange} />
      </label>
    </form>
  );
}`}</pre>
      </section>

      <section>
        <h2>React Router</h2>
        <p>
          React Router enables navigation between views in a React application:
        </p>

        <pre>{`import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}`}</pre>
      </section>

      <section>
        <h2>React Context API</h2>
        <p>
          Context provides a way to pass data through the component tree without
          having to pass props down manually at every level.
        </p>

        <pre>{`// Create a Context
const UserContext = React.createContext();

// Provide the Context
function App() {
  return (
    <UserContext.Provider value="John Doe">
      <Component1 />
    </UserContext.Provider>
  );
}

// Consume the Context
function Component3() {
  const user = useContext(UserContext);
  return <h1>User: {user}</h1>;
}`}</pre>
      </section>

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

      <section>
        <h2>React Best Practices</h2>
        <ul>
          <li>
            Keep components small and focused (Single Responsibility Principle)
          </li>
          <li>
            Use functional components with hooks instead of class components
          </li>
          <li>Use PropTypes or TypeScript for type checking</li>
          <li>
            Lift state up to the nearest common ancestor when multiple
            components need the same state
          </li>
          <li>
            Use keys when rendering lists to help React identify which items
            have changed
          </li>
          <li>
            Optimize performance with React.memo, useMemo, and useCallback
          </li>
          <li>Follow a consistent folder structure for larger projects</li>
        </ul>
      </section>

      <section>
        <h2>React vs Other Frameworks</h2>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>React</th>
              <th>Angular</th>
              <th>Vue</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Type</td>
              <td>Library</td>
              <td>Framework</td>
              <td>Framework</td>
            </tr>
            <tr>
              <td>Learning Curve</td>
              <td>Moderate</td>
              <td>Steep</td>
              <td>Gentle</td>
            </tr>
            <tr>
              <td>DOM</td>
              <td>Virtual DOM</td>
              <td>Real DOM</td>
              <td>Virtual DOM</td>
            </tr>
            <tr>
              <td>Data Binding</td>
              <td>One-way</td>
              <td>Two-way</td>
              <td>Two-way</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ReactPage;

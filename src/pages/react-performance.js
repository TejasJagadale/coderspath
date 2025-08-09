import React from 'react';
import '../styles/article.css';

const ReactPerformance = () => {
  return (
    <div className="article">
      <h1>Optimizing React Performance</h1>
      
      <div className="ad-container">
        <p>Advertisement</p>
        <div id="react-perf-top-ad">
          <p>AdSense Ad Placeholder</p>
        </div>
      </div>
      
      <p>React is fast by default, but as applications grow, you might encounter performance bottlenecks. Here are proven techniques to keep your React applications running smoothly.</p>
      
      <h2>1. Use React.memo for Component Memoization</h2>
      <pre>{`const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});`}</pre>
      <p>Prevents unnecessary re-renders when props haven't changed.</p>
      
      <h2>2. Implement useCallback for Function References</h2>
      <pre>{`const handleClick = useCallback(() => {
  // do something
}, [dependencies]);`}</pre>
      <p>Maintains stable function references between renders.</p>
      
      <h2>3. Optimize Context API Usage</h2>
      <p>Split contexts to avoid unnecessary re-renders:</p>
      <pre>{`// Instead of one large context
<UserContext.Provider value={{user, preferences, settings}}>

// Use multiple focused contexts
<UserContext.Provider value={user}>
  <PreferencesContext.Provider value={preferences}>`}</pre>
      
      <div className="ad-container">
        <p>Advertisement</p>
        <div id="react-perf-middle-ad">
          <p>AdSense Ad Placeholder</p>
        </div>
      </div>
      
      <h2>4. Virtualize Long Lists</h2>
      <p>Use libraries like react-window for efficient rendering:</p>
      <pre>{`import { FixedSizeList as List } from 'react-window';

<List
  height={400}
  itemCount={1000}
  itemSize={50}
  width={300}
>
  {Row}
</List>`}</pre>
      
      <h2>5. Lazy Load Components</h2>
      <pre>{`const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </Suspense>
  );
}`}</pre>
      
      <div className="ad-container">
        <p>Advertisement</p>
        <div id="react-perf-bottom-ad">
          <p>AdSense Ad Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default ReactPerformance;
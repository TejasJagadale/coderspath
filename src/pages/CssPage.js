import React from "react";
import "../styles/article.css";
import AdSenseAd from "../components/AdSenseAd";

const CssPage = () => {
  return (
    <div className="article">
      <h1>CSS: Styling the Web</h1>

      <p>
        Cascading Style Sheets (CSS) is a stylesheet language used to describe
        the presentation of a document written in HTML. CSS describes how
        elements should be rendered on screen, on paper, in speech, or on other
        media.
      </p>

      <h2>History of CSS</h2>
      <p>
        CSS was first proposed by Håkon Wium Lie in 1994 while working at CERN
        with Tim Berners-Lee. The first W3C CSS Recommendation was published in
        1996. Major versions include:
      </p>
      <ul>
        <li>CSS1 (1996)</li>
        <li>CSS2 (1998)</li>
        <li>CSS2.1 (2011)</li>
        <li>CSS3 (Modular approach starting from 1999)</li>
      </ul>

      <h2>How CSS Works</h2>
      <p>
        CSS works by associating rules with HTML elements. These rules govern
        how the content of specified elements should be displayed. A CSS rule
        contains:
      </p>
      <ol>
        <li>
          <strong>Selector</strong> - Targets HTML elements
        </li>
        <li>
          <strong>Declaration</strong> - Property:value pairs that define the
          styling
        </li>
      </ol>

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

      <h2>CSS Syntax</h2>
      <p>
        CSS consists of style rules that are interpreted by the browser and then
        applied to the corresponding elements in your document.
      </p>

      <pre>{`selector {
  property: value;
  another-property: value;
}`}</pre>

      <h2>CSS Selectors</h2>
      <p>Selectors are used to target the HTML elements you want to style:</p>

      <div className="code-example">
        <div className="code-example-title">Basic Selectors</div>
        <pre>{`/* Element selector */
p {
  color: blue;
}

/* Class selector */
.intro {
  font-size: 1.2em;
}

/* ID selector */
#header {
  background: #333;
}

/* Universal selector */
* {
  box-sizing: border-box;
}

/* Attribute selector */
input[type="text"] {
  border: 1px solid #ccc;
}`}</pre>
      </div>

      <div className="code-example">
        <div className="code-example-title">Combinator Selectors</div>
        <pre>{`/* Descendant selector */
div p {
  line-height: 1.6;
}

/* Child selector */
ul > li {
  list-style: square;
}

/* Adjacent sibling selector */
h1 + p {
  margin-top: 0;
}

/* General sibling selector */
h2 ~ p {
  color: #666;
}`}</pre>
      </div>

      <div className="code-example">
        <div className="code-example-title">
          Pseudo-classes and Pseudo-elements
        </div>
        <pre>{`/* Pseudo-classes */
a:hover {
  color: red;
}

li:nth-child(odd) {
  background: #f2f2f2;
}

input:focus {
  border-color: blue;
}

/* Pseudo-elements */
p::first-line {
  font-weight: bold;
}

p::first-letter {
  font-size: 2em;
}

p::selection {
  background: yellow;
}`}</pre>
      </div>

      <h2>CSS Specificity</h2>
      <p>
        Specificity determines which CSS rule is applied by browsers when
        multiple rules could apply to the same element:
      </p>
      <ul>
        <li>Inline styles (1000)</li>
        <li>IDs (100)</li>
        <li>Classes, attributes, pseudo-classes (10)</li>
        <li>Elements and pseudo-elements (1)</li>
      </ul>
      <p>The universal selector (*) has no specificity value.</p>

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

      <h2>CSS Box Model</h2>
      <p>
        All HTML elements can be considered as boxes. The CSS box model consists
        of:
      </p>
      <ul>
        <li>
          <strong>Content</strong> - The actual content of the box
        </li>
        <li>
          <strong>Padding</strong> - Clears an area around the content
        </li>
        <li>
          <strong>Border</strong> - A border that goes around the padding
        </li>
        <li>
          <strong>Margin</strong> - Clears an area outside the border
        </li>
      </ul>

      <div className="code-example">
        <div className="code-example-title">Box Model Example</div>
        <pre>{`.box {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 5px solid #333;
  margin: 30px;
  background: #f4f4f4;
  
  /* Alternative box model includes padding and border in width */
  box-sizing: border-box;
}`}</pre>
      </div>

      <h2>CSS Display Property</h2>
      <p>The display property specifies the display behavior of an element:</p>

      <div className="code-example">
        <div className="code-example-title">Common Display Values</div>
        <pre>{`/* Block elements take full width */
div {
  display: block;
}

/* Inline elements flow like text */
span {
  display: inline;
}

/* Inline-block combines features of both */
.button {
  display: inline-block;
  width: 100px;
}

/* Flex container */
.container {
  display: flex;
}

/* Grid container */
.grid {
  display: grid;
}

/* Hide element completely */
.hidden {
  display: none;
}`}</pre>
      </div>

      <h2>CSS Positioning</h2>
      <p>
        The position property specifies the type of positioning method used for
        an element:
      </p>

      <div className="code-example">
        <div className="code-example-title">Positioning Examples</div>
        <pre>{`/* Static (default) */
.static {
  position: static;
}

/* Relative to normal position */
.relative {
  position: relative;
  top: 20px;
  left: 30px;
}

/* Absolute within nearest positioned ancestor */
.absolute {
  position: absolute;
  top: 0;
  right: 0;
}

/* Fixed relative to viewport */
.fixed {
  position: fixed;
  bottom: 0;
  left: 0;
}

/* Sticky - hybrid of relative and fixed */
.sticky {
  position: sticky;
  top: 0;
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

      <h2>CSS Flexbox Layout</h2>
      <p>
        Flexbox is a one-dimensional layout method for laying out items in rows
        or columns.
      </p>

      <div className="code-example">
        <div className="code-example-title">Flex Container Properties</div>
        <pre>{`.container {
  display: flex;
  flex-direction: row | row-reverse | column | column-reverse;
  flex-wrap: nowrap | wrap | wrap-reverse;
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
  align-items: stretch | flex-start | flex-end | center | baseline;
  align-content: stretch | flex-start | flex-end | center | space-between | space-around;
  gap: 10px;
}`}</pre>
      </div>

      <div className="code-example">
        <div className="code-example-title">Flex Item Properties</div>
        <pre>{`.item {
  order: 5; /* default 0 */
  flex-grow: 0; /* default 0 */
  flex-shrink: 1; /* default 1 */
  flex-basis: auto; /* default auto */
  flex: 0 1 auto; /* shorthand for above three */
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}`}</pre>
      </div>

      <h2>CSS Grid Layout</h2>
      <p>CSS Grid Layout is a two-dimensional layout system for the web.</p>

      <div className="code-example">
        <div className="code-example-title">Grid Container Properties</div>
        <pre>{`.grid-container {
  display: grid | inline-grid;
  grid-template-columns: 1fr 1fr 1fr | repeat(3, 1fr) | 100px auto 200px;
  grid-template-rows: 100px auto 200px;
  grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";
  gap: 20px | 10px 20px; /* row-gap column-gap */
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;
}`}</pre>
      </div>

      <div className="code-example">
        <div className="code-example-title">Grid Item Properties</div>
        <pre>{`.grid-item {
  grid-column: 1 / 3 | 1 / span 2;
  grid-row: 1 / 4;
  grid-area: header; /* refers to template area name */
  justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch;
}`}</pre>
      </div>

      <h2>CSS Transitions and Animations</h2>

      <div className="code-example">
        <div className="code-example-title">Transitions</div>
        <pre>{`.button {
  background: blue;
  transition: background 0.3s ease, transform 0.2s;
}

.button:hover {
  background: darkblue;
  transform: scale(1.05);
}`}</pre>
      </div>

      <div className="code-example">
        <div className="code-example-title">Animations</div>
        <pre>{`@keyframes slidein {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.slide {
  animation: slidein 0.5s ease-out forwards;
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

      <h2>Responsive Design</h2>
      <p>
        Media queries allow you to apply CSS styles depending on a device's
        characteristics.
      </p>

      <div className="code-example">
        <div className="code-example-title">Media Query Examples</div>
        <pre>{`/* Default styles */
.container {
  width: 100%;
  padding: 15px;
}

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { 
  .container {
    max-width: 540px;
    margin: 0 auto;
  }
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

/* Dark mode preference */
@media (prefers-color-scheme: dark) {
  body {
    background: #222;
    color: #eee;
  }
}

/* Print styles */
@media print {
  nav, footer {
    display: none;
  }
}`}</pre>
      </div>

      <h2>CSS Variables (Custom Properties)</h2>
      <p>
        CSS variables allow you to store values that you want to reuse
        throughout your stylesheet.
      </p>

      <pre>{`:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --spacing: 16px;
}

.button {
  background: var(--primary-color);
  padding: var(--spacing);
}

.card {
  border: 1px solid var(--secondary-color);
  margin-bottom: var(--spacing);
}`}</pre>

      <h2>CSS Best Practices</h2>
      <ol>
        <li>Use semantic class names (avoid presentational names)</li>
        <li>Follow a consistent naming convention (BEM, SMACSS, etc.)</li>
        <li>Organize your CSS with comments and sections</li>
        <li>Use relative units (em, rem, %) for better scalability</li>
        <li>Minimize the use of !important</li>
        <li>Use CSS variables for maintainability</li>
        <li>Mobile-first approach for responsive design</li>
        <li>Use shorthand properties where appropriate</li>
        <li>Keep specificity low</li>
        <li>Use a CSS preprocessor (Sass, Less) for large projects</li>
      </ol>

      <h2>CSS Frameworks and Tools</h2>
      <p>Popular CSS frameworks and tools that can speed up development:</p>
      <ul>
        <li>
          <strong>Bootstrap</strong> - Most popular CSS framework
        </li>
        <li>
          <strong>Tailwind CSS</strong> - Utility-first CSS framework
        </li>
        <li>
          <strong>Bulma</strong> - Modern CSS framework based on Flexbox
        </li>
        <li>
          <strong>Materialize</strong> - Based on Material Design
        </li>
        <li>
          <strong>Sass/Less</strong> - CSS preprocessors
        </li>
        <li>
          <strong>PostCSS</strong> - Tool for transforming CSS with JavaScript
        </li>
      </ul>

      <>
        <h2>CSS Transforms</h2>
        <p>
          Transforms allow you to rotate, scale, skew, or translate elements:
        </p>

        <div className="code-example">
          <div className="code-example-title">Transform Examples</div>
          <pre>{`/* Rotate */
.rotate {
  transform: rotate(45deg);
}

/* Scale */
.scale {
  transform: scale(1.5);
}

/* Translate (move) */
.move {
  transform: translate(50px, 100px);
}

/* Skew */
.skew {
  transform: skew(30deg, 20deg);
}

/* Multiple transforms */
.multiple {
  transform: rotate(45deg) scale(1.2) translateX(10px);
}

/* 3D transforms */
.three-d {
  transform: perspective(500px) rotateY(45deg);
}`}</pre>
        </div>
      </>

      <>
        <h2>CSS Filters</h2>
        <p>Filters provide visual effects like blurring or color shifting:</p>

        <div className="code-example">
          <div className="code-example-title">Filter Examples</div>
          <pre>{`/* Blur */
.blur {
  filter: blur(5px);
}

/* Brightness */
.bright {
  filter: brightness(150%);
}

/* Contrast */
.contrast {
  filter: contrast(200%);
}

/* Grayscale */
.gray {
  filter: grayscale(100%);
}

/* Multiple filters */
.multi-filter {
  filter: contrast(175%) brightness(80%) sepia(30%);
}

/* Drop shadow */
.shadow {
  filter: drop-shadow(8px 8px 10px gray);
}`}</pre>
        </div>
      </>

      <>
        <h2>Advanced CSS Variables</h2>
        <p>
          CSS variables offer powerful theming and dynamic styling capabilities:
        </p>

        <div className="code-example">
          <div className="code-example-title">Advanced Variable Usage</div>
          <pre>{`/* Theme switching */
:root {
  --primary: #4285f4;
  --secondary: #34a853;
  --text: #202124;
  --bg: #ffffff;
}

[data-theme="dark"] {
  --primary: #8ab4f8;
  --secondary: #81c995;
  --text: #e8eaed;
  --bg: #202124;
}

/* Dynamic calculations */
.card {
  padding: calc(var(--spacing) * 2);
  margin: calc(var(--spacing) / 2);
}

/* JavaScript interaction */
document.documentElement.style.setProperty('--primary', newColor);

/* Fallback values */
.text {
  color: var(--custom-color, #333);
}

/* Scope variables to components */
.alert {
  --alert-bg: #fff3cd;
  background: var(--alert-bg);
}`}</pre>
        </div>
      </>

      <>
        <h2>CSS Blend Modes</h2>
        <p>Blend modes control how elements blend with their background:</p>

        <div className="code-example">
          <div className="code-example-title">Blend Mode Examples</div>
          <pre>{`/* Background blend modes */
.hero {
  background-image: url(image.jpg), linear-gradient(red, yellow);
  background-blend-mode: multiply;
}

/* Element blend modes */
.overlay {
  mix-blend-mode: screen;
}

/* Common blend modes */
.image {
  mix-blend-mode: overlay;
}

.texture {
  mix-blend-mode: hard-light;
}

/* Isolation property */
.isolated {
  isolation: isolate; /* Creates new stacking context */
}`}</pre>
        </div>
      </>

      <>
        <h2>CSS Scroll Snap</h2>
        <p>Create controlled scroll experiences with scroll snapping:</p>

        <div className="code-example">
          <div className="code-example-title">Scroll Snap Examples</div>
          <pre>{`/* Container */
.scroll-container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}

/* Children */
.section {
  scroll-snap-align: start;
  height: 100vh;
}

/* Horizontal carousel */
.carousel {
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  display: flex;
}

.slide {
  scroll-snap-align: center;
  min-width: 100%;
}

/* Optional snapping */
.gallery {
  scroll-snap-type: x proximity;
}

/* Padding adjustment */
.item {
  scroll-snap-padding: 20px;
}`}</pre>
        </div>
      </>

      <>
        <h2>CSS Logical Properties</h2>
        <p>Write direction-agnostic CSS for better internationalization:</p>

        <div className="code-example">
          <div className="code-example-title">Logical Properties Examples</div>
          <pre>{`/* Direction-independent spacing */
.text {
  margin-inline-start: 1rem; /* Left in LTR, right in RTL */
  padding-block-end: 2rem; /* Bottom in horizontal writing modes */
}

/* Sizing */
.box {
  inline-size: 100px; /* width */
  block-size: 200px; /* height */
}

/* Borders */
.border {
  border-inline: 1px solid #ccc; /* left/right borders */
}

/* Text alignment */
.rtl-text {
  text-align: start; /* left in LTR, right in RTL */
}

/* Float */
.image {
  float: inline-start; /* left in LTR, right in RTL */
}`}</pre>
        </div>
      </>

      <h2>Conclusion</h2>
      <p>
        CSS is a powerful styling language that gives you complete control over
        the presentation of your web pages. From basic text styling to complex
        layouts with Flexbox and Grid, CSS continues to evolve with new features
        that make web design more efficient and creative.
      </p>

      <p>
        To master CSS, practice regularly, experiment with different techniques,
        and stay updated with the latest CSS features and best practices.
      </p>
    </div>
  );
};

export default CssPage;

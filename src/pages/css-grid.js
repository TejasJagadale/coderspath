import React from "react";
import "../styles/article.css";
import AdSenseAd from "../components/AdSenseAd";

const CssGrid = () => {
  return (
    <div className="article">
      <h1>Mastering CSS Grid</h1>

      <p>
        CSS Grid Layout is a powerful two-dimensional layout system that
        revolutionized web design. Let's explore its full potential.
      </p>

      <h2>Basic Grid Structure</h2>
      <pre>{`.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
}`}</pre>

      <h2>Grid Template Areas</h2>
      <pre>{`.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }`}</pre>

      <div className="ad-container">
        <p>Advertisement</p>
        <div id="css-grid-middle-ad">
          <p>AdSense Ad Placeholder</p>
        </div>
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

      <h2>Responsive Grid Patterns</h2>
      <pre>{`/* Mobile first */
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

@media (min-width: 768px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}`}</pre>

      <h2>Advanced Techniques</h2>
      <p>Masonry layout with grid:</p>
      <pre>{`.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 10px; /* Control row height */
}

.item {
  grid-row-end: span 20; /* How many rows each item spans */
}`}</pre>

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

export default CssGrid;

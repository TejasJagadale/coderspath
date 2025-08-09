import React from "react";
import ArticleCard from "../components/ArticleCard";
import "../styles/article.css";
import AdSenseAd from "../components/AdSenseAd";

const Home = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt:
        "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
      category: "React",
      date: "May 15, 2023",
      route: "react"
    },
    {
      id: 2,
      title: "CSS Grid Layout: A Complete Guide",
      excerpt:
        "Master the CSS Grid layout system to create complex responsive web designs with ease.",
      category: "CSS",
      date: "May 10, 2023",
      route: "css"
    },
    {
      id: 3,
      title: "JavaScript ES6 Features You Should Know",
      excerpt:
        "Explore the most important ES6 features that modern JavaScript developers use every day.",
      category: "JavaScript",
      date: "May 5, 2023",
      route: "javascript"
    }
  ];

  return (
    <div className="home-page">
      <div className="hero">
        <h1>Welcome to CodersPath</h1>
        <p>
          Your comprehensive resource for learning web development and
          programming
        </p>
      </div>

      {/* Top Ad - Leaderboard */}
      <AdSenseAd
        adSlot="7952094241"
        adFormat="auto"
        adStyle={{
          display: "block",
          margin: "20px auto",
          maxWidth: "728px",
          height: "90px"
        }}
      />

      <section className="featured-content">
        <h2>Featured Tutorials</h2>
        <div className="article-grid">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
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

      <section className="categories">
        <h2>Browse by Category</h2>
        <div className="category-grid">
          <div className="category-card">
            <h3>
              <a href="/html">HTML</a>
            </h3>
            <p>Learn the foundation of web development</p>
          </div>
          <div className="category-card">
            <h3>
              <a href="/css">CSS</a>
            </h3>
            <p>Style your websites beautifully</p>
          </div>
          <div className="category-card">
            <h3>
              <a href="/javascript">JavaScript</a>
            </h3>
            <p>Make your websites interactive</p>
          </div>
          <div className="category-card">
            <h3>
              <a href="/react">React</a>
            </h3>
            <p>Build modern web applications</p>
          </div>
          <div className="category-card">
            <h3>
              <a href="/node">Node.js</a>
            </h3>
            <p>Create server-side applications</p>
          </div>
          <div className="category-card">
            <h3>
              <a href="/python">Python</a>
            </h3>
            <p>Learn one of the most versatile languages</p>
          </div>
        </div>
      </section>

      <AdSenseAd
        adSlot="7952094241"
        adFormat="auto"
        adStyle={{
          display: "block",
          margin: "20px auto",
          maxWidth: "728px",
          height: "90px"
        }}
      />
    </div>
  );
};

export default Home;

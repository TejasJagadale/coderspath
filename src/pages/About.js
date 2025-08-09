import React from 'react';
import '../styles/article.css';

const About = () => {
  return (
    <div className="article">
      <h1>About CodersPath</h1>
      
      <p>Welcome to CodersPath, your premier destination for comprehensive coding tutorials and programming resources. Our mission is to make coding accessible to everyone, from beginners to experienced developers looking to expand their skills.</p>
      
      <h2>Our Story</h2>
      <p>Founded in 2023, CodersPath began as a small blog with a handful of HTML and CSS tutorials. Today, we've grown into a comprehensive resource covering a wide range of programming languages and technologies, serving thousands of developers worldwide.</p>
      
      <h2>What We Offer</h2>
      <ul>
        <li><strong>In-depth tutorials</strong> on popular programming languages and frameworks</li>
        <li><strong>Practical examples</strong> and real-world projects</li>
        <li><strong>Up-to-date content</strong> reflecting the latest industry standards</li>
        <li><strong>Beginner-friendly</strong> explanations of complex concepts</li>
        <li><strong>Free resources</strong> available to everyone</li>
      </ul>
      
      <h2>Our Team</h2>
      <p>CodersPath is run by a team of passionate developers and educators who believe in the power of sharing knowledge. Our team includes:</p>
      
      <div className="team-grid">
        <div className="team-member">
          <h3>John Doe</h3>
          <p>Founder & Lead Developer</p>
          <p>10+ years of web development experience</p>
        </div>
        <div className="team-member">
          <h3>Jane Smith</h3>
          <p>Content Editor</p>
          <p>Specializes in JavaScript frameworks</p>
        </div>
        <div className="team-member">
          <h3>Mike Johnson</h3>
          <p>Tutorial Writer</p>
          <p>Python and data science expert</p>
        </div>
      </div>
      
      <h2>Our Values</h2>
      <p>At CodersPath, we're committed to:</p>
      <ul>
        <li><strong>Quality:</strong> Providing accurate, well-researched content</li>
        <li><strong>Accessibility:</strong> Making coding education available to all</li>
        <li><strong>Community:</strong> Fostering a supportive learning environment</li>
        <li><strong>Innovation:</strong> Staying ahead of technology trends</li>
      </ul>
    </div>
  );
};

export default About;
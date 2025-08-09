import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/article.css';

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <div className="article-meta">
        <span className="article-category">{article.category}</span>
        <span className="article-date">{article.date}</span>
      </div>
      <h3><Link to={`/${article.route}`}>{article.title}</Link></h3>
      <p>{article.excerpt}</p>
      <Link to={`/${article.id}`} className="read-more">Read More</Link>
    </div>
  );
};

export default ArticleCard;
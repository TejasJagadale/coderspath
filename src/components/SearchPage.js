import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import '../styles/article.css';

const SearchPage = ({ allArticles }) => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('q') || '';
    setQuery(searchQuery);

    if (searchQuery) {
      const filtered = allArticles.filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.content.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [location.search, allArticles]);

  return (
    <div className="article">
      <h1>Search Results for "{query}"</h1>
      
      {results.length > 0 ? (
        <div className="article-grid">
          {results.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <p>No results found. Try a different search term.</p>
      )}
    </div>
  );
};

export default SearchPage;
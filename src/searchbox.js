import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const SearchBox = ({ onSelectProduct }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query.trim() === '') {
      setSuggestions([]);
      return;
    }

    setLoading(true);
    setError(null);

    axios.get(`https://fakestoreapi.com/products?title=${query}`)
      .then(response => {
        setSuggestions(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
    }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSelectProduct = product => {
    setQuery('');
    onSelectProduct(product);
  };

  return (
    <div className="background-container">
      <input
        type="text"
        placeholder="Search for products..."
        value={query}
        onChange={handleInputChange}
      />
      {loading && <p style={{ color: 'white' }}>Loading...</p>} 
      {error && <p>Error: {error}</p>}
      <ul>
        {suggestions.map(product => (
          <li key={product.id} onClick={() => handleSelectProduct(product)}>
            {product.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;

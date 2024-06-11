import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';
import './BookSearch.css';

function BookSearch({ addToBookshelf }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        setQuery(e.target.value);
        if (e.target.value) {
            const response = await axios.get(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
            setResults(response.data.docs);
        } else {
            setResults([]);
        }
    };

    return (
        <div className="book-search">
            <input
                type="text"
                placeholder="Search for books..."
                value={query}
                onChange={handleSearch}
            />
            <div className="book-results">
                {results.map(book => (
                    <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
                ))}
            </div>
            <Link to="/bookshelf">Go to My Bookshelf</Link>
        </div>
    );
}

export default BookSearch;

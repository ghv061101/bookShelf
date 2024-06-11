import React from 'react';
import { Link } from 'react-router-dom';
import './Bookshelf.css';

function Bookshelf({ bookshelf }) {
    return (
        <div className="bookshelf">
            <h2>My Bookshelf</h2>
            <div className="book-list">
                {bookshelf.map(book => (
                    <div className="book-card" key={book.key}>
                        {book.cover_i ? (
                            <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt={book.title} />
                        ) : (
                            <div className="no-image">No Image</div>
                        )}
                        <h3>{book.title}</h3>
                        <p>{book.author_name?.join(', ')}</p>
                    </div>
                ))}
            </div>
            <Link to="/">Back to Search</Link>
        </div>
    );
}

export default Bookshelf;

import React from 'react';
import './BookCard.css';

function BookCard({ book, addToBookshelf }) {
    return (
        <div className="book-card">
            {book.cover_i ? (
                <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt={book.title} />
            ) : (
                <div className="no-image">No Image</div>
            )}
            <h3>{book.title}</h3>
            <p>{book.author_name?.join(', ')}</p>
            <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
        </div>
    );
}

export default BookCard;

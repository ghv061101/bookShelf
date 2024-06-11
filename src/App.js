import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookSearch from './BookSearch';
import Bookshelf from './Bookshelf';
import './App.css';

function App() {
    const [bookshelf, setBookshelf] = useState(() => {
        const savedBooks = localStorage.getItem('bookshelf');
        return savedBooks ? JSON.parse(savedBooks) : [];
    });

    const addToBookshelf = (book) => {
        if (!bookshelf.some(b => b.key === book.key)) {
            const updatedBookshelf = [...bookshelf, book];
            setBookshelf(updatedBookshelf);
            localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
        }
    };

    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<BookSearch addToBookshelf={addToBookshelf} />} />
                    <Route path="/bookshelf" element={<Bookshelf bookshelf={bookshelf} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

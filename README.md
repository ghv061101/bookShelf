# Bookshelf App

This is a React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage. Users can search for books, view search results, add books to their personal bookshelf, and view their bookshelf.

[Live Demo](https://mybookshelfi.netlify.app/)

## Features

- **Book Search:** Search for books in real-time using the Open Library API.
- **Add to Bookshelf:** Add books from search results to a personal bookshelf.
- **Persistent Storage:** The bookshelf is stored in the browser's localStorage, so it persists across sessions.
- **Responsive Design:** The application is responsive and works well on different screen sizes.

## Tech Stack

- **React:** Frontend library for building user interfaces.
- **Axios:** Promise-based HTTP client for making API requests.
- **CSS:** Styling the components.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- **Node.js**: Make sure you have Node.js installed. You can download it from [here](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/bookshelf-app.git
   cd bookshelf-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

- `src/`
  - `components/`
    - `BookCard.js`: Component for displaying individual book cards in search results and bookshelf.
    - `BookSearch.js`: Component for searching books and displaying search results.
    - `Bookshelf.js`: Component for displaying the user's bookshelf.
  - `App.js`: Main application component containing the router.
  - `index.js`: Entry point of the application.
  - `App.css`: Global styles for the application.
  - `BookSearch.css`: Styles for the book search component.
  - `Bookshelf.css`: Styles for the bookshelf component.
  - `BookCard.css`: Styles for the book card component.

## Usage

1. **Search for Books:** Enter the name of the book in the search input field. The results will be displayed in real-time as you type.
2. **Add to Bookshelf:** Click on the "Add to Bookshelf" button on the book cards to add books to your personal bookshelf.
3. **View Bookshelf:** Click on the "Go to My Bookshelf" link to view the books you have added to your bookshelf.

## API Reference

The application uses the [Open Library API](https://openlibrary.org/developers/api) to fetch book data. The search query is made to the following endpoint:

```
https://openlibrary.org/search.json?q=YOUR_QUERY&limit=10&page=1
```

### Query Parameters

- `q`: Name of the book.
- `limit`: Set to 10 results per page.
- `page`: Only display results from page 1.

## Screenshots
### Home Page

![Home Page]([path-to-your-screenshot](https://ibb.co/R9K6FPt))
### Search Page

![Search Page]([[path-to-your-screenshot](https://ibb.co/LkC8F0R)]

### Bookshelf Page

![Bookshelf Page]([path-to-your-screenshot](https://ibb.co/kq6CGr0))

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Open Library](https://openlibrary.org/) for providing the book data API.

---

Feel free to contribute to the project by submitting issues or pull requests. If you have any questions or suggestions, please open an issue.

---

Developed with ❤️ by [Harshavardhan Govindu](https://github.com/ghv061101)

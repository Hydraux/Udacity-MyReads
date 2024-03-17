import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "./Book";

/**
 *
 * @returns {JSX.Element} A page with a search bar. The search bar queries a list of books using https://reactnd-books-api.udacity.com
 */
function SearchPage({ handleShelfChange, books }) {
  const [queryBooks, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  /**
   * Handles state changes as the value of the search field is changed.
   * The API will only be called if the component is currently mounted and there is a non-empty query in the search field.
   */
  useEffect(async () => {
    let mounted = true;

    if (query === "") {
      setBooks([]);
    } else {
      if (mounted) {
        let res = await search(query, 2);
        if (res.error) {
          setBooks([]);
          return;
        }
        /// To ensure the state of the book change menu relfects our current book shelves, we need to check if any of our query results already exist on our list and update their current shelf as such.
        res.map((book) => {
          let b = books.find((b) => b.id === book.id);
          if (b) {
            book.shelf = b.shelf;
          }
          return book;
        });

        setBooks(res);
      }
    }

    return () => {
      mounted = false;
    };
  }, [query]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            onChange={handleChange}
            value={query}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.length > 0 &&
            queryBooks.map((book) => (
              <Book
                key={book.id}
                book={book}
                handleShelfChange={handleShelfChange}
              />
            ))}
        </ol>
      </div>
    </div>
  );
}

export default SearchPage;

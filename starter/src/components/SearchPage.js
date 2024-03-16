import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "./Book";

/**
 *
 * @returns {JSX.Element} A page with a search bar. The search bar queries a list of books using https://reactnd-books-api.udacity.com
 */
function SearchPage() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  /**
   * Handles state changes as the value of the search field is changed.
   * Will only be called if the component is currently mounted and there is a non-empty query in the search field.
   */
  useEffect(() => {
    let mounted = true;

    if (mounted && query !== "") {
      search(query, 2).then((res) => setBooks(res));
    }

    return () => {
      mounted = false;
    };
  }, [query]);

  const handleChange = (event) => {
    setQuery(event.target.value);
    console.log(query);
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
          {books.length > 0 && books.map((book) => <Book book={book} />)}
        </ol>
      </div>
    </div>
  );
}

export default SearchPage;

import Book from "./Book";

/**
 *
 * @books An array of books retrieved from https://reactnd-books-api.udacity.com
 * @title A title for the bookshelf. Displays in the upper left of the component
 * @handleShelfChange handles updating state and database when a book is moved to a different shelf.
 * @returns {JSX.Element} a div containing a horizontal list of book components
 */
function Bookshelf({ books, title, handleShelfChange }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} handleShelfChange={handleShelfChange} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Bookshelf;

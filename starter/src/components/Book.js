import BookshelfChanger from "./BookshelfChanger";

/**
 *
 * @book - An object created by fetching data from https://reactnd-books-api.udacity.com
 * @handleShelfChange  - handles updating state and database when a book is moved to a different shelf.
 * @description Parses data from a book object and inserts it into a component
 * @returns {JSX.Element} Component containing the cover, title, and authors of a book
 */
function Book({ book, handleShelfChange }) {

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: "url(" + book.imageLinks.thumbnail + ")",
          }}
        ></div>
        <BookshelfChanger shelf={book.shelf} setShelf={(shelf)=>handleShelfChange(book,shelf)}/>
      </div>
      <div className="book-title">{book.title}</div>

      <div className="book-authors">
        {/* verify there are books to be displayed given the query */}
        <span>{book.authors && book.authors.map((author) => author)}</span>
      </div>
    </div>
  );
}

export default Book;

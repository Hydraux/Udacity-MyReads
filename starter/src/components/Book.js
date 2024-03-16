import BookshelfChanger from "./BookshelfChanger";

/**
 *
 * @param {object} Book - An object created by fetching data from https://reactnd-books-api.udacity.com
 * @description Parses data from a book object and inserts it into a component
 * @returns {JSX.Element} Component containing the cover, title, and authors of a book
 */
function Book({ book }) {
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
        <BookshelfChanger />
      </div>
      <div className="book-title">{book.title}</div>

      <div className="book-authors">
        <span>{book.authors.map((author) => author)}</span>
      </div>
    </div>
  );
}
export default Book;

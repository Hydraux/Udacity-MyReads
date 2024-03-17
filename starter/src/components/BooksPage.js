import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

/**
 * @description Contains 3 shelves to store books in.
 * Loads books from https://reactnd-books-api.udacity.com.
 * @returns {JSX.Element} BookPage
 */
function BooksPage({ handleShelfChange, books }) {
    
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            handleShelfChange={handleShelfChange}
            title={"Currently Reading"}
            books={books.filter((book) => book.shelf === "currentlyReading")}
          />
          <Bookshelf
            handleShelfChange={handleShelfChange}
            title={"Want to Read"}
            books={books.filter((book) => book.shelf === "wantToRead")}
          />
          <Bookshelf
            handleShelfChange={handleShelfChange}
            title={"Read"}
            books={books.filter((book) => book.shelf === "read")}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to={"/search"}>Add a book</Link>
      </div>
    </div>
  );
}
export default BooksPage;

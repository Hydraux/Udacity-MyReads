import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../BooksAPI";
import Bookshelf from "./Bookshelf";

/**
 * @description Contains 3 shelves to store books in.
 * Loads books from https://reactnd-books-api.udacity.com.
 * @returns {JSX.Element} BookPage
 */
function BooksPage({handleShelfChange, setBooks, books}) {
  



  /**
   * Grabs all books from the API and sets the state of this component.
   * We will not make the API call again if the component is already mounted.
   * When the cleanup function is called, the mounted flag is toggled so we are ready to make the API call again.
   **/
  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getAll().then((res) => setBooks(res));
    }

    return () => {
      mounted = false;
    };
  }, []);

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

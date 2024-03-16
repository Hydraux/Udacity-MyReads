import { useEffect, useState } from "react";
import { getAll } from "../BooksAPI";
import Bookshelf from "./Bookshelf";

function BooksPage({ showSearchPage, setShowSearchpage }) {
    const [books,setBooks] = useState([]);
    console.log(books);
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
          <Bookshelf title={'Currently Reading'} books={books.filter((book)=>book.shelf === 'currentlyReading')}/>
          <Bookshelf title={'Want to Read'} books={books.filter((book)=>book.shelf === 'wantToRead')}/>
          <Bookshelf title={'Read'} books={books.filter((book)=>book.shelf === 'read')}/>
        </div>
      </div>
      <div className="open-search">
        <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
      </div>
    </div>
  );
}
export default BooksPage;

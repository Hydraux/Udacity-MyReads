import { useEffect, useState } from "react";
import { getAll } from "../BooksAPI";
import Book from "./Book";

function Bookshelf() {
  const [books, setBooks] = useState([]);

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
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book)=><li key={book.id}><Book book={book} /></li>)}
          <li>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 188,
                    backgroundImage:
                      'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
                  }}
                ></div>
                <div className="book-shelf-changer">
                  <select>
                    <option value="none" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">Ender's Game</div>
              <div className="book-authors">Orson Scott Card</div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Bookshelf;

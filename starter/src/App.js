import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { getAll, update } from "./BooksAPI";
import BooksPage from "./components/BooksPage";
import SearchPage from "./components/SearchPage";

function App() {
  const [books, setBooks] = useState([]);
  /// Updates a book's entry in the database with a new shelf.
  /// Modifies the state such that it reflects the modified shelf.
  const handleShelfChange = async (book, newShelf) => {
    console.log("handleShelfChange called in App.js");
    console.log(books);
    // update the book's shelf in the database
    let res = await update(book, newShelf);
    console.log(res);

    console.log(book.shelf);
    if (book.shelf !== undefined) {
      // update the state of the books array
      setBooks((prevBooks) =>
        prevBooks.map((b) => {
          /// change the shelf on the modified book.
          if (b.id === book.id) {
            return { ...b, shelf: newShelf };
          }
          return b;
        })
      );
    }
    else{
      book.shelf = newShelf;
      console.log("no book found, adding to list")
      setBooks(books.concat([book]));
    }
    console.log("books state after update:");
    console.log(books);
  };

  /**
   * Grabs all books from the API and sets the state of this component.
   * We will not make the API call again if the component is already mounted.
   * When the cleanup function is called, the mounted flag is toggled so we are ready to make the API call again.
   **/
  useEffect(() => {
    console.log("fetch API");
    let mounted = true;

    if (mounted) {
      getAll().then((res) => setBooks(res));
    }

    return () => {
      mounted = false;
    };
  }, []);
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <BooksPage handleShelfChange={handleShelfChange} books={books} />
        }
      />
      <Route
        path="/search"
        element={<SearchPage handleShelfChange={handleShelfChange} />}
      />
    </Routes>
  );
}

export default App;

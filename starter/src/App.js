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
    // update the book's shelf in the database
    let res = await update(book, newShelf);

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
      setBooks(books.concat([book]));
    }
  };

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
        element={<SearchPage handleShelfChange={handleShelfChange} books={books}/>}
      />
    </Routes>
  );
}

export default App;

import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { update } from "./BooksAPI";
import BooksPage from "./components/BooksPage";
import SearchPage from "./components/SearchPage";

function App() {
  const [books, setBooks] = useState([]);
  /// Updates a book's entry in the database with a new shelf.
  /// Modifies the state such that it reflects the modified shelf.
  const handleShelfChange = (book, newShelf) => {
    console.log("handleShelfChange called in App.js");
    update(book, newShelf);
    setBooks((prevBooks) =>
      prevBooks.map((b) => {
        if (b.id === book.id) {
          return { ...b, shelf: newShelf };
        }
        return b;
      })
    );
  };

  return (
    <Routes>
      <Route exact path="/" element={<BooksPage handleShelfChange={handleShelfChange} setBooks={setBooks}  books={books}/>} />
      <Route path="/search" element={<SearchPage handleShelfChange={handleShelfChange}/>} />
    </Routes>
  );
}

export default App;

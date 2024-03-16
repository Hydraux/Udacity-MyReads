import { useState } from "react";
import "./App.css";
import BooksPage from "./components/BooksPage";
import SearchPage from "./components/SearchPage";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage
          setShowSearchpage={setShowSearchpage}
          showSearchPage={showSearchPage}
        />
      ) : (
        <BooksPage showSearchPage={showSearchPage} setShowSearchpage={setShowSearchpage}/>
      )}
    </div>
  );
}

export default App;

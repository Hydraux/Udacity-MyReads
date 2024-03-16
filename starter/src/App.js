import { Route, Routes } from "react-router-dom";
import "./App.css";
import BooksPage from "./components/BooksPage";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<BooksPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;

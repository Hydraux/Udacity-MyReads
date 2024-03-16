import Book from "./Book";

function Bookshelf({books, title}) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book)=><li key={book.id}><Book book={book} /></li>)}
        </ol>
      </div>
    </div>
  );
}

export default Bookshelf;

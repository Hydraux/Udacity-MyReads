/**
 *
 * @shelf - which shelf the book is currently on.
 * @setShelf - a callback for modifying the shelf a book is on.
 * @returns
 */
function BookshelfChanger({ shelf='none', setShelf }) {
  return (
    <div className="book-shelf-changer">
      <select defaultValue={shelf} onChange={(e) => setShelf(e.target.value)}>
        <option value="disabled" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}
export default BookshelfChanger;

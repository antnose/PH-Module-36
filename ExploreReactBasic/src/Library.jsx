import Book from "./Book";

const Library = ({ books }) => {
  return (
    <>
      <h2>My national Central Library</h2>
      <p>Book Collection: {books.length} </p>
      <p>Address: </p>
      <ol>
        {books.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </ol>
    </>
  );
};

export default Library;

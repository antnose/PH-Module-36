const Book = ({ book }) => {
  return (
    <li>
      Book: {book.name}, price: {book.price}
    </li>
  );
};

export default Book;

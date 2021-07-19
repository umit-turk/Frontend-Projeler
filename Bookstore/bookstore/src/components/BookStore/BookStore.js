import React from "react";
import { BookField, Container } from "./BookStore.style";

const BookStore = ({ results }) => {
  return (
    <Container>
      {results.map((book) => (
        <BookField>
          <img src={book.volumeInfo.imageLinks.thumbnail} />
         </BookField> 
      ))}
    </Container>
  );
};

export default BookStore;

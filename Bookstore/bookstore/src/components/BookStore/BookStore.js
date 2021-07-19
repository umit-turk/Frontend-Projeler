import React, { useState } from "react";
import { BookField, Container } from "./BookStore.style";
import { Link } from "react-router-dom";

const BookStore = ({ results }) => {
  
  return (
    <Container>
      {results.map((book) => (
        <BookField>
         <img src={book.volumeInfo.imageLinks.thumbnail}/>
         <Link to={`/modal/${book.id}`}>Details</Link>
         
        </BookField>
      ))}
       
      
    </Container>
  );
};

export default BookStore;

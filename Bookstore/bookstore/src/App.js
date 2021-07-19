import "./App.css";
import SearchBar from "./components/Searchbar/SearchBar";
import BookStore from "./components/BookStore/BookStore";
import { useState } from "react";
import axios from "axios";

function App() {
  const [book, setBook] = useState("");
  const [results, setResults] = useState([]);


  function handleChange(e) {
    const book = e.target.value;
    setBook(book);
  }
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=40`
      )
      .then((data) => {
        console.log(data.data.items)
        setResults(data.data.items);
      });
  }
  return (
    <div>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <BookStore results={results} book={book}/>
    </div>
  );
}

export default App;

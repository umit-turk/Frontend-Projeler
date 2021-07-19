import "./App.css";
import SearchBar from "./components/Searchbar/SearchBar";
import BookStore from "./components/BookStore/BookStore";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Modal from "./components/Modal/Modal";

function App() {
  const [book, setBook] = useState("");
  const [results, setResults] = useState([]);

  function handleChange(e) {
    const book = e.target.value;
    setBook(book);
  }
  const api = () => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=40`
      )
      .then((data) => {
        console.log(data.data.items);
        setResults(data.data.items);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    api();
    
  }
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <SearchBar
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <BookStore results={results} book={book} />
          </Route>
          <Route path="/modal/:id"
          render={(renderProps) => {
            const result = results.find((result) => result.id === renderProps.match.params.id)
            return <Modal {...renderProps} result={result} />
          }}
          >
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

/*  render={(renderProps) => {
              const result = results.find(
                (result) => result.id === renderProps.match.params.id
              );
              return <Modal {...renderProps} result={result} />;
            }} */

import './App.css';
import SearchBar from './components/Searchbar/SearchBar';
import BookStore from './components/BookStore/BookStore';
import { useState } from 'react';

function App() {
  const [book, setBook] = useState();
  return (
    <div >
      <SearchBar />
      <BookStore />
    </div>
  );
}

export default App;

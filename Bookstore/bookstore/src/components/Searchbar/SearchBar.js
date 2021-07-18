import React from "react";
import { Nav } from "./SearchBar.style";

const SearchBar = ({handleSubmit, handleChange}) => {
  return (
    <Nav>
      <h1>Bookstore</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-area">
          <input
          onChange={handleChange}
          autoComplete="off"
          placeholder="Search for books"
          />
        </div>
        <button type="submit"></button>
      </form>
    </Nav>
  );
};

export default SearchBar;

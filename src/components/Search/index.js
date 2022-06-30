import React from "react";
import "./search.css";

const Search = ({ search, setSearch, todos }) => {
  return (
    <>
      <div className="todo-search">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="todo-search-input"
          type="text"
          placeholder="Todo ara..."
        />
      </div>
    </>
  );
};

export default Search;

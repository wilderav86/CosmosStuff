import React, { useState } from "react";

const SearchBar = ({ searchTerm, setSearchTerm, setLoading, defaultTerm }) => {
  ///^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/

  console.log(searchTerm);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input);
  };

  const handleReset = () => {
    if (!input) {
      setLoading(false);
    } else {
      setSearchTerm(defaultTerm);
    }
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <label>Search Date</label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="YYYY-MM-DD"
          />
        </div>
        <button onSubmit={handleSubmit}>Submit</button>
        <button onSubmit={handleReset}>Reset</button>
      </form>
    </div>
  );
};

export default SearchBar;

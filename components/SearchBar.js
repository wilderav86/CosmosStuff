import React, { useState } from "react";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  setLoading,
  defaultTerm,
  data,
}) => {
  console.log(data);

  const [input, setInput] = useState("");

  const maxDate = new Date().toISOString().slice(0, 10);

  if (data) {
    const maxSol = data.rover.max_sol;
  }

  console.log(maxSol);

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

  //If default term is a string...do something.
  const checkType = typeof defaultTerm === "string";

  console.log(typeof input);

  return (
    <div className="search-bar ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <label>{checkType ? "Search Data" : "Sol Search"}</label>
          <input
            type={checkType ? "data" : "text"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={checkType ? "YYYY-MM-DD" : "Enter Sol"}
            min={checkType ? "1995-06-16" : "1"}
            max={checkType ? maxDate : data.rover.max_sol}
          />
        </div>
        <button onSubmit={handleSubmit}>Submit</button>
        <button onSubmit={handleReset}>Reset</button>
      </form>
    </div>
  );
};

export default SearchBar;

//1995-06-16

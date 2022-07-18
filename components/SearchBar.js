import React, { useState } from "react";

const SearchBar = ({
  setSearchTerm,
  defaultTerm,
  valid = true,
  invalidMessage,
  label,
  type = "text",
  placeholder,
  min,
  max,
}) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (valid) return setSearchTerm(input);

    return alert(invalidMessage);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <label>{label}</label>
          <input
            required
            type={type}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            min={min}
            max={max}
          />
          <button type="submit" disabled={!valid}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

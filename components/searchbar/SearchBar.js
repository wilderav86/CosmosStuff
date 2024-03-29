import React, { useState } from "react";
import styles from "./SearchBar.module.scss";

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

  console.log("valid", valid);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (valid) return setSearchTerm(input);

    return alert(invalidMessage);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="ui form">
        <div className={styles.container}>
          <label className={styles.label}>{label}</label>
          <input
            className={styles.field}
            required
            type={type}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            min={min}
            max={max}
          />
          <button className={styles.btn} type="submit" disabled={!valid}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;

import React from "react";

const DropDown = ({ options, label, selected, setSelected }) => {
  const renderOptions = options.map((option, key) => {
    return (
      <option value={option.name} key={key}>
        {option.full_name}
      </option>
    );
  });

  return (
    <div className="dropdown-container">
      <form>
        <label htmlFor={label.elementProps}>{label.text}</label>
        <select
          onChange={(e) => setSelected(e.target.value)}
          value={selected}
          id={label.elementProps}
          name={label.elementProps}
        >
          {renderOptions}
        </select>
      </form>
    </div>
  );
};

export default DropDown;

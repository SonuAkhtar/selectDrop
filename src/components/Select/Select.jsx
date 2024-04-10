import React from "react";

const Select = ({ fetchedData, onSelectChange }) => {
  return (
    <div className="select_wrapper">
      <select onChange={(e) => onSelectChange(e.target.value)}>
        <option value="0">Select a Pokemon</option>
        {fetchedData.map((data) => {
          return (
            <option key={data.name} value={data.name}>
              {data.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;

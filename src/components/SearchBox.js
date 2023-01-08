import React from "react";

const SearchBox = ({ searchChange}) => {
  return (
    <div className="pa2">
      <input
        className="pa3 b--green bg-lightest-blue"
        type={"search"}
        placeholder={"search robot"}
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;

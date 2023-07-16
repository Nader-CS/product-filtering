import React from "react";
import "./Search.scss";

const Search = (props) => {
  return (
    <div className="--form-control" style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Search products"
        value={props.inputValue}
        onInput={props.onInputChange}
        style={{ color: props.filteredProduct.length < 1 ? "red" : "green" }}
      />
    </div>
  );
};

export default Search;

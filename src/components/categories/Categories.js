import React from "react";
import "./Categories.scss";

const Categories = (props) => {
  return (
    <div className="--flex-center">
      {props.categories.map((category, index) => {
        return (
          <button
            type="button"
            className="btn --btn"
            style={{ color: "#00a7e1", backgroundColor: "#fff" }}
            key={index}
            onClick={() => {
              props.filterItemsHandler(category);
            }}
          >
            {category.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;

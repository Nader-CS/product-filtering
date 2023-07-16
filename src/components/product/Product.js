import React from "react";
import "./Product.scss";

const Product = (props) => {
  return (
    <div className="product --card">
      <img src={props.product.img} alt="SHAMEZ" />
      <div className="--bg-primary --center-all --p">
        <h3 className="--text-light">{props.product.title}</h3>
        <div className="--flex-between --width-100">
          <p className="--text-light">{props.product.price}</p>
          <button className="--btn" style={{ color: "#00a7e1" }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

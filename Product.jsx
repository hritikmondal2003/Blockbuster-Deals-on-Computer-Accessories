// Product.js
import React from "react";
import "./Product.css";

function Product({ name, features, originalPrice, discountedPrice }) {
  return (
    <div className="Product">
      <h3>{name}</h3>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <p>
        <span className="original-price">₹{originalPrice}</span>
        <span className="discounted-price"> ₹{discountedPrice}</span>
      </p>
    </div>
  );
}

export default Product;
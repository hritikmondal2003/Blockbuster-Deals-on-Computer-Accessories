// Deals.js
import React from "react";
import Product from "./Product";

const deals = [
  {
    name: "Logitech MX Master",
    features: ["8000 DPI", "5 Programmable Buttons"],
    originalPrice: "12,495",
    discountedPrice: "8,999",
  },
  {
    name: "Apple Pencil (2nd Gen)",
    features: ["Intuitive Touch Surface", "Designed for iPad Pro"],
    originalPrice: "11,900",
    discountedPrice: "9,199",
  },
  {
    name: "Zebronics",
    features: ["Designed for iPad Pro", "Intuitive Touch Surface"],
    originalPrice: "1,599",
    discountedPrice: "899",
  },
  {
    name: "Petronics Toad",
    features: ["Wireless Mouse 2.4GHz", "Optical Orientation"],
    originalPrice: "599",
    discountedPrice: "278",
  },
];

function Deals() {
  return (
    <div className="Deals">
      <h1>Blockbuster Deals on Computer Accessories | Shop Now</h1>
      {deals.map((deal, index) => (
        <Product
          key={index}
          name={deal.name}
          features={deal.features}
          originalPrice={deal.originalPrice}
          discountedPrice={deal.discountedPrice}
        />
      ))}
    </div>
  );
}

export default Deals;
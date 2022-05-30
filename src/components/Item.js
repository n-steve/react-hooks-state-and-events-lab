import React, { useState } from "react";

function Item({ name, category }) {
  const [isOn, setIsOn] = useState(false);
  function toggleCart() {
    setIsOn((isOn) => !isOn);
  }
  return (
    <li className={isOn ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {isOn ? (
        <button className="add" onClick={toggleCart}>
          Add To Cart
        </button>
      ) : (
        <button className="remove" onClick={toggleCart}>
          Remove From Cart
        </button>
      )}
    </li>
  );
}

export default Item;

import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCatergory, setSelectedCategory] = useState("All")

  function handleCategory(event){
    setSelectedCategory(event.target.value);
  }

  const itemInShop = items.filter((item)=>{
    if( selectedCatergory === "All") return true;
    return item.category === selectedCatergory;
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemInShop.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

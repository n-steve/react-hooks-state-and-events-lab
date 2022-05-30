import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isOn, setIsOn] = useState(false);

  function toggleModes() {
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "dark" : "light";
  return (
    <div className={isOn ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
      <button style={{background:color}} onClick={toggleModes}>{isOn ? "Dark Mode" : "Light Mode"}</button> 

      </header>
      <ShoppingList items={itemData} />d
    </div>
  );
}

export default App;

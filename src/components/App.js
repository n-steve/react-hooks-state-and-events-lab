import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isOn, setIsOn] = useState(false);

  function toggleModes() {
    setIsOn((isOn) => !isOn);
  }
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  return (
    <div className={isOn ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        {isOn ? (
          <button onClick={toggleModes}>Dark Mode</button>
        ) : (
          <button onDoubleClick={toggleModes}>Light Mode</button>
        )}
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

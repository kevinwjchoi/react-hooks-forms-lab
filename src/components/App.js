import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import { SearchProvider } from "../context/search";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <SearchProvider>
        <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
        <ShoppingList items={items} setItems={setItems} />
      </SearchProvider>
    </div>
  );
}

export default App;

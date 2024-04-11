import React, { useState, useContext } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";



function ShoppingList({ items ,setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setFilterSearch] = useState("");



  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  //once formData is moved to onItemFormSubmit, it is added with items to create newItemsArray. newItemsArray is then set as items 
  // make sure to import {items and setItems} and at the bottom of ItemForm, pass onItemFormSubmit={onItemFormSubmit}
  function onItemFormSubmit(formData){
    const newItemsArray = [...items, formData ];
    setItems(newItemsArray);
    

  }

  //Takes in an event, sets the target value as state "search"
  function onSearchChange(event){
    setFilterSearch(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });


  const itemsFromSearch = itemsToDisplay.filter((item) => {
    if(search === "") return true;
    return item.name.toLowerCase().includes(search.toLowerCase());
  });
  


  return (
    <div className="ShoppingList">
      <ItemForm itemsToDisplay={itemsToDisplay} onItemFormSubmit={onItemFormSubmit}/>
      <Filter search= {search} onSearchChange={onSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsFromSearch.map((item) => ( 
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;


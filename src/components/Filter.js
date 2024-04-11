import React from "react";

function Filter({ onCategoryChange , search, onSearchChange }) {


  //Takes in an event, event is then passed to onSearchChange cb function. check ShoppingList component
  function handleFilterChange(event){
    onSearchChange(event);
  }


  return (
    <div className="Filter">
      {/* onChange takes in the cb function handleFilterChange as a prop */}
      <input onChange={handleFilterChange} value={search} type="text" name="search" placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

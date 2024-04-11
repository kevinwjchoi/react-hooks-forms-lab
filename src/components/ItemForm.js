import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({itemsToDisplay , onItemFormSubmit }) {

  const [itemName, setItemName] = useState("");
  const [submittedCategory, setSubmittedCategory] = useState("Produce");
  const [submittedData, setSubmittedData] = useState([]);

  
  function handleItemNameChange(event){
    setItemName(event.target.value);
  }

  function handleItemCategoryChange(event){
    setSubmittedCategory(event.target.value);

  }

  function handleItemFormSubmit(event){
    event.preventDefault();

    const formData={
      id: uuid(),
      name: itemName, 
      category: submittedCategory,
    };

    //a way to pass formData. Make sure to have onItemFormSubmit as a prop. This then goes to ShoppingList Comp
    onItemFormSubmit(formData);

    
  }


  

  return (
    <form className="NewItem" onSubmit={handleItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleItemNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleItemCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;

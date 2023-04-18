import { useState } from "react";

export function NewTodoForm(props) {
  const [newItem, setNewItem] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if (newItem === "") return; //If user input is empty, terminate

    props.onSubmit(newItem); //Lifting state up

    setNewItem(""); //Resets text box to empty

    console.log(newItem);
  }

  return (
    <form onSubmit={submitHandler} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}

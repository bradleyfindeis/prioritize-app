import React, { useState } from "react";

function NewList() {
  const [title, setTitle] = useState("");
  const [listItems, setListItems] = useState([]);

  const updateTitle = (event) => {
    setTitle(event.target.value);
  };

  const updateListItemName = (event, index) => {
    const newListItems = [...listItems];
    newListItems[index].name = event.target.value;
    setListItems(newListItems);
  };

  const addNewListItem = () => {
    const newListItems = [...listItems];
    newListItems.push({
      name: "",
      id: newListItems.length + 1,
    });
    setListItems(newListItems);
  };

  const handleSave = () => {
    // save the list in localstorage
    const lists = JSON.parse(localStorage.getItem("lists")) || [];
    // need to add an id to the list
    lists.push({
      id: lists.length + 1,
      title,
      listItems,
    });
    localStorage.setItem("lists", JSON.stringify(lists));
    // redirect to the lists page
    window.location.href = "/lists";
  };

  return (
    <div className="page-background">
      <div className="new-list-form">
        <h1 className="page-title my-8">New List</h1>
        <div className="form-row my-8">
          <label htmlFor="name">Name</label>
          <input
            className="input"
            name="name"
            id="name"
            type="text"
            onChange={updateTitle}
          ></input>
        </div>
        {listItems.map((item, index) => (
          <div className="form-row" key={index}>
            <label htmlFor="name">Item Name</label>
            <input
              className="input"
              name="name"
              id="name"
              type="text"
              onChange={(e) => updateListItemName(e, index)}
            ></input>
          </div>
        ))}
        <div className="two-buttons-side-by-side">
          <div className="create-new-button my-8 mr-8" onClick={addNewListItem}>
            New List Item
          </div>
          <div className="create-new-button my-8" onClick={handleSave}>
            Create List
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewList;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListItem from "../components/ListItem";

function List() {
  const { id } = useParams();
  const [list, setList] = useState(null);
  const [listItems, setListItems] = useState(null);
  const [newItemName, setNewItemName] = useState("");

  useEffect(() => {
    // get the list from local storage
    const theList = JSON.parse(localStorage.getItem("lists")) || [];
    // find the list with the id
    const foundList = theList.find((list) => list.id === parseInt(id));
    if (!foundList) {
      window.location.href = "/lists";
    }
    setList(foundList);
    setListItems(foundList.listItems);
  }, [id]);

  const handleAddItem = (event) => {
    // event.preventDefault();
    // fetch(`http://localhost:3000/lists/${id}/list_items`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ name: newItemName }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setListItems([...listItems, data]);
    //     setNewItemName("");
    //   });
  };

  const handlePrioritize = () => {
    window.location.href = `/lists/${id}/prioritize`;
  };

  if (!list) {
    return <div>Loading...</div>;
  }

  if (list.completed && listItems) {
    return (
      <div className="page-background">
        <div>
          <h1>{list.name}</h1>
          <h2>Priority:</h2>
          <ul>
            {listItems.map((item) => (
              <li key={item.id}>
                {item.title} - {item.votes_count}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="page-background">
        <div>
          <h1 className="text-lg">{list.name}</h1>
          <form onSubmit={handleAddItem}>
            <div className="two-buttons-side-by-side">
              <input
                className="input"
                type="text"
                value={newItemName}
                onChange={(event) => setNewItemName(event.target.value)}
                placeholder="Enter new item name"
              />
              <div className="add-new-button-container">
                <button className="add-new-button" type="submit">
                  Add Item
                </button>
              </div>
            </div>
          </form>
          {listItems
            ? listItems.map((item) => <ListItem key={item.id} item={item} />)
            : null}
        </div>
        <div className="prioritize-button-container">
          <button className="prioritize-button" onClick={handlePrioritize}>
            Prioritize
          </button>
        </div>
      </div>
    );
  }
}

export default List;

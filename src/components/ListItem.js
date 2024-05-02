import React from "react";

function ListItem({ item }) {
  return (
    <div>
      <div className="list-card-item">
        <h2 className="list-card-title">{item.name}</h2>
      </div>
    </div>
  );
}

export default ListItem;
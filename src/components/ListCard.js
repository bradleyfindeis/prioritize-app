import React from 'react';
import '../styles/main.css';

function ListCard({ item }) {
  const handleClick = () => {
    window.location.href = `/lists/${item.id}`;
  };

  return (
    <div className="list-card" onClick={handleClick}>
      <div className="list-card-item">
        <h2 className="list-card-title">{item.title}</h2>
        {/* <p className="list-card-date">{item.created_at}</p> */}
      </div>
    </div>
  );
}

export default ListCard;
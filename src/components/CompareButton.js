import React from "react";

function CompareButton({ item, onCompare }) {
  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="compare-button-container">
      <div className='compare-button' onClick={() => onCompare(item)}>{item.name}</div>
    </div>  
  );
}

export default CompareButton;
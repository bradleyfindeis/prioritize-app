import React, { useState } from "react";
import CompareButton from "./CompareButton";
// import "./Comparison.css";

function Comparison({ items, onCompare }) {
  const [index1, setIndex1] = useState(0);


  if (!items) {
    return <div>Loading...</div>;
  }

  return (
    <div className="comparison-container">
      <div className="comparison-item">
        <CompareButton item={items[index1]} onCompare={onCompare} />
      </div>
    </div>
  );
}

export default Comparison;
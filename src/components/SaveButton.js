import React from "react";

function SaveButton({ handleSave }) {

  return (
    <div className="save-button-container">
      <div className='save-button' onClick={() => handleSave()}>Save Priorities</div>
    </div>  
  );
}

export default SaveButton;
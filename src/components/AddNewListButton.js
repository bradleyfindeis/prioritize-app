import React from 'react';

function AddNewListButton() {
  const handleClick = () => {
    window.location.href = '/lists/new';
  };

  return (
    <div className="add-new-button-container">
      <div className='add-new-button' onClick={handleClick}>+</div>
    </div>  
  );
}

export default AddNewListButton;
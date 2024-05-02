import React from 'react';

const LogOutButton = () => {
  const handleLogOut = () => {
    // Perform sign out logic here
    fetch('http://localhost:3000/logout', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(() => {
      window.location.href = '/signin';
    });
  };

  return (
    <button onClick={handleLogOut} className="log-out-button">
      Log Out
    </button>
  );
};

export default LogOutButton;
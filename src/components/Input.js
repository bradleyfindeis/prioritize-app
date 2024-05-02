import React from "react";

function Input({ input, onChange }) {
  return (
    <div>
      <label htmlFor="name">{input.id}</label>
      <input
        className="input"
        name={input.name}
        id={input.id}
        type={input.type}
        onChange={onChange()}>
      </input>
    </div>
  );
}

export default Input;
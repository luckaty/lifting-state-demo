import React from 'react';

function InputComponent({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Type something..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default InputComponent;

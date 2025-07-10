import React, { useState } from 'react';
import InputComponent from './InputComponent';
import DisplayComponent from './DisplayComponent';

function Parent() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>State Lifting Demo</h2>
      <InputComponent value={inputValue} onChange={setInputValue} />
      <DisplayComponent message={inputValue} />
    </div>
  );
}

export default Parent;

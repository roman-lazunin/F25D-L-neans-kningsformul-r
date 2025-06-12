import React from 'react';
import '../styles/components/NameInput.css';

const NameInput = ({ value, onChange, error }) => (
  <div className="name-input">
    <label>
      Namn:
      <input 
        type="text" 
        name="name" 
        value={value} 
        onChange={onChange} 
        className={error ? 'error' : ''}
      />
      {error && <span className="error-message">{error}</span>}
    </label>
  </div>
);

export default NameInput;

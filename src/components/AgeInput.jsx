import React from 'react';
import '../styles/components/AgeInput.css';

const AgeInput = ({ value, onChange, error }) => (
  <div className="age-input">
    <label>
      Ålder:
      <input 
        type="number" 
        name="age" 
        value={value} 
        onChange={onChange} 
        min="18" 
        className={error ? 'error' : ''}
      />
      {error && <span className="error-message">{error}</span>}
    </label>
  </div>
);

export default AgeInput;

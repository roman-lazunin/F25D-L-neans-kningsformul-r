import React from 'react';
import '../styles/components/PhoneInput.css';

const PhoneInput = ({ value, onChange, error }) => (
  <div className="phone-input">
    <label>
      Telefonnummer:
      <input 
        type="tel" 
        name="phone" 
        value={value} 
        onChange={onChange} 
        pattern="[0-9]*" 
        className={error ? 'error' : ''}
      />
      {error && <span className="error-message">{error}</span>}
    </label>
  </div>
);

export default PhoneInput;

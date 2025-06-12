import React from 'react';
import '../styles/components/EmployedCheckbox.css';

const EmployedCheckbox = ({ checked, onChange }) => (
  <div className={`employed-checkbox ${checked ? 'checked' : ''}`}>
    <label htmlFor="employed-input">
      <input 
        id="employed-input"
        type="checkbox" 
        name="employed" 
        checked={checked} 
        onChange={onChange} 
      />
      <span className="checkbox-label-text">Är du anställd?</span>
    </label>
  </div>
);

export default EmployedCheckbox;

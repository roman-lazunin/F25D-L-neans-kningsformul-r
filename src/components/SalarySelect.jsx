import React from 'react';
import '../styles/components/SalarySelect.css';

const SalarySelect = ({ value, onChange, error }) => (
  <div className="salary-select">
    <label>
      Din lön:
      <select 
        name="salary" 
        value={value} 
        onChange={onChange} 
        className={error ? 'error' : ''}
      >
        <option value="">Välj löneintervall</option>
        <option value="<500">Mindre än 500 SEK</option>
        <option value="500-1000">500 - 1000 SEK</option>
        <option value="1000-2000">1000 - 2000 SEK</option>
        <option value=">2000">Över 2000 SEK</option>
      </select>
      {error && <span className="error-message">{error}</span>}
    </label>
  </div>
);

export default SalarySelect;

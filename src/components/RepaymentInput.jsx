import React from 'react';
import '../styles/components/RepaymentInput.css';

const RepaymentInput = ({ value, onChange, error }) => {
  const yearOptions = [1, 2, 3, 5, 10, 15];

  const handleOptionClick = (years) => {
    const event = {
      target: {
        name: 'repayment',
        value: years.toString()
      }
    };
    onChange(event);
  };

  return (
    <div className="repayment-input">
      <label>
        Återbetalningstid:
        <div className="input-wrapper">
          <input 
            type="number" 
            name="repayment" 
            value={value} 
            onChange={onChange} 
            min="1" 
            className={error ? 'error' : ''}
          />
          <span className="input-suffix">år</span>
        </div>
        {error && <span className="error-message">{error}</span>}
      </label>
      <div className="repayment-options">
        {yearOptions.map(years => (
          <button 
            key={years}
            type="button"
            className="option-chip"
            onClick={() => handleOptionClick(years)}
          >
            {years} år
          </button>
        ))}
      </div>
      <div className="helper-text">Välj en vanlig återbetalningstid eller ange egen</div>
    </div>
  );
};

export default RepaymentInput;

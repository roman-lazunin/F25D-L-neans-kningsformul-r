import React from 'react';
import '../styles/components/LoanAmountInput.css';

const LoanAmountInput = ({ value, onChange, error }) => {
  const suggestions = [5000, 10000, 25000, 50000, 100000];

  const handleSuggestionClick = (amount) => {
    const event = {
      target: {
        name: 'loanAmount',
        value: amount.toString()
      }
    };
    onChange(event);
  };

  return (
    <div className="loan-amount-input">
      <label>
        Lånebelopp:
        <div className="input-wrapper">
          <span className="currency-symbol">SEK</span>
          <input 
            type="number" 
            name="loanAmount" 
            value={value} 
            onChange={onChange} 
            className={error ? 'error' : ''}
          />
        </div>
        {error && <span className="error-message">{error}</span>}
      </label>
      <div className="amount-suggestions">
        {suggestions.map(amount => (
          <button 
            key={amount}
            type="button"
            className="suggestion-chip"
            onClick={() => handleSuggestionClick(amount)}
          >
            {amount.toLocaleString()} SEK
          </button>
        ))}
      </div>
      <div className="helper-text">Klicka på ett belopp ovan för snabbt val</div>
    </div>
  );
};

export default LoanAmountInput;

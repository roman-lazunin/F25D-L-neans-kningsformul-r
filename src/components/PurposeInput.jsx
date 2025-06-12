import React from 'react';
import '../styles/components/PurposeInput.css';

const PurposeInput = ({ value, onChange, error }) => {
  const purposeSuggestions = [
    'Bilköp',
    'Hemförbättring',
    'Skuldsanering',
    'Utbildning',
    'Semester',
    'Bröllop'
  ];

  const handleSuggestionClick = (purpose) => {
    const event = {
      target: {
        name: 'purpose',
        value: purpose
      }
    };
    onChange(event);
  };

  return (
    <div className="purpose-input">
      <label>
        Syftet med lånet:
        <input 
          type="text" 
          name="purpose" 
          value={value} 
          onChange={onChange} 
          placeholder="T.ex. Bilköp, hemförbättring, skuldsanering..." 
          className={error ? 'error' : ''}
        />
        {error && <span className="error-message">{error}</span>}
      </label>
      <div className="purpose-suggestions">
        {purposeSuggestions.map(purpose => (
          <button 
            key={purpose}
            type="button"
            className="suggestion-chip"
            onClick={() => handleSuggestionClick(purpose)}
          >
            {purpose}
          </button>
        ))}
      </div>
      <div className="helper-text">Klicka på ett förslag ovan eller skriv ditt eget syfte</div>
    </div>
  );
};

export default PurposeInput;

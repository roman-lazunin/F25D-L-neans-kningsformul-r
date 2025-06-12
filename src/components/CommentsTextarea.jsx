import React from 'react';
import '../styles/components/CommentsTextarea.css';

const CommentsTextarea = ({ value, onChange }) => {
  const maxLength = 500;
  const remainingChars = maxLength - (value?.length || 0);
  const charCountClass = remainingChars < 50 ? 'warning' : remainingChars < 20 ? 'error' : '';

  return (
    <div className="comments-textarea">
      <label>
        Kommentarer:
        <textarea 
          name="comments" 
          value={value} 
          onChange={onChange} 
          rows={3} 
          maxLength={maxLength}
          placeholder="Lägg till eventuella kommentarer eller ytterligare information..."
        />
      </label>
      <div className={`character-count ${charCountClass}`}>
        <span className="helper-text">Frivilligt - lägg till mer information om ditt låneärende</span>
        <span>{remainingChars} tecken kvar</span>
      </div>
    </div>
  );
};

export default CommentsTextarea;

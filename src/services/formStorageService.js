const STORAGE_KEY = 'loanFormData';

export function saveFormData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    
  }
}

export function loadFormData() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    return null;
  }
}

export function clearFormData() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    
  }
}

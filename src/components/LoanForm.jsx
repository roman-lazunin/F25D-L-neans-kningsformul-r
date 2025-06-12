import React, { useState } from 'react';
import '../styles/components/LoanForm.css';
import NameInput from './NameInput';
import PhoneInput from './PhoneInput';
import AgeInput from './AgeInput';
import EmployedCheckbox from './EmployedCheckbox';
import SalarySelect from './SalarySelect';
import LoanAmountInput from './LoanAmountInput';
import PurposeInput from './PurposeInput';
import RepaymentInput from './RepaymentInput';
import CommentsTextarea from './CommentsTextarea';
import { saveFormData, loadFormData } from '../services/formStorageService';

const LoanForm = ({ children }) => {
  const [form, setForm] = useState(() => loadFormData() || {
    name: '',
    phone: '',
    age: '',
    employed: false,
    salary: '',
    loanAmount: '',
    purpose: '',
    repayment: '',
    comments: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => {
      const updated = {
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      };
      saveFormData(updated);
      return updated;
    });
    
    // Clear error for this field when user starts typing (only if form was submitted)
    if (submitted && errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!form.name.trim()) newErrors.name = 'Namn är obligatoriskt';
    if (!form.phone.trim()) newErrors.phone = 'Telefonnummer är obligatoriskt';
    if (!form.age) newErrors.age = 'Ålder är obligatorisk';
    if (!form.salary) newErrors.salary = 'Lön är obligatorisk';
    if (!form.loanAmount) newErrors.loanAmount = 'Lånebelopp är obligatoriskt';
    if (!form.purpose.trim()) newErrors.purpose = 'Syfte är obligatoriskt';
    if (!form.repayment) newErrors.repayment = 'Återbetalningstid är obligatorisk';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    const formErrors = validateForm();
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length === 0) {
      // Handle form submission logic here
      alert(
        `Namn: ${form.name}\nTelefonnummer: ${form.phone}\nÅlder: ${form.age}\nAnställd: ${form.employed ? 'Ja' : 'Nej'}\nLön: ${form.salary}\nLånebelopp: ${form.loanAmount}\nSyfte: ${form.purpose}\nÅterbetalningstid: ${form.repayment}\nKommentarer: ${form.comments}`
      );
    }
  };

  return (
    <form className="loan-form" onSubmit={handleSubmit}>
      {children}
      <h2>Låneansökan</h2>
      <div className="form-section">
        <h3 className="form-section-title">Personuppgifter</h3>
        <div className="form-row">
          <div className="form-group">
            <NameInput 
              value={form.name} 
              onChange={handleChange} 
              error={submitted ? errors.name : null}
            />
          </div>
          <div className="form-group">
            <PhoneInput 
              value={form.phone} 
              onChange={handleChange} 
              error={submitted ? errors.phone : null}
            />
          </div>
        </div>
        <div className="form-group">
          <AgeInput 
            value={form.age} 
            onChange={handleChange} 
            error={submitted ? errors.age : null}
          />
        </div>
        <div className="form-group">
          <EmployedCheckbox checked={form.employed} onChange={handleChange} />
        </div>
        <div className="form-group">
          <SalarySelect 
            value={form.salary} 
            onChange={handleChange} 
            error={submitted ? errors.salary : null}
          />
        </div>
      </div>
      <div className="form-section">
        <h3 className="form-section-title">Lånedetaljer</h3>
        <div className="form-group">
          <LoanAmountInput 
            value={form.loanAmount} 
            onChange={handleChange} 
            error={submitted ? errors.loanAmount : null}
          />
        </div>
        <div className="form-group">
          <RepaymentInput 
            value={form.repayment} 
            onChange={handleChange} 
            error={submitted ? errors.repayment : null}
          />
        </div>
        <div className="form-group">
          <PurposeInput 
            value={form.purpose} 
            onChange={handleChange} 
            error={submitted ? errors.purpose : null}
          />
        </div>
      </div>
      <div className="form-section">
        <h3 className="form-section-title">Ytterligare information</h3>
        <div className="form-group">
          <CommentsTextarea 
            value={form.comments} 
            onChange={handleChange} 
          />
        </div>
      </div>
      <button type="submit" className="submit-button">Skicka ansökan</button>
    </form>
  );
};

export default LoanForm;

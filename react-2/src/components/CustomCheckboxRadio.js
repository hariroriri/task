import React from 'react';
import './CustomCheckboxRadio.css';

const CustomCheckboxRadio = () => {
  return (
    <div className="custom-checkbox-radio">
      <label className="checkbox-container">
        Custom Checkbox
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
      
      <label className="radio-container">
        Custom Radio
        <input type="radio" name="radio" />
        <span className="radio-mark"></span>
      </label>
    </div>
  );
};

export default CustomCheckboxRadio;

import React, { useState } from 'react';
import './MultiStepForm.css'; // Import the CSS

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="multi-step-form">
      <div className="form-steps">
        {step === 1 && (
          <div className="form-step">
            <h2>Step 1: Personal Information</h2>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <button onClick={nextStep}>Next</button>
          </div>
        )}
        {step === 2 && (
          <div className="form-step">
            <h2>Step 2: Address</h2>
            <input type="text" placeholder="Street Address" />
            <input type="text" placeholder="City" />
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
          </div>
        )}
        {step === 3 && (
          <div className="form-step">
            <h2>Step 3: Review & Submit</h2>
            <p>Please review your information and submit.</p>
            <button onClick={prevStep}>Back</button>
            <button onClick={() => alert('Form submitted!')}>Submit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
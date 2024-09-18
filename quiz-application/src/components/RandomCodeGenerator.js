import React, { useState } from 'react';
import './RandomCodeGenerator.css';

const RandomCodeGenerator = () => {
  const [code, setCode] = useState('');
  const [codeLength, setCodeLength] = useState(8);

  const generateRandomCode = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  };

  const handleGenerateClick = () => {
    const newCode = generateRandomCode(codeLength);
    setCode(newCode);
  };

  const handleCodeLengthChange = (e) => {
    setCodeLength(e.target.value);
  };

  return (
    <div className="random-code-generator">
      <h1>Random Code Generator</h1>
      <div className="input-section">
        <label htmlFor="code-length">Code Length:</label>
        <input
          type="number"
          id="code-length"
          value={codeLength}
          onChange={handleCodeLengthChange}
          min="4"
          max="20"
        />
        <button onClick={handleGenerateClick}>Generate Code</button>
      </div>
      {code && <div className="generated-code">Generated Code: <span>{code}</span></div>}
    </div>
  );
};

export default RandomCodeGenerator;

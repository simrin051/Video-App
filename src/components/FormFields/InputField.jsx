import React, { useState } from 'react';

const InputText = ({ id, value, onChange, label }) => {
  return (
    <div className="form-field">
      <label className="input-label">{label}</label>
      <input type="text" id={id} value={value} onChange={onChange} />
    </div>
  );
};

const InputPassword = ({ id, value, onChange, label }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="form-field">
      <label className="input-label">{label}</label>
      <input
        type="password"
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};



export { InputText, InputPassword };


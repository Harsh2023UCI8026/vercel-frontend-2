// client/src/components/auth/SignupForm.js
import React, { useState } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    lookingFor: '',
    about: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Full Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      {/* Add other fields similarly */}
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignupForm;
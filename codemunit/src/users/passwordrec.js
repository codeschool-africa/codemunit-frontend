import React, { useState } from "react";

const Passwordrec = () => {
  const [formData, setFormData] = useState({
    email: ""
  });

  const { email } = formData;

  const handleChange = e => setFormData({ email: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className='modal'>
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor='password-rec'>Enter you email address:</label>
        <input
          type='email'
          name='email'
          id='password-rec'
          placeholder='Email'
          value={email}
          onChange={e => handleChange(e)}
          formNoValidate
        />
        <button className='btn-primary'>Submit</button>
      </form>
    </div>
  );
};

export default Passwordrec;

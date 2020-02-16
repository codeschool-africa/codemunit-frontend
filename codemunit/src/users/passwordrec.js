import React, { useState } from "react";

const Passwordrec = () => {
  const [formData, setFormData] = useState({
    emailRec: ""
  });

  const { emailRec } = formData;

  const handleChange = e => setFormData({ email: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className='modal'>
      <form onSubmit={e => handleSubmit(e)}>
        <div className='field-group'>
          <label htmlFor='password-rec'>Enter you email address:</label>
          <input
            type='email'
            name='email-rec'
            id='password-rec'
            placeholder='Email address'
            value={emailRec}
            onChange={e => handleChange(e)}
            formNoValidate
          />
        </div>
        <button className='btn-primary'>Submit</button>
      </form>
    </div>
  );
};

export default Passwordrec;

import React, { useState } from "react";

// const emailReg = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

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
          //   onBlur={this.handleChange}
          placeholder='Email'
          value={email}
          onChange={e => handleChange(e)}
          formNoValidate
          //   className={formErrors.email.length > 0 ? "error" : null}
        />
        {/* {formErrors.email.length > 0 && (
                    <small>{formErrors.email}</small>
                )} */}
        <button className='btn-primary'>Submit</button>
      </form>
    </div>
  );
};

export default Passwordrec;

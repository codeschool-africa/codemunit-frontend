import React from "react";

const Hire = () => {
  return (
    <article className='hire'>
      <section className='contact-info'>
        <h2>Do you have a software project?</h2>
        <h1>
          Brief us
          <svg
            width='188'
            height='32'
            viewBox='0 0 188 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M186.399 18.4405C187.188 17.668 187.202 16.4018 186.429 15.6123L173.841 2.746C173.069 1.95646 171.803 1.94262 171.013 2.71509C170.224 3.48755 170.21 4.75381 170.982 5.54335L182.172 16.98L170.735 28.1694C169.945 28.9419 169.932 30.2081 170.704 30.9977C171.477 31.7872 172.743 31.801 173.532 31.0286L186.399 18.4405ZM0.978143 16.9999L184.978 19.0108L185.022 15.011L1.02186 13.0001L0.978143 16.9999Z'
              fill='#00A3E1'
            />
          </svg>
        </h1>
      </section>
      <section className='contact-form'>
        <form>
          <div className='field-group'>
            <label htmlFor=''></label>
            <input type='text' placeholder='Name' />
          </div>
          <div className='field-group'>
            <label htmlFor=''></label>
            <input type='email' placeholder='example@email.com' />
          </div>
          <div className='field-group'>
            <label htmlFor=''></label>
            <input type='text' placeholder='Subject' />
          </div>
          <div className='field-group'>
            <label htmlFor=''></label>
            <textarea placeholder='Brief Us'></textarea>
          </div>
          <button className='btn btn-primary'>Send</button>
        </form>
      </section>
    </article>
  );
};

export default Hire;

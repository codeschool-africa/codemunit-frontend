import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import { FaFacebookF, FaGooglePlusG } from "react-icons/all";
import { connect } from "react-redux";
import { setAlert } from "../redux/actions/alert";
import Alert from "../components/alerts"
// import { signupUser } from "../redux/actions/userActions";
import axios from "axios";

// const emailReg = RegExp(
//   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// );
// const passwordReg = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*)[0-9a-zA-Z]{6,}$/);

// const formValid = (formErrors, ...rest) => {
//   let valid = true;

// validate form errors being empty
//   Object.values(formErrors).forEach(val => {
//     val.length > 0 && (valid = false);
//   });

//   // validate the form was filled out
//   Object.values(rest).forEach(val => {
//     val === null && (valid = false);
//   });

//   return valid;
// };

const Signup = ({ setAlert, onClick }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    secondname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { firstname, secondname, email, password, confirmPassword } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlert("password do not match", "error");
    } else {
      setAlert("successfull logged in", "success");
      const newUser = {
        firstname,
        secondname,
        email,
        password
      };
      try {
        const config = {
          headers: {
            "Content-Type": "application/json"
        }
      };
      const body = JSON.stringify(newUser);
      const res = await axios.post(
        "http://kodemunit.herokuapp.com/api/users",
        body,
          config
        );
        console.log(res.data);
      } catch (err) {
        console.log(err.response.data);
      }
    }
  };

  return (
    <div className='form-container sign-up-container'>
      <form onSubmit={e => handleSubmit(e)}>
        <h1>Create an account</h1>
        {/* <div className='social-container'>
                <Link to=''>
                <FaFacebookF className='icon' />
                </Link>
                <Link to=''>
                <FaGooglePlusG className='icon' />
                </Link>
            </div>
            <span>or use your email for registration</span> */}
        <div className='name'>
          <div className='first-name'>
            <label htmlFor='firstname'>First Name:</label>
            <input
              //   className={formErrors.Name.length > 0 ? "error" : null}
              placeholder='First Name'
              type='text'
              value={firstname}
              onChange={e => handleChange(e)}
              name='firstname'
              noValidate
            />
            {/* {formErrors.Name.length > 0 && (
                    <small>
                    {formErrors.Name}
                    {console.log(formErrors.Name)}
                    </small>
                )} */}
          </div>
          <div className='secondname'>
            <label htmlFor='secondname'>Last Name:</label>
            <input
              type='text'
              //   className={formErrors.username.length > 0 ? "error" : null}
              name='secondname'
              noValidate
              value={secondname}
              onChange={e => handleChange(e)}
              placeholder='Last Name'
            />
            {/* {formErrors.username.length > 0 && ( */}
            {/* <small>{formErrors.username}</small> */}
            {/* )} */}
          </div>
        </div>
        <label htmlFor='email'>Email Address:</label>
        <input
          type='email'
          //   className={formErrors.email.length > 0 ? "error" : null}
          name='email'
          id='email'
          value={email}
          onChange={e => handleChange(e)}
          noValidate
          //   onBlur={this.handleChange}
          placeholder='Email'
        />
        {/* {formErrors.email.length > 0 && <small>{formErrors.email}</small>} */}
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          //   className={formErrors.password.length > 0 ? "error" : null}
          name='password'
          id='password'
          minLength='6'
          value={password}
          onChange={e => handleChange(e)}
          // autoComplete='new-password'
          //   noValidate
          //   onBlur={this.handleChange}
        />
        {/* {formErrors.password.length > 0 && <small>{formErrors.password}</small>} */}
        <label htmlFor='confirmPassword'>Confirm password:</label>
        <input
          type='password'
          //   className={formErrors.confirmPassword.length > 0 ? "error" : null}
          name='confirmPassword'
          id='confirmPassword'
          minLength='6'
          value={confirmPassword}
          onChange={e => handleChange(e)}
          //   noValidate
          //   onChange={handleChange}
        />
        <Alert/>
        <span>
          by registering you agree with our{" "}
          <Link to='/'>terms and conditions</Link>
        </span>
        {/* I've to add countries for user to choose where they come from */}
        <button className='btn-primary' type='submit'>
          Register
        </button>
        <div className='shift shift-signin'>
          <span>Already have an account?</span>
          <button className='ghost' id='signIn' onClick={onClick} type='button'>
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

Signup.propTypes = {
  setAlert: PropTypes.func.isRequired
};

// const mapStateToProps = state => ({
//   user: state.user,
//   UI: state.UI
// });

export default connect(null, { setAlert })(Signup);

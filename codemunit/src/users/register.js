import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../redux/actions/alert";
import Alert from "../components/alerts";
import { signupUser } from "../redux/actions/auth";
import { FaEye } from "react-icons/all";

import logoIcon from "../images/logo-icon.png";

import "../styles/users/style.css";

const emailReg = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
// const passwordReg = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*)[0-9a-zA-Z]{6,}$/);

const Signup = ({
  setAlert,
  signupUser,
  auth: { isAuthenticated, loading, user }
}) => {
  const [showPassword, setPassword] = useState(false);

  const changePasswordType = () => {
    setPassword(!showPassword);
  };
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
    console.log(loading);
    if (!email.match(emailReg)) {
      setAlert("email is not valid", "error");
    }
    //  else if (!password.match(passwordReg)) {
    //   setAlert(
    //     `password isn't strong, please include symbols or numbers`,
    //     "error"
    //   );
    // }
    else if (password !== confirmPassword) {
      setAlert("password do not match", "error");
    } else {
      if (isAuthenticated) {
        setAlert(
          `Your account was created successful, check your email for verification`,
          "success"
        );
      }
      signupUser({ firstname, secondname, email, password });
    }
  };

  useEffect(() => {
    document.title = `Register - Kodemunit`;
  });

  return (
    <div className='user__registration'>
      <div className='panel left__panel'>
        <div className='container'>
          <h1>Hello Learner!</h1>
          <p>Enter your personal details to start your journey with us</p>
        </div>
      </div>
      <div className='panel right__panel'>
        <form onSubmit={e => handleSubmit(e)}>
          <h1>
            <img src={logoIcon} alt='' /> Create an account
          </h1>
          <div className='field-group'>
            <label htmlFor='firstname'>First Name:</label>
            <input
              id='firstname'
              placeholder='First Name'
              type='text'
              value={firstname}
              onChange={e => handleChange(e)}
              name='firstname'
              noValidate
            />
          </div>
          <div className='field-group'>
            <label htmlFor='secondname'>First Name:</label>
            <input
              id='secondname'
              type='text'
              name='secondname'
              noValidate
              value={secondname}
              onChange={e => handleChange(e)}
              placeholder='Last Name'
            />
          </div>
          <div className='field-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={e => handleChange(e)}
              placeholder='Email address'
            />
          </div>
          <div className='field-group'>
            <label htmlFor='password'>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name='password'
              id='password'
              value={password}
              onChange={e => handleChange(e)}
              autoComplete='new-password'
              placeholder={showPassword ? "password" : "********"}
            />
            <span
              className={
                showPassword
                  ? "password show-password"
                  : "password hide-password"
              }
              onClick={changePasswordType}
            >
              <FaEye className='icon' />
            </span>
          </div>
          <div className='field-group'>
            <label htmlFor='confirmPassword'>Confirm Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              name='confirmPassword'
              id='confirmPassword'
              minLength='6'
              value={confirmPassword}
              onChange={e => handleChange(e)}
              autoComplete='new-password'
              placeholder={showPassword ? "password" : "********"}
            />
            <span
              className={
                showPassword
                  ? "password show-password"
                  : "password hide-password"
              }
              onClick={changePasswordType}
            >
              <FaEye className='icon' />
            </span>
          </div>
          <Alert />
          <p>
            By signing up you agree with our <Link>terms and conditions</Link>
          </p>
          <button
            className={loading ? "btn-disabled btn-primary" : "btn-primary"}
            disabled={loading}
          >
            Sign In
          </button>
          <div className='extra-info'>
            <div className='shift shift-signup'>
              <span>Already in kodemunit? </span>
              <Link to='/signin' className='ghost' id='signIn'>
                Sign in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

Signup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signupUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { setAlert, signupUser })(Signup);

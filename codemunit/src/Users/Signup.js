import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaEye } from "react-icons/all";
import { connect } from "react-redux";
import { setAlert } from "../redux/actions/alert";
import Alert from "../components/alerts";
import { signupUser } from "../redux/actions/auth";

import "../styles/users/style.css";

const emailReg = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const passwordReg = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*)[0-9a-zA-Z]{6,}$/);

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
    if (!email.match(emailReg)) {
      setAlert("email is not valid", "error");
    } else if (!password.match(passwordReg)) {
      setAlert(
        `password isn't strong, please include symbols or numbers`,
        "error"
      );
    } else if (password !== confirmPassword) {
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

  return (
    <div className='user-registration'>
      <div className='container right-panel-active'>
        <div className='form-container sign-up-container'>
          <form onSubmit={e => handleSubmit(e)}>
            <h1>Create an account</h1>
            <Alert />
            <div className='name'>
              <div className='first-name'>
                <label htmlFor='firstname'>First Name:</label>
                <input
                  placeholder='First Name'
                  type='text'
                  value={firstname}
                  onChange={e => handleChange(e)}
                  name='firstname'
                  noValidate
                />
              </div>
              <div className='second-name'>
                <label htmlFor='secondname'>Last Name:</label>
                <input
                  type='text'
                  name='secondname'
                  noValidate
                  value={secondname}
                  onChange={e => handleChange(e)}
                  placeholder='Last Name'
                />
              </div>
            </div>
            <label htmlFor='email'>Email Address:</label>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={e => handleChange(e)}
              noValidate
              placeholder='Email'
            />
            <label htmlFor='password'>Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              name='password'
              id='password'
              minLength='6'
              value={password}
              onChange={e => handleChange(e)}
            />
            <label htmlFor='confirmPassword'>Confirm password:</label>
            <input
              type={showPassword ? "text" : "password"}
              name='confirmPassword'
              id='confirmPassword'
              minLength='6'
              value={confirmPassword}
              onChange={e => handleChange(e)}
            />
            <span
              className={
                showPassword
                  ? "password show-password"
                  : "password hide-password"
              }
              onClick={changePasswordType}
            >
              {" "}
              show password
            </span>
            <span>
              by registering you agree with our{" "}
              <Link to='/'>terms and conditions</Link>
            </span>
            <button className='btn-primary' type='submit' disabled={loading}>
              Register{loading ? "..." : ""}
            </button>
            <div className='shift shift-signin'>
              <span>Already have an account? </span>
              {/* <button
                className='ghost'
                id='signIn'
                onClick={onClick}
                type='button'
              >
                Log in
              </button> */}
              <Link to='/signin' className='ghost' id='signIn'>
                Log in
              </Link>
            </div>
          </form>
        </div>
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-left'>
              <h1>Hello Learner!</h1>
              <p>Enter your personal details to start your journey with us</p>
            </div>
            <div className='overlay-panel overlay-right'>
              <h1>Welcome back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
            </div>
          </div>
        </div>
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

import React, { useState, useEffect } from "react";
import Passwordrec from "./passwordrec";
import { Link, useHistory, useLocation } from "react-router-dom";
import Modal from "react-responsive-modal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../redux/actions/alert";
import Alert from "../components/alerts";
import { login } from "../redux/actions/auth";
import { FaEye } from "react-icons/all"

import logoIcon from "../images/logo-icon.png";

import "../styles/users/style.css";

const Login = ({
  login,
  setAlert,
  auth: { isAuthenticated, loading, user }
}) => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setPassword] = useState(false);

  const changePasswordType = () => {
    setPassword(!showPassword);
  };

  const [OpenModal, setOpenModal] = useState(false);

  const { email, password } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    login({ email, password });
  };

  if (isAuthenticated) {
    if (loading === true) {
      setAlert("please wait...", "secondary");
    } else if (loading === false && user === null) {
      setAlert(
        "Couldn't load the data, please refresh the page or check your internet connection",
        "errors"
      );
    } else {
      history.replace(from);
    }
  }

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    document.title = `Sign In - Kodemunit`;
  });

  return (
    <div className='user__registration'>
      <div className='panel left__panel'>
        <div className='container'>
          <h1>Welcome back!</h1>
          <p>To keep connected with us please login with your personal info</p>
        </div>
      </div>
      <div className='panel right__panel'>
        <form onSubmit={e => handleSubmit(e)}>
          <h1>
            <img src={logoIcon} alt='' /> Sign in to your account
          </h1>
          <div className='field-group'>
            <label htmlFor='login-email'>Email</label>
            <input
              type='email'
              name='email'
              id='login-email'
              value={email}
              onChange={e => handleChange(e)}
              placeholder='Email address'
            />
          </div>
          <div className='field-group'>
            <label htmlFor='login-password'>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name='password'
              id='login-password'
              value={password}
              onChange={e => handleChange(e)}
              autoComplete='current-password'
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
              <FaEye className="icon"/>
            </span>
          </div>
          <Alert />
          <button className='btn-primary'>Sign In</button>
          <div className='extra-info'>
            <Link to='#' onClick={onOpenModal} className='forgot-password'>
              Forgot your password?
            </Link>
            <Modal open={OpenModal} onClose={onCloseModal} center>
              <Passwordrec />
            </Modal>
            <div className='shift shift-signup'>
              <span>Don't have an account yet? </span>
              <Link to='/register' className='ghost' id='signIn'>
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { setAlert, login })(Login);

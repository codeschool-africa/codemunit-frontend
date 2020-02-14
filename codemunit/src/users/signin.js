import React, { useState, useEffect } from "react";
import Passwordrec from "./passwordrec";
import { Link, useHistory, useLocation } from "react-router-dom";
import Modal from "react-responsive-modal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../redux/actions/alert";
import Alert from "../components/alerts";
import { login } from "../redux/actions/auth";

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
    if (loading) {
      setAlert("please wait...", "secondary");
    } else if (user === null) {
      setAlert(
        "Couldn't load the data, plz refresh the page or check your internet connection",
        "errors"
      );
    } else {
      history.replace(from);
    }
  }

  const onOpenModal = () => {
    setOpenModal(true);
    console.log(OpenModal);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    document.title = `Sign In - Kodemunit`;
  });

  return (
    <div className='user-registration'>
      <div className='container'>
        <div className='form-container sign-in-container'>
          <form onSubmit={e => handleSubmit(e)}>
            <h1>Sign in to your account</h1>
            <label htmlFor='login-email'>Email</label>
            <input
              type='email'
              name='email'
              id='login-email'
              value={email}
              onChange={e => handleChange(e)}
            />
            <label htmlFor='login-password'>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name='password'
              id='login-password'
              value={password}
              onChange={e => handleChange(e)}
              autoComplete='current-password'
            />
            <span
              className={
                showPassword
                  ? "password show-password"
                  : "password hide-password"
              }
              onClick={changePasswordType}
            >
              {/* <FaEye /> */} show password
            </span>
            <Alert />
            <button
              className='btn-primary'
              disabled={loading}
              style={{
                cursor: "pointer"
              }}
            >
              Log In{loading ? "..." : ""}
            </button>
            <Link to='#' onClick={onOpenModal} className='btn-forgot-password'>
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
          </form>
        </div>
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

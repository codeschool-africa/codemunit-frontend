import React, { useState } from "react";
import Passwordrec from "./Passwordrec";
import { Link, Redirect } from "react-router-dom";
// import { FaFacebookF, FaGooglePlusG } from "react-icons/all"
import Modal from "react-responsive-modal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../redux/actions/alert";
import Alert from "../components/alerts";
import { login } from "../redux/actions/auth";

const Login = ({ onClick, login, setAlert, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [OpenModal, setOpenModal] = useState(false);

  const { email, password } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    login({ email, password });
  };

  //redirect if logged in
  if (isAuthenticated) {
    // setAlert("congratulations you have successful logged in", "success");
    // return <Redirect to='/en/dashboard' />;
  }

  const onOpenModal = () => {
    setOpenModal(true);
    console.log(OpenModal);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className='form-container sign-in-container'>
      <form onSubmit={e => handleSubmit(e)}>
        <h1>Sign in to your account</h1>
        <Alert />
        {/* <div className="social-container">
                    <Link to=""><FaFacebookF className="icon"/></Link>
                    <Link to=""><FaGooglePlusG className="icon"/></Link>
                </div> */}
        {/* <span>or use your email</span> */}
        <label htmlFor='login-email'>Email</label>
        <input
          type='email'
          name='email'
          id='login-email'
          value={email}
          onChange={e => handleChange(e)}
          // onChange={this.handleChange}
        />
        <label htmlFor='login-password'>Password</label>
        <input
          type='password'
          name='password'
          id='login-password'
          value={password}
          onChange={e => handleChange(e)}
          autoComplete='current-password'
          // onChange={this.handleChange}
        />
        <button className='btn-primary'>Log in</button>
        <Link to='#' onClick={onOpenModal} className='btn-forgot-password'>
          Forgot your password?
        </Link>
        <Modal open={OpenModal} onClose={onCloseModal} center>
          <Passwordrec />
        </Modal>
        <div className='shift shift-signup'>
          <span>Don't have an account yet?</span>
          <button className='ghost' id='signUp' onClick={onClick} type='button'>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, login })(Login);

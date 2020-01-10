import React, { useState } from "react";
import Passwordrec from "./Passwordrec";
import { Link, Redirect } from "react-router-dom";
import Modal from "react-responsive-modal";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../redux/actions/alert";
import Alert from "../components/alerts";
import { login } from "../redux/actions/auth";

const Login = ({ onClick, login, setAlert, auth: { isAuthenticated, loading }}) => {
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

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
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
          type='password'
          name='password'
          id='login-password'
          value={password}
          onChange={e => handleChange(e)}
          autoComplete='current-password'
        />
        <button className='btn-primary' disabled={loading} style={{
          pointer: "cursor"}}>Log In</button>
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
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { setAlert, login })(Login);

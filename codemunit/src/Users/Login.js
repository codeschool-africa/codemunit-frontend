import React, { useState } from "react";
import Passwordrec from "./Passwordrec";
import { Link } from "react-router-dom";
// import { FaFacebookF, FaGooglePlusG } from "react-icons/all"
import Modal from "react-responsive-modal";
import axios from "axios"

const Login = ({ onClick }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formData);
    const newUser = {
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
          "http://kodemunit.herokuapp.com/api/auth",
          body,
          config
        );
        console.log(res.data);
      } catch (err) {
        console.log(err.response.data);
      }
  };

  const [OpenModal, setOpenModal] = useState(false);

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

export default Login;

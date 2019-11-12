import React, { Component } from 'react'

import Passwordrec from "./Passwordrec"
import { Link } from "react-router-dom"
import { FaFacebookF, FaGooglePlusG } from "react-icons/all"
import Modal from 'react-responsive-modal';

export default class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            open: false,
            email: null,
            formErrors: {
                email: null
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div className="form-container sign-in-container">
                <form>
                    <h1>Sign in to your account</h1>
                    <div className="social-container">
                        <Link to=""><FaFacebookF className="icon"/></Link>
                        <Link to=""><FaGooglePlusG className="icon"/></Link>
                    </div>
                    <span>or use your email</span>
                    <label htmlFor="login-email">Email</label>
                    <input type="email" name="login-email" id="login-email" onChange={this.handleChange}/>
                    <label htmlFor="login-password">Password</label>
                    <input type="password" name="login-password" id="login-password" autoComplete="current-password" onChange={this.handleChange}/>
                    <button className="btn-primary" onClick={this.handleSubmit}>Log in</button>
                    <Link to="#" onClick={this.onOpenModal} className="btn-forgot-password">Forgot your password?</Link>
                    <Modal open={open} onClose={this.onCloseModal} center>
                        <Passwordrec/>
                    </Modal>
                </form>
            </div>
        )
    }
}

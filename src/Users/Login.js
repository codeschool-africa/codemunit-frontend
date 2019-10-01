import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { FaFacebookF, FaGooglePlusG } from "react-icons/all"
import Modal from 'react-responsive-modal';

export default class Login extends Component {
    state = {
        open: false,
    };

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
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" autoComplete="current-password"/>
                    <button className="btn-primary">Log in</button>
                    <Link to="#" onClick={this.onOpenModal} className="btn-forgot-password">Forgot your password?</Link>
                    <Modal open={open} onClose={this.onCloseModal} center>
                        <div className="modal">
                            <label htmlFor="email">Enter you email</label>
                            <input type="email" name="email"/>
                            <button className="btn-primary">Submit</button>
                        </div>
                    </Modal>
                </form>
            </div>
        )
    }
}

import React, { Component } from 'react'
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
                        <FaFacebookF className="icon"/>
                        <FaGooglePlusG className="icon"/>
                    </div>
                    <span>or use your email</span>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password"/>
                    <button>Log in</button>
                </form>
                <button onClick={this.onOpenModal}>Forgot your password?</button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <div className="modal">
                        <label htmlFor="email">Enter you email</label>
                        <input type="email" name="email" placeholder="Email"/>
                        <input type="button" value="Send"/>
                    </div>
                </Modal>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { FaFacebookF, FaGooglePlusG } from "react-icons/all"

export default class Signup extends Component {
    render() {
        return (
            <div className="form-container sign-up-container">
                <form>
                    <h1>Create an account</h1>
                    <div className="social-container">
                        <FaFacebookF className="icon"/>
                        <FaGooglePlusG className="icon"/>
                    </div>
                    <span>or use your email for registration</span>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name"/>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"/>
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword"/>
                    <button>Register</button>
                </form>
            </div>
        )
    }
}

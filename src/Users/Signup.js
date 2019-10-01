import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { FaFacebookF, FaGooglePlusG } from "react-icons/all"

export default class Signup extends Component {
    render() {
        return (
            <div className="form-container sign-up-container">
                <form>
                    <h1>Create an account</h1>
                    <div className="social-container">
                        <Link to=""><FaFacebookF className="icon"/></Link>
                        <Link to=""><FaGooglePlusG className="icon"/></Link>
                    </div>
                    <span>or use your email for registration</span>
                    <div className="name">
                        <div className="name-name">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" name="name"/>
                        </div>
                        <div className="name-username">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username"/>
                        </div>
                    </div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" autoComplete="new-password"/>
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword"/>
                    <button className="btn-primary">Register</button>
                </form>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { FaFacebookF, FaGooglePlusG } from "react-icons/all"
import { connect } from 'react-redux';

import { signupUser } from "../redux/actions/userActions"

const emailReg = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
const passwordReg = RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*)[0-9a-zA-Z]{6,}$/);

// const formValid = (formErrors, ...rest) => {
//     let valid = true;

//     // validate form errors being empty
//     Object.values(formErrors).forEach(val => {
//         val.length > 0 && (valid = false);
//     });

//     // validate the form was filled out
//     Object.values(rest).forEach(val => {
//         val === null && (valid = false);
//     });

//     return valid;
// }

class Signup extends Component {
    constructor (props) {
        super(props);
        this.state = {
            Name: null,
            username: null,
            email: null,
            password: null,
            confirmPassword: null,
            formErrors: {
                Name: "",
                username: "",
                email: "",
                password: "",
                confirmPassword: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        const newUserData = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        };
        this.props.signupUser(newUserData, this.props.history);
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
        let password = this.state.password;
        let confirmPassword = this.state.confirmPassword;
        const passwordMatch = password === confirmPassword?true: false;

        switch (name) {
            case 'Name':
                formErrors.Name =
                value.length < 3 ? "minimum 3 characaters required" : "";
            break;
            case 'username':
                formErrors.username =
                value.length < 3 ? "minimum 3 characaters required" : "";
            break;
            case 'email':
                formErrors.email = (value.length === 0 && !emailReg.test(value)) ?"Enter a valid email address":"";
            break;
            case 'password':
                formErrors.password = !passwordReg.test(value) ? "Your password isn't strong":"";
            break;
            case 'confirmPassword':
                formErrors.confirmPassword = (!passwordMatch) ? "Passwords must match":"";
            break;
            default:
             break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(passwordMatch));
    };


    render() {
        const { formErrors } = this.state;
        return (
            <div className="form-container sign-up-container">
                <form onSubmit={this.handleSubmit}>
                    <h1>Create an account</h1>
                    <div className="social-container">
                        <Link to=""><FaFacebookF className="icon"/></Link>
                        <Link to=""><FaGooglePlusG className="icon"/></Link>
                    </div>
                    <span>or use your email for registration</span>
                    <div className="name">
                        <div className="name-name">
                            <label htmlFor="name">Your Name:</label>
                            <input
                                className={formErrors.Name.length > 0 ? "error" : null}
                                placeholder="Name"
                                type="text"
                                name="Name"
                                noValidate
                                onBlur={this.handleChange}
                            />
                            {formErrors.Name.length > 0 && (
                                <small>{formErrors.Name}{console.log(formErrors.Name)}</small>
                            )}
                        </div>
                        <div className="name-username">
                            <label htmlFor="username">Username:</label>
                            <input type="text" className={formErrors.username.length > 0 ? "error" : null} name="username" noValidate onBlur={this.handleChange} placeholder="Username"/>
                            {formErrors.username.length > 0 && (
                                <small>{formErrors.username}</small>
                            )}
                        </div>
                    </div>
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" className={formErrors.email.length > 0 ? "error" : null} name="email" id="email" noValidate onBlur={this.handleChange} placeholder="Email"/>
                    {formErrors.email.length > 0 && (
                        <small>{formErrors.email}</small>
                    )}
                    <label htmlFor="password">Password:</label>
                    <input type="password" className={formErrors.password.length > 0 ? "error" : null} name="password" id="password" autoComplete="new-password" noValidate onBlur={this.handleChange}/>
                    {formErrors.password.length > 0 && (
                        <small>{formErrors.password}</small>
                    )}
                    <label htmlFor="confirmPassword">Confirm password:</label>
                    <input type="password" className={formErrors.confirmPassword.length > 0 ? "error" : null} name="confirmPassword" id="confirmPassword" noValidate onChange={this.handleChange}/>
                    {formErrors.confirmPassword.length > 0 && (
                        <small>{formErrors.confirmPassword}</small>
                    )}
                    <span>by registering you agree with our <Link to="/">terms and conditions</Link></span>
                    {/* I've to add countries for user to choose where they come from */}
                    <button className="btn-primary" type="submit">Register</button>
                </form>
            </div>
        )
    }
};

Signup.propTypes = {
    user: PropTypes.object.isRequired
    // UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.UI
});

export default connect(
    mapStateToProps,
    { signupUser }
)(Signup);

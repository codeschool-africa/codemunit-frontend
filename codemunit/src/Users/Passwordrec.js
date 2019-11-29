import React, { Component } from 'react'

const emailReg = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

export default class Passwordrec extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            formErrors: {
                email: ""
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const userdata = {
            email: this.state.email
        }
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {
            case "email":
                formErrors.email = (value.length === 0 || !emailReg.test(value)) ? "Enter a valid email address" : "";
            break;
            default:
            break;
        }

        this.setState({ formErrors, [name]: value })
    }
    render() {
        const { formErrors } = this.state;
        return (
            <div className="modal">
                <label htmlFor="password-rec">Enter you email address:</label>
                <input type="email" name="email" id="password-rec" onBlur={this.handleChange} placeholder="Email" formNoValidate className={formErrors.email.length > 0 ? "error" : null}/>
                {formErrors.email.length > 0 && (
                    <small>{formErrors.email}</small>
                )}
                <button className="btn-primary">Submit</button>
            </div>
        )
    }
}

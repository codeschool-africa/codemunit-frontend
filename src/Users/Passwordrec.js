import React, { Component } from 'react'

export default class Passwordrec extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            formErrors: {
                email: null
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();
    }
    render() {
        return (
            <div className="modal">
                <label htmlFor="email">Enter you email</label>
                <input type="email" name="email" onChange={this.handleChange}/>
                <button className="btn-primary">Submit</button>
            </div>
        )
    }
}

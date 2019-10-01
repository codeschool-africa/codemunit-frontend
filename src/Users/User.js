import React, { Component } from 'react'
import Login from "./Login"
import Signup from "./Signup"
import '../styles/users/style.css'

export default class User extends Component {

    componentDidMount() {
        document.title = "user registration";
      }

    render() {
        return (
            <div className="user-registration">
                <div className="container">
                    <Signup/>
                    <Login/>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn">Log in</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                        <h1>Hello Learners</h1>
                            <p>Enter your personal details to start your journey with us</p>
                            <button className="ghost" id="signUp">Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

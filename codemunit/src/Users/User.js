import React, { Component } from 'react'

import { Link } from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"
import '../styles/users/style.css'

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignin: true,
            isSignup: false
        }
    }

    signUpbtn = () => {
        this.setState({
            isSignup: !this.state.isSignup,
            isSignin: !this.state.isSignin
        })
    }

    signInbtn = () => {
        this.setState({
            isSignup: !this.state.isSignup,
            isSignin: !this.state.isSignin
        })
    }

    componentDidMount() {
        document.title = "Users";
    }

    render() {
        return (
            <div className="user-registration">
                <div className={(this.state.isSignup && !this.state.isSignin)?"container right-panel-active": "container"}>
                    <Signup/>
                    <Login/>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" id="signIn" onClick={this.signInbtn}>Log in</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                            <h1>Hello Learners!</h1>
                                <p>Enter your personal details to start your journey with us</p>
                                <button className="ghost" id="signUp" onClick={this.signUpbtn}>Sign up</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                            Copyright &copy; 2019 <Link to="/">Codemunit.</Link> 
                </div>
            </div>
        )
    }
}

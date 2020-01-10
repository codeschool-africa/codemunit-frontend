import React, { Component } from 'react'
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
        document.title = "User registration/log in";
    }

    render() {
        return (
            <div className="user-registration">
                <div className={(this.state.isSignup && !this.state.isSignin)?"container right-panel-active": "container"}>
                    <Signup onClick={this.signUpbtn}/>
                    <Login onClick={this.signUpbtn}/>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Hello Learner!</h1>
                                <p>Enter your personal details to start your journey with us</p>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Welcome back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

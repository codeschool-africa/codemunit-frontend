import React, { Component } from 'react'
import logo from "../../images/black-logo.png"
// import profile from "../../images/profile.png"
import { Link } from 'react-router-dom'
// import { FaSearch } from "react-icons/all"

export default class Nav extends Component {

    render() {
        return (
            <nav className={this.state.isOpen ? "nav-bg mobile-navigation" : "mobile-navigation"}>
                <div className="logo">
                    <Link to='/'>
                        <img src={logo} alt="kodemunit logo" />
                    </Link>
                </div>
                <div className="dropdown">
                    <input className="burger-check" id="burger-check" type="checkbox" defaultChecked={this.state.isOpen ? "checked" : ""} />
                    <label htmlFor="burger-check" className="burger" onClick={this.handleToggle}></label>
                </div>
            </nav>
        );
    }
}



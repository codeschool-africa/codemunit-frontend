import React, { Component } from 'react'
// import Header from "./components/Header"
// import Main from "./components/Main"
// import Nav from "./components"
// import MobileNav from "./MobileNav"
import "../styles/curriculum/style.css"

import logo from "../images/black-logo.png"
import profile from "../images/profile.png"
import { Link } from 'react-router-dom'
import { FaSearch, FaAngleDown } from "react-icons/all"

export default class Curriculum extends Component {
    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
        console.log(this.state.isOpen)
    }
    render() {
        return (
            <div className="curriculum-container">
                <header>
                    <div className="container">
                        <nav className="desktop-navigation">
                            <div className="logo">
                                <Link to='/'>
                                    <img src={logo} alt="kodemunit logo" />
                                </Link>
                            </div>
                            <div className="search-bar">
                                <label>
                                    <input type="text" placeholder="Search" />
                                </label>
                                <button type="submit">
                                    <FaSearch className="icon" />
                                </button>
                            </div>
                            <ul >
                                <li><Link to='/mentorship'>Mentorship</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/faq'>FAQ</Link></li>
                                <li><Link to='/en/dashboard' className='btn'>Dashboard</Link></li>
                            </ul>
                            <div className="user-nav">
                                <div className="profile-img dropdown">
                                    <Link to="/profile">
                                        <div className="profile-menu">
                                            <div className="img">
                                                <img src={profile} alt="dp" />
                                            </div>
                                            <FaAngleDown />
                                        </div>
                                    </Link>
                                    <div className="dropdown-profile-menu">
                                        <ul>
                                            <li>
                                                <Link to="/">Link 1</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Link 1</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Link 1</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <nav className="mobile-navigation">
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
                    </div>
                </header>
                <div className="main-content">
                    <div className={this.state.isOpen ? "nav-open navigation" : "navigation"}>
                        <div className="container">
                            <div className="search-bar">
                                <label>
                                    <input type="text" placeholder="Search" />
                                </label>
                                <button type="submit">
                                    <FaSearch className="icon" />
                                </button>
                            </div>
                            <ul>
                                <li><Link to='/mentorship'>Mentorship</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/faq'>FAQ</Link></li>
                                <li><Link to='/en/dashboard' className='btn'>Dashboard</Link></li>
                            </ul>
                            <div className="user-nav">
                                <Link to="/user-profile">
                                    <div className="img">
                                        <img src={profile} alt="dp" />
                                        <div>username</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <aside>side nav</aside>
                        <div className="curriculum-showcase">
                            hello there
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

//components

import Header from "../components/Header"
import SideNav from "../main-content/side-nav"
// import Main from "./main-content/main-content"

// import "../styles/curriculum/style.css"

// import logo from "../images/black-logo.png"
// import profile from "../images/profile.png"
import { Link } from 'react-router-dom'
// import { FaSearch, FaAngleDown } from "react-icons/all"

export default class Html extends Component {
    state = {
        isOpen: false,
        isNavOpen: false
    }

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    handleNav = () => {
        this.setState({ isNavOpen: !this.state.isNavOpen });
        console.log(this.state.isNavOpen)
    }
    render() {
        return (
            <div className="curriculum-container">
                <Header />
                <div className="main-content">
                    <div className="container">
                        <aside className={this.state.isNavOpen ? "side-nav-open" : ""}>
                            <SideNav />
                        </aside>
                        <div className={this.state.isNavOpen ? "main-open curriculum-showcase" : "curriculum-showcase"}>
                            <div className="div">
                                <div className="burger" onClick={this.handleNav}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            <div className="main">
                                html page
                                <p>
                                    here you will find everything you need to know in html
                                </p>
                            </div>
                            </div>
                            <footer>
                                <div className="container">
                                    <hr />
                                    <Link to="/">Help and FAQ</Link> | &nbsp;
                                    <Link to="/">Report An Issue</Link>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

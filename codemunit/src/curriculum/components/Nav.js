import React, { Component } from 'react'
import logo from "../../images/black-logo.png"
import profile from "../../images/profile.png"
import { Link } from 'react-router-dom'
import { FaSearch, FaBell, FaAngleDown } from "react-icons/all"

export default class Nav extends Component  {
    state={
        isOpen:false
    }

    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen});
    }

    render() {
    return (
        <nav className={this.state.isOpen?"nav-bg desktop-navigation":"desktop-navigation"}>
            <div className="logo">
                    <Link to='/'>
                        <img src={logo} alt="kodemunit logo"/>
                    </Link>
            </div>
            <div className="search-bar">
                <label>
                    <input type="text" placeholder="Search course"/>
                </label>
                <button type="submit">
                    <FaSearch className="icon"/>
                </button>
            </div>
            <ul className={this.state.isOpen?"show-nav":""}>
                <li><Link to='/mentorship'>Mentorship</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/faq'>FAQ</Link></li>
                <li><Link to='/en/dashboard' className='btn'>Dashboard</Link></li>
            </ul>
            <div className="user-nav">
                <div className="profile-img dropdown">
                    <div className="profile-menu">
                        <div className="img">
                            <img src={profile} alt="dp" />
                        </div>
                        <FaAngleDown/>
                    </div>
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
    );
 }
}



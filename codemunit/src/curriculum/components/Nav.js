import React, { useState } from 'react'
// import logo from "../../images/black-logo.png"
import profile from "../../images/profile.png"
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/all"
const MobileNav = ({navProps}) =>  {

    return (
        <nav className={navProps}>
            <div className="container">
                <div className="search-bar">
                    <label>
                        <input type="text" placeholder="Search..." />
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
                <div className="profile user-nav">
                    <a href="#profile">
                        <div className="profile-menu">
                            <div className="img">
                                <img src={profile} alt="dp" />
                            </div>
                            <div className="username">
                                username
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default MobileNav;



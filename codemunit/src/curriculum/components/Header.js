import React, { useState } from 'react';
import { Link } from "react-router-dom"
import logo from "../../images/black-logo.png"
import profile from "../../images/profile.png"
import { FaSearch, FaAngleDown } from "react-icons/all"
import Nav from "./Nav"
// import MobileNav from "./MobileNav"

const Header = () => {

    const [isOpen, setOpen ] = useState(false)

    const handleToggle = () =>{
        setOpen(!isOpen);
        console.log(isOpen)
    }

    return (
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
                    <div className="user-nav">
                        <div className="profile-img dropdown">
                            <a href="#profile">
                                <div className="profile-menu">
                                    <div className="img">
                                        <img src={profile} alt="dp" />
                                    </div>
                                    <FaAngleDown className="icon" />
                                </div>
                            </a>
                            <div className="dropdown-profile-menu">
                                <div className="profile-image">
                                    <Link to={`/profile`}>
                                        <div className="profile-menu">
                                            <div className="img">
                                                <img src={profile} alt="dp" />
                                            </div>
                                            <div className="account-details">
                                                <div className="username">
                                                    Username
                                                        </div>
                                                <div className="email">
                                                    example@email.com
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <nav>
                                    <ul>
                                        <li>
                                            <Link to="/">Notifications <span>{1}</span></Link>
                                        </li>
                                        <li>
                                            <Link to="/">History</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Account</Link>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <Link to="/">Help</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Log out</Link>
                                        </li>
                                    </ul>

                                </nav>
                                <div className="mentor-div">
                                    <Link to="/">Become a mentor</Link>
                                </div>
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
                        <input className="burger-check" id="burger-check" type="checkbox" />
                        <label htmlFor="burger-check" className="burger" onClick={handleToggle}></label>
                    </div>
                    <Nav navProps={isOpen?`nav-open mobile-nav`:`mobile-nav`}/>
                </nav>
            </div>
        </header>
    );
}

export default Header;

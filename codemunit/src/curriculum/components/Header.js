import React, { useState } from 'react';
import { Link } from "react-router-dom"
import logo from "../../images/black-logo.png"

//redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../redux/actions/auth";


import { FaSearch, FaAngleDown } from "react-icons/all"
import Nav from "./Nav"
// import MobileNav from "./MobileNav"

const Header = ({ auth: { isAuthenticated, loading, user }, logout }) => {

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
                        <li><Link to='/dashboard' className='btn'>Dashboard</Link></li>
                    </ul>
                    <div className="user-nav">
                        <div className="profile-img dropdown">
                            <a href="#profile">
                                <div className="profile-menu">
                                    <div className="img">
                                        <img src={user.avatar} alt="dp" />
                                    </div>
                                    <FaAngleDown className="icon" />
                                </div>
                            </a>
                            <div className="dropdown-profile-menu">
                                <div className="profile-image">
                                    <Link to={`/profile`}>
                                        <div className="profile-menu">
                                            <div className="img">
                                                <img src={user.avatar} alt="dp" />
                                            </div>
                                            <div className="account-details">
                                                <div className="username">
                                                    {user.firstname}
                                                        </div>
                                                <div className="email">
                                                    {user.email}
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
                                            <a href="#!" onClick={logout}>Log out</a>
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

const mapStateToProps = state => ({
  auth: state.auth,
});

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { logout })(Header);
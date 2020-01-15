import React, { useState } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/all"
const MobileNav = ({navProps, auth: { isAuthenticated, loading, user }}) =>  {

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
                    <Link to="/dashboard/profile">
                        <div className="profile-menu">
                            <div className="img">
                                <img src={user.avatar} alt={`${user.firstname} avatar`} />
                            </div>
                            <div className="username">
                                {user.firstname}{" "}{user.secondname}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

const mapStateToProps = state => ({
    auth: state.auth,
  });
  
 MobileNav.propTypes = {
    auth: PropTypes.object.isRequired,
  };
  
  export default connect(mapStateToProps, {})(MobileNav);



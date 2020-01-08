import React, { useState } from "react";
import logo from "../../images/logo12.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../redux/actions/auth";

const Nav = ({ navProps, auth: { isAuthenticated, loading }, logout }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={navProps}>
      <div className={isOpen ? "nav-bg nav nav-open" : "nav"}>
        <div className='container'>
          <div className='logo'>
            <Link to='/'>
              <img src={logo} alt='kodemunit logo' />
            </Link>
          </div>
          <div></div>
          <div className='dropdown'>
            <span
              className={isOpen ? "burger burger-open" : "burger"}
              onClick={handleToggle}
            ></span>
          </div>
          <ul className={isOpen ? "show-nav" : ""}>
            <li>
              <Link to='/about' onClick={handleToggle} className='nav-link'>
                About
              </Link>
            </li>
            <li>
              <Link
                to='/curriculum'
                onClick={handleToggle}
                className='nav-link'
              >
                Curriculum
              </Link>
            </li>
            <li>
              <Link
                to='/mentorship'
                onClick={handleToggle}
                className='nav-link'
              >
                Mentorship
              </Link>
            </li>
            <li>
              <Link to='/blog' onClick={handleToggle} className='nav-link'>
                Blog
              </Link>
            </li>
            <li>
              <Link
                to='/mentorship'
                onClick={handleToggle}
                className='nav-link'
              >
                FAQ
              </Link>
            </li>
            <li>
              {isAuthenticated === true ? (
                <>
                  <Link
                    to='/en/dashboard'
                    className='btn-primary'
                    onClick={handleToggle}
                  >
                    Dashboard
                  </Link>
                  <button onClick={logout}></button>
                </>
              ) : (
                <Link
                  to='/account'
                  className='btn-primary'
                  onClick={handleToggle}
                >
                  Join Now
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
});

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { logout })(Nav);

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube
} from "react-icons/all";

import logo from "../images/bw-logo.png";

const Footer = ({ auth: { isAuthenticated, user } }) => {
  return (
    <footer>
      <div className='footer-top'>
        <div className='container'>
          <div className='col col-one'>
            <h2>Company</h2>
            <ul>
              <li>
                <Link to='/'>About us</Link>
              </li>
              <li>
                <Link to='/'>Jobs</Link>
              </li>
              <li>
                <Link to='/'>Become a Mentor</Link>
              </li>
              <li>
                <Link to='/'>Hire Developers</Link>
              </li>
              <li>
                <Link to='/'>Partnership</Link>
              </li>
            </ul>
          </div>
          <div className='col col-two'>
            <h2>Quick links</h2>
            <ul>
              <li>
                <Link to='/'>Learn</Link>
              </li>
              <li>
                <Link to='/'>Blog</Link>
              </li>
              {isAuthenticated ? (
                <>
                  <li>
                    <Link to='/dashboard'>Dashboard</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to='/register'>Sign Up</Link>
                  </li>
                  <li>
                    <Link to='/signin'>Log In</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className='col col-three'>
            <h2>Support</h2>
            <ul>
              <li>
                <Link to='/'>Help and FAQ</Link>
              </li>
              <li>
                <Link to='/'>Subscribe</Link>
              </li>
            </ul>
          </div>
          <div className='col col-four'>
            <h2>Contact Info</h2>
            <h3>Address</h3>
            <p>Buni, Dar Es Salaam - Tanzania</p>
            <h3>Email</h3>
            <a href='mailto:info@kodemunit.com'>info@kodemunit.com</a>
          </div>
        </div>
      </div>
      <div className='bg'></div>
      <div className='footer-bottom'>
        <div className='container'>
          <div className='left'>
            <img src={logo} alt='kodemunit logo' />
            <p>Copyright &copy; - 2020 Kodemunit.</p>
          </div>
          <div className='right'>
            <a href='www.facebook.com'>
              <FaFacebookF className='icon' />
            </a>
            <a href='www.facebook.com'>
              <FaTwitter className='icon' />
            </a>
            <a href='www.facebook.com'>
              <FaLinkedinIn className='icon' />
            </a>
            <a href='www.facebook.com'>
              <FaInstagram className='icon' />
            </a>
            <a href='www.facebook.com'>
              <FaYoutube className='icon' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

Footer.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps, {})(Footer);

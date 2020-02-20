import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube
} from "react-icons/all";

import logo from "../images/bw-logo.png";

const Footer = () => {
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
                <Link to='/'>About us</Link>
              </li>
              <li>
                <Link to='/'>About us</Link>
              </li>
              <li>
                <Link to='/'>About us</Link>
              </li>
              <li>
                <Link to='/'>About us</Link>
              </li>
            </ul>
          </div>
          <div className='col col-two'>
            <h2>Company</h2>
            <ul>
              <li>
                <Link to='/'>About us</Link>
              </li>
              <li>
                <Link to='/'>About us</Link>
              </li>
              <li>
                <Link to='/'>About us</Link>
              </li>
            </ul>
          </div>
          <div className='col col-three'>
            <h2>Company</h2>
            <ul>
              <li>
                <Link to='/'>About us</Link>
              </li>
              <li>
                <Link to='/'>About us</Link>
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
      <div className='footer-bottom'>
        <div className='container'>
          <div className='left'>
            <img src={logo} alt='kodemunit logo' />
            <p>Copyright &copy; - 2020 Kodemunit.</p>
          </div>
          <div className='right'>
            <a href='www.facebook.com'>
              <FaFacebookF />
            </a>
            <a href='www.facebook.com'>
              <FaTwitter />
            </a>
            <a href='www.facebook.com'>
              <FaLinkedinIn />
            </a>
            <a href='www.facebook.com'>
              <FaInstagram />
            </a>
            <a href='www.facebook.com'>
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

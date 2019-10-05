import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/all'

export default function Footer() {
    return (
        <footer>
            <div className="footer-nav-links">
                <div className="container">
                    <div className="col1 col">
                        <h1>Codemunit logo</h1>
                        <p>Do you have a project?</p>
                        <div className="btn">
                            <Link to='/' className='btn-primary'>Hire the Team</Link>
                            <Link to='/user' className='btn-primary'>Join Now</Link>
                        </div>
                    </div>
                    <div className="col2 col">
                        <Link to='/'>become a mentor</Link>
                        <Link to='/'>community hub</Link>
                        <Link to='/about'>about us</Link>
                        <Link to='/'>help and support</Link>
                        <Link to='/'>contact us</Link>
                        <Link to='/blog'>blog</Link>
                        <Link to='/user'>register/login</Link>
                        <h4>Sponsor us</h4>
                        <a href="mailto:sponsor@codemunit.com">sponsor@codemunit.com</a>
                        <h4>Partner with us</h4>
                        <a href="mailto:partner@codemunit.com">partner@codemunit.com</a>
                    </div>
                    <div className="col3 col">
                    <h3>lets connect</h3>
                        <div className="follow">
                            <a href="https://www.facebook.com"><FaFacebookF className='icon'/></a>
                            <a href="https://www.twitter.com"><FaTwitter className='icon'/></a>
                            <a href="https://www.instagram.com"><FaInstagram className='icon'/></a>
                        </div>
                        <h3>subscribe to our newsletter</h3>
                        <form>
                            <input type="text" placeholder="example@email.com" netlify/>
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="copyright left">
                        Copyright &copy;2019 Codemunit.
                    </div>
                    <div></div>
                    <div className="right">
                        <Link to='/'>Privacy Policy</Link>
                        &nbsp; | &nbsp;
                        <Link to='/'>Terms and condition</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

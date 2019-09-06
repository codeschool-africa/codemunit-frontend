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
                    </div>
                    <div className="col2 col">
                        <Link to='/'>about us</Link>
                        <Link to='/'>help and support</Link>
                        <Link to='/'>contact us</Link>
                        <Link to='/signup'>register</Link>
                        <Link to='/login'>login</Link>
                        <Link to='/'>blog</Link>
                        <Link to='/'>sponsors</Link>
                    </div>
                    <div className="col3 col">
                    <h3>follow us on</h3>
                        <div className="follow">
                            <a href="#"><FaFacebookF className='icon'/></a>
                            <a href="#"><FaTwitter className='icon'/></a>
                            <a href="#"><FaInstagram className='icon'/></a>
                        </div>
                        <h3>subscribe to our newsletter</h3>
                        <form>
                            <input type="text" placeholder="example@email.com"/>
                            <button type="submit">subscribe</button>
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

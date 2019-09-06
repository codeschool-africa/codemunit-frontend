import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <div className="logo">
                <h1>
                    <Link to='/'>
                        Codemunit
                    </Link>
                </h1>
            </div>
            <div></div>
            <div className="dropdown">
                Menu
            </div>
            <ul>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/'>Curriculum</Link></li>
                <li><Link to='/'>Mentorship</Link></li>
                <li><Link to='/'>Blog</Link></li>
                <li><Link to='/'>FAQ</Link></li>
                <li><Link to='/' className='btn-primary'>Join Now</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component  {
    state={
        isOpen:false
    }
    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen});
    }

    render() {
    return (
        <nav className={this.state.isOpen?"nav-bg":""}>
            <div className="logo">
                <h1>
                    <Link to='/'>
                        Codemunit
                    </Link>
                </h1>
            </div>
            <div></div>
            <div className="dropdown">
                <input class="burger-check" id="burger-check" type="checkbox" />
                <label for="burger-check" class="burger" onClick={this.handleToggle}></label>
            </div>
            <ul className={this.state.isOpen?"show-nav":""}>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/curriculum'>Curriculum</Link></li>
                <li><Link to='/'>Mentorship</Link></li>
                <li><Link to='/'>Blog</Link></li>
                <li><Link to='/'>FAQ</Link></li>
                <li><Link to='/' className='btn-primary'>Join Now</Link></li>
            </ul>
        </nav>
    );
 }
}



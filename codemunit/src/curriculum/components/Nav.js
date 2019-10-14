import React, { Component } from 'react'
import logo from "../../images/black-logo.png"
import profile from "../../images/profile.png"
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/all"

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
                    <Link to='/'>
                        <img src={logo} alt="kodemunit logo"/>
                    </Link>
            </div>
            <div className="search-bar">
                <label>
                    <input type="text" placeholder="Search course"/>
                </label>
                <button type="submit">
                    <FaSearch/>
                </button>
                <div className="search-open"></div>
            </div>
            <div className="dropdown">
                <input className="burger-check" id="burger-check" type="checkbox" defaultChecked={this.state.isOpen?"checked":""}/>
                <label htmlFor="burger-check" className="burger" onClick={this.handleToggle}></label>
            </div>
            <ul className={this.state.isOpen?"show-nav":""}>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/curriculum'>Curriculum</Link></li>
                <li><Link to='/'>Mentorship</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/'>FAQ</Link></li>
                <li><Link to='/en/dashboard' className=''>Communit hub</Link></li>
            </ul>
            <div className="profile-">
                <div className="profile-image">
                    {/* <img src={profile} alt=""/> */}
                </div>
                <div className="notifications">
                    hello
                </div>
            </div>
        </nav>
    );
 }
}



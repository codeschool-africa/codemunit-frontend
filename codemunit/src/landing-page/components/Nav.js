import React, { Component } from 'react'
import logo from "../../images/logo.png"
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
                        <img src={logo} alt="kodemunit logo"/>
                    </Link>
                </h1>
            </div>
            <div></div>
            <div className="dropdown">
                <input className="burger-check" id="burger-check" type="checkbox" defaultChecked={this.state.isOpen?"checked":""}/>
                <label htmlFor="burger-check" className="burger" onClick={this.handleToggle}></label>
            </div>
            <ul className={this.state.isOpen?"show-nav":""}>
                <li><Link to='/about' onClick={this.handleToggle}>About</Link></li>
                <li><Link to='/' onClick={this.handleToggle}>Curriculum</Link></li>
                <li><Link to='/' onClick={this.handleToggle}>Mentorship</Link></li>
                <li><Link to='/blog' onClick={this.handleToggle}>Blog</Link></li>
                <li><Link to='/' onClick={this.handleToggle}>FAQ</Link></li>
                <li><Link to='/user' className='btn-primary' onClick={this.handleToggle}>Join Now</Link></li>
            </ul>
        </nav>
    );
 }
}



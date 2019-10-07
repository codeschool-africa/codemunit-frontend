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
        <nav className={this.state.isOpen?"blog-nav-bg":""}>
            <div className="logo">
                <h1>
                    <Link to='/'>
                        Codemunit
                    </Link>
                </h1>
            </div>
            <div></div>
            <div className="dropdown">
                <input className="burger-check" id="burger-check" type="checkbox" defaultChecked={this.state.isOpen?"checked":""}/>
                <label htmlFor="burger-check" className="burger" onClick={this.handleToggle}></label>
            </div>
            <ul className={this.state.isOpen?"show-nav":""}>
                <li><Link to='/' onClick={this.handleToggle}>Home</Link></li>
                <li><Link to='/user' className='btn-primary' onClick={this.handleToggle}>Join Now</Link></li>
            </ul>
        </nav>
    );
 }
}


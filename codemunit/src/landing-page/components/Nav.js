import React, { Component } from 'react'
import logo from "../../images/logo.png"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Nav extends Component  {
    state={
        isOpen:false,
    }

    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen});
    }


    render() {
        const authenticated = this.state.authenticated;
        console.log(authenticated);
    return (
        <nav className={this.state.isOpen?"nav-bg":""}>
            <div className="logo">
                    <Link to='/'>
                        <img src={logo} alt="kodemunit logo"/>
                    </Link>
            </div>
            <div></div>
            <div className="dropdown">
                <input className="burger-check" id="burger-check" type="checkbox" defaultChecked={this.state.isOpen?"checked":""}/>
                <label htmlFor="burger-check" className="burger" onClick={this.handleToggle}></label>
            </div>
            <ul className={this.state.isOpen?"show-nav":""}>
                <li><Link to='/about' onClick={this.handleToggle}>About</Link></li>
                <li><a href='#curriculum' onClick={this.handleToggle}>Curriculum</a></li>
                <li><Link to='/mentorship' onClick={this.handleToggle}>Mentorship</Link></li>
                <li><Link to='/blog' onClick={this.handleToggle}>Blog</Link></li>
                <li><Link to='/mentorship' onClick={this.handleToggle}>FAQ</Link></li>
                <li>{ authenticated === true ? (
                        <Link to="/en/dashboard" className="btn-primary" onClick={this.handleToggle}>Dashboard</Link>
                    ) :
                    (
                        <Link to="/account" className="btn-primary" onClick={this.handleToggle}>Join Now</Link>
                    ) }
                </li>
            </ul>
        </nav>
    );
 }
}

const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated
});

Nav.propTypes = {
    user: PropTypes.object
};

export default connect(mapStateToProps)(Nav);

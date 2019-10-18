import React from 'react';
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { useSelector } from "react-redux"

const Header = () => {
    const isLogged = useSelector(state => state.isLogged);
    return (
        <header>
            <div className="container">
                <Nav/>
                <MobileNav/>
                <p>{isLogged}</p>
            </div>
        </header>
    );
}

export default Header;

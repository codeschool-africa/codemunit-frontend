import React from 'react';
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
    return (
        <header>
            <div className="container">
                <Nav/>
                <MobileNav/>
            </div>
        </header>
    );
}

export default Header;

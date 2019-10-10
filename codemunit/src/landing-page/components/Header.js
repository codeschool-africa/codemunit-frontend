import React from 'react'
import Nav from './Nav'

export default function Header({children,hero}) {
    return (
        <header className={hero}>
            <div className="bg-color">
                <div className="container">
                    <Nav />
                    {children}
                </div>
            </div>
        </header>
    )
}

Header.defaultProps = {
    hero:"defaultHero"
};

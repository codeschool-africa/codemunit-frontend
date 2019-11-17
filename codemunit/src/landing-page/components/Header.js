import React, { useState, useEffect, useRef } from 'react'
import Nav from './Nav'

export default function Header({children,hero}) {

  const [theposition, setThePosition] = useState({
    theposition: 0
  });

  const [isNav, setTheNav] = useState({
    isNav: false
  });

  useEffect(() => {
  })

    return (
      <header className={hero}>
        <div className="bg-color">
          <div className="container">
            <Nav />
            {children}
          </div>
        </div>
      </header>
    );
}

Header.defaultProps = {
    hero:"defaultHero"
};

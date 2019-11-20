import React, { useState, useEffect, useRef } from 'react'
import Nav from './Nav'


function useOnScreen (options) {
  const ref = React.useRef();
  const [ intersect, setIntersect ] = React.useState(true);

  React.useEffect(()=> {
    const observer = new IntersectionObserver(([entry])=> {
      setIntersect(entry.isIntersecting);
    }, options)
  },[ref, options])
}

export default function Header({children, hero, nav}) {
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

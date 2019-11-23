import React, { useState, useEffect, useRef } from 'react'
import Nav from './Nav'


function useOnScreen (options) {
  const ref = React.useRef();
  const [ intersect, setIntersect ] = React.useState();

  React.useEffect(()=> {
    const observer = new IntersectionObserver(([entry])=> {
      setIntersect(entry.isIntersecting);
    }, options)

    if(ref.current){
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    }
  },[ref, options]);

  return [ref, intersect];
}

export default function Header({children, hero}) {

  const [ ref, intersect ] = useOnScreen({
    rootMargin: '-100px'
  });
    return (
      <header className={hero} ref={ref}>
        <div className="bg-color">
          <div className="container">
            <Nav navProps={intersect?`nav-neg`:`nav-props`}/>
            {/* add animations to the nav in css to transform it from -60px to 0px */}
            {children}
          </div>
        </div>
      </header>
    );
}

Header.defaultProps = {
    hero:"defaultHero"
};

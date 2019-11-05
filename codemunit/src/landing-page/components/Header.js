import React from 'react'
import Nav from './Nav'

export default function Header({children,hero}) {

    // componentDidMount() {
    //     window.addEventListener("scroll", this.myFunc);
    // };

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.updateDimensions);
    // }

    // myFunc = () => {
    //     alert("hello world");
    // }

    return (
      <header className={hero} >
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

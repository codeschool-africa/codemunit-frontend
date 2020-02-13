import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import bannerBg from "../../images/banner_bg.png";
import routes from "../../data/landingnav";
import Nav from "./nav";
import Banner from "./banner";

function useOnScreen(options) {
  const ref = useRef();
  const [intersect, setIntersect] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersect(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, intersect];
}

const Header = ({ ...rest }) => {
  const [ref, intersect] = useOnScreen({
    rootMargin: "100px"
  });
  return (
    <header ref={ref} className="home header">
      <Nav
        {...rest}
        routes={routes}
        navProps={intersect ? `nav__static` : `nav__sticky`}
      />
      <Banner
        title='Welcome to Kodemunit'
        description='We monitor and guide software development learners by bringing together learners and experts in a community. We equip software developer with skills and knowledge necessary to get software developer jobs'
        image={bannerBg}
        imgAlt='banner bg'
      >
        <Link to='/' className='btn btn-primary'>
          Learn More
        </Link>
      </Banner>
    </header>
  );
};

export default Header;

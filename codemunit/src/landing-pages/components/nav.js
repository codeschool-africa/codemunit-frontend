import React from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../images/logo.png";

const Nav = ({ routes, navProps }) => {
  const location = useLocation();
  const activeRoute = routeName => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <nav className={navProps}>
      <div className='container'>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt='kodemunit logo' />
          </Link>
        </div>
        <div className='burger'></div>
        <div className='navigation'>
          <ul>
            {routes.map((prop, key) => {
              return (
                <li key={key}>
                  <Link
                    to={prop.path}
                    className={
                      activeRoute(prop.path) + (prop.pro ? " active" : "")
                    }
                  >
                    {prop.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Link className='btn btn-primary'>signup/login</Link>
      </div>
    </nav>
  );
};

export default Nav;

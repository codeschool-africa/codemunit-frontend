import React from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import logo from "../../images/logo.png";

const Nav = ({ routes, navProps, auth: { isAuthenticated, user } }) => {
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
        {isAuthenticated ? (
          <Link className='btn btn-primary' to="dashboard">Dashboard</Link>
        ) : (
          <Link className='btn btn-primary' to="signin">signup/login</Link>
        )}
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

Nav.propTypes = {
  auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps, {})(Nav);

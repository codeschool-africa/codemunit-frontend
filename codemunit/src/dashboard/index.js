import React, { useEffect, useState, Fragment } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../redux/actions/auth";
import { getProfile, updateProfile } from "../redux/actions/profile";
import Alert from "../components/alerts";
import "../styles/dashboard/style.css";

import logo from "../images/black-logo.png";

//components
// import Header from "./components/header";
// import Aside from "./components/aside";

//pages
import Profile from "./pages/User-profile";
import UpdateProfile from "./pages/updateProfile";

const Error = () => <h1>Error 404: page not found</h1>;

const Dashboard = ({
  auth: { isAuthenticated, user },
  logout,
  getProfile,
  updateProfile,
  profile: { profile, loading }
}) => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <div className='dashboard'>
        <div className='dashboard-header'>
          <nav>
            <div className='logo'>
              <Link to={`${url}`}>
                <img
                  src={logo}
                  alt='kodemunit logo'
                  style={{
                    height: "40px"
                  }}
                />
              </Link>
            </div>
            <ul>
              <li>
                <Link to={`${url}/my-courses`}>My Courses</Link>
              </li>
              <li>
                <Link to={`${url}/profile`}>Profile</Link>
              </li>
              <li>
                <Link to={`${url}/edit-profile`}>Edit profile</Link>
              </li>
            </ul>
          </nav>
        </div>
        <aside className='side-nav'>
          <div className='logo'>
            <img
              src={user.avatar}
              alt='kodemunit logo'
              style={{
                height: "40px"
              }}
            />
            <span>
              {user.firstname} {user.secondname}
            </span>
            <ul>
              <li>
                <a href='#!' onClick={logout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div className='main'>
          <Switch>
            <Route exact path={path}>
              <h1>Hello from home page</h1>
            </Route>
            <Route exact path={`${path}/profile`}>
              <Profile />
            </Route>
            <Route exact path={`${path}/edit-profile`}>
              <UpdateProfile />
            </Route>
            <Route exact path={`${path}/my-courses`}>
              <div>
               <h1>hello from my courses</h1>
              </div>
            </Route>
            <Route component={Error} />>
          </Switch>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

Dashboard.propTypes = {
  logout: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { logout, getProfile, updateProfile })(
  Dashboard
);

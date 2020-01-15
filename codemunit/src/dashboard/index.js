import React, { useEffect, useState, Fragment } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import {
  IoMdHome,
  MdGolfCourse,
  FaUserCircle,
  FiSettings,
  FiLogOut
} from "react-icons/all";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../redux/actions/auth";
import { getProfile, updateProfile } from "../redux/actions/profile";
import Alert from "../components/alerts";
import "../styles/dashboard/style.css";

import logo from "../images/logo.png";
import altLogo from "../images/logo192x192.png";

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
  const [navOpen, setOpen] = useState(true);
  const handleNav = () => {
    setOpen(!navOpen);
    console.log(navOpen);
  };
  let { path, url } = useRouteMatch();
  return (
    <>
      <div className='dashboard'>
        <div
          className={
            navOpen ? "dashboard-header" : "dashboard-header full-width"
          }
        >
          <nav>
            <div className='burger' onClick={handleNav}>
              <span></span>
              <span></span>
              <span></span>
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
              <li className='img'>
                {user === null ? (
                  ""
                ) : (
                  <img
                    src={user.avatar}
                    alt={`${user.avatar} avatar`}
                  />
                )}
              </li>
            </ul>
          </nav>
        </div>
        <aside className={navOpen ? "" : "side-nav"}>
          <div className='logo'>
            <img
              src={navOpen ? logo : altLogo}
              alt={`kodemunit logo`}
            />
          </div>
          <ul className='navigation'>
            <div className='profile-name'>
              {user.firstname} {user.secondname}
            </div>
            <li>
              <Link to='/dashboard' className='active'>
                <IoMdHome className='icon' /> Home
              </Link>
            </li>
            <li>
              <Link to='/dashboard/my-courses'>
                <MdGolfCourse className='icon' />
                My Courses
              </Link>
            </li>
            <li>
              <Link to='/dashboard/profile'>
                {" "}
                <FaUserCircle className='icon' />
                Profile
              </Link>
            </li>
            <li>
              <Link to='/dashboard/edit-profile'>
                {" "}
                <FiSettings className='icon' />
                Settings
              </Link>
            </li>
          </ul>
          <ul className='extra-links'>
            <li>
              <a href='#!' onClick={logout}>
                <FiLogOut className='icon' />
                Logout
              </a>
            </li>
          </ul>
        </aside>
        <div className={navOpen ? "main" : "main full-width"}>
          <Switch>
            <Route exact path={path}>
              <h1>Hello {user.firstname}, welcome to your dashboard</h1>
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
                <Link to='/curriculum'>Curriculum</Link>
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

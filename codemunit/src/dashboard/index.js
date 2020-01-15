import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import {
  IoMdHome,
  MdGolfCourse,
  FaUserCircle,
  FiSettings,
  FiLogOut,
  FaProjectDiagram,
  MdNotifications
} from "react-icons/all";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../redux/actions/auth";
import { getProfile, updateProfile } from "../redux/actions/profile";
import Alert from "../components/alerts";
import "../styles/dashboard/style.css";

import logo from "../images/logo.png";
import altLogo from "../images/logo192x192.png";

//pages
import Home from "./pages/Home"
import Profile from "./pages/User-profile";
import UpdateProfile from "./pages/updateProfile";
import AllCourses from "./pages/allCourses";
import MyCourses from "./pages/myCourses";
import Notifications from "./pages/notifications";

const Error = () => {
  return (
    <header>
      <div className="container">
        <h2>Oooopss!!! page not found, check your url and try again</h2>
      </div>
    </header>
  )
};

const Dashboard = ({
  auth: { isAuthenticated, user },
  logout,
  getProfile,
  updateProfile,
  profile: { profile, loading }
}) => {
  const [navOpen, setOpen] = useState(true);

  const [isHome, setHome] = useState(true);
  const [isProfile, setProfile] = useState(false);
  const [isSetting, setSetting] = useState(false);
  const [isNotification, setNotification] = useState(false);
  const [isCourses, setCourses] = useState(false);
  const [isMyCourses, setMyCourses] = useState(false);

  const homeToggle = () => {
    setHome(true);
    setProfile(false);
    setSetting(false);
    setNotification(false);
    setCourses(false);
    setMyCourses(false);
  };

  const profileToggle = () => {
    setHome(false);
    setProfile(true);
    setSetting(false);
    setNotification(false);
    setCourses(false);
    setMyCourses(false);
  };

  const settingToggle = () => {
    setHome(false);
    setProfile(false);
    setSetting(true);
    setNotification(false);
    setCourses(false);
    setMyCourses(false);
  };

  const notificationToggle = () => {
    setHome(false);
    setProfile(false);
    setSetting(false);
    setNotification(true);
    setCourses(false);
    setMyCourses(false);
  };

  const coursesToggle = () => {
    setHome(false);
    setProfile(false);
    setSetting(false);
    setNotification(false);
    setCourses(true);
    setMyCourses(false);
  };

  const myCoursesToggle = () => {
    setHome(false);
    setProfile(false);
    setSetting(false);
    setNotification(false);
    setCourses(false);
    setMyCourses(true);
  };

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
                <Link to={`${url}/my-courses`} onClick={myCoursesToggle}>
                  My Courses
                </Link>
              </li>
              <li>
                <Link to={`${url}/profile`} onClick={profileToggle}>
                  Profile
                </Link>
              </li>
              <li>
                <Link to={`${url}/edit-profile`} onClick={settingToggle}>
                  Edit profile
                </Link>
              </li>
              <li className='img'>
                {user === null ? (
                  ""
                ) : (
                  <img src={user.avatar} alt={`${user.avatar} avatar`} />
                )}
              </li>
            </ul>
          </nav>
        </div>
        <aside className={navOpen ? "" : "side-nav"}>
          <div className='logo'>
            <img src={navOpen ? logo : altLogo} alt={`kodemunit logo`} />
          </div>
          <div className='profile-name'>
            {user.firstname} {user.secondname}
          </div>
          <nav>
            <ul className='navigation'>
              <li>
                <Link
                  to={`${url}`}
                  className={isHome ? "active" : ""}
                  onClick={homeToggle}
                >
                  <IoMdHome className='icon' /> <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to={`${url}/notifications`}
                  className={isNotification ? "active" : ""}
                  onClick={notificationToggle}
                >
                  <MdNotifications className='icon' />
                  <span>Notifications</span>
                </Link>
              </li>
              <li>
                <Link
                  to={`${url}/my-courses`}
                  className={isMyCourses ? "active" : ""}
                  onClick={myCoursesToggle}
                >
                  <MdGolfCourse className='icon' />
                  <span>My Courses</span>
                </Link>
              </li>
              <li>
                <Link
                  to={`${url}/all-courses`}
                  className={isCourses ? "active" : ""}
                  onClick={coursesToggle}
                >
                  <FaProjectDiagram className='icon' />
                  <span>All Courses</span>
                </Link>
              </li>
              <li>
                <Link
                  to={`${url}/profile`}
                  className={isProfile ? "active" : ""}
                  onClick={profileToggle}
                >
                  <FaUserCircle className='icon' />
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  to={`${url}/edit-profile`}
                  className={isSetting ? "active" : ""}
                  onClick={settingToggle}
                >
                  <FiSettings className='icon' />
                  <span>Settings</span>
                </Link>
              </li>
            </ul>
            <ul className='extra-links'>
              <li>
                <a href='#!' onClick={logout}>
                  <FiLogOut className='icon' />
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <div className={navOpen ? "main" : "main full-width"}>
          <Switch>
            <Route exact path={path}>
              <Home/>
            </Route>
            <Route exact path={`${path}/profile`}>
              <Profile />
            </Route>
            <Route exact path={`${path}/edit-profile`}>
              <UpdateProfile />
            </Route>
            <Route exact path={`${path}/my-courses`}>
              <MyCourses />
            </Route>
            <Route exact path={`${path}/notifications`}>
              <Notifications />
            </Route>
            <Route exact path={`${path}/all-courses`}>
              <AllCourses />
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

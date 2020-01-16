import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
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
import { logout } from "../../redux/actions/auth";
import { getProfile, updateProfile } from "../../redux/actions/profile";
import Alert from "../../components/alerts";

const Home = ({
  auth: { isAuthenticated, user },
  logout,
  getProfile,
  updateProfile,
  profile: { profile, loading }
}) => {
  return (
    <>
      <div className='content'>
        <header>
          <div className='container'>
            <span>Dashboard</span>
            <h2>Hello {user.firstname}, welcome to your dashboard</h2>
          </div>
        </header>
        <div className='main-container'>
          <div className='container'></div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

Home.propTypes = {
  logout: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { logout, getProfile, updateProfile })(
  Home
);

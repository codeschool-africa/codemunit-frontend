import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux"
import { getProfile, updateProfile } from "../../redux/actions/profile";

import Time from "../components/time";

const AllCourses = ({ auth: { isAuthenticated, user }, getProfile }) => {
  return (
    <div className='content'>
      <header>
        <div className='container'>
          <span>
            <h2>Dashboard </h2>&nbsp;&nbsp;/&nbsp;&nbsp;
            <Link to='/dashboard'>{user.firstname}</Link>
            &nbsp;&nbsp;/&nbsp;&nbsp;all courses
          </span>
          <Time />
        </div>
      </header>
      <div className='main-container'>
        <div className='container'></div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
  // location: state.location
});

AllCourses.propTypes = {
  // location: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

export default connect(mapStateToProps, {
  getProfile,
  updateProfile
})(AllCourses);
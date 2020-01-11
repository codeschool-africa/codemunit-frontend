import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getProfile } from "../../redux/actions/profile";

const Profile = ({
  auth: { isAuthenticated, user },
  getProfile,
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      <h1>Hey {user.firstname} here is your profile</h1>
      {loading && profile === null ?
        "You haven't set your profile yet...": (
        <ul>
          <h2>Courses</h2>
          {/* <span>{profile.githubusername}</span> */}
          <h2>Social media</h2>
          <h2>Github</h2>
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

Profile.propTypes = {
//   logout: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { getProfile })(Profile);

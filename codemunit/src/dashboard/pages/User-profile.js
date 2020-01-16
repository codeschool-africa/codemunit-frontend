import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/all";

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
    <div className='content'>
      <header>
        <div className='container'>
          <h2>
            {profile === null
              ? `Hey ${user.firstname} set your profile`
              : `Hey ${user.firstname} here is your profile`}
          </h2>
        </div>
      </header>
      <div className='main-container'>
        <div className='container'>
          {profile === null ? (
            "You haven't set your profile yet..."
          ) : (
            <ul>
              <h2>Courses</h2>
              {profile.courses.length > 0 ? (
                <ul>
                  {profile.courses.map(course => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              ) : (
                <p>No registered courses</p>
              )}
              <h2>Social media</h2>
              <div className='social-media'>
                {profile.social.linkedin === null ? null : (
                  <a href={`http://www.linkedin/in/${profile.social.linkedin}`}>
                    <FaLinkedinIn />
                  </a>
                )}
                <a href={`http://www.twitter.com/${profile.social.twitter}`}>
                  <FaTwitter />
                </a>
                {profile.social.githubusername === null ? null : (
                  <a href={`http://www.linkedin/in/${profile.githubusername}`}>
                    <FaLinkedinIn />
                  </a>
                )}
              </div>
            </ul>
          )}
        </div>
        {profile.githubusername === null ? <>Register to github website and get everything</> : <>
          hello user
        </>}
      </div>
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

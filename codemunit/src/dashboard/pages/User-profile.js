import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/all";
import { getProfile } from "../../redux/actions/profile";

import Time from "../components/time";

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
          <span>
            <h2>Dashboard </h2>&nbsp;&nbsp;/&nbsp;&nbsp;
            <Link to='/dashboard'>{user.firstname}</Link>
            &nbsp;&nbsp;/&nbsp;&nbsp;profile
          </span>
          <Time />
        </div>
      </header>
      <div className='main-container'>
        <div className='container'>
          <div className='profile-header'>
            <img src={user.avatar} alt={`${user.firstname} avatar`} />
            <div className='profile-details'>
              <div className='name'>
                {user.firstname} {user.secondname}
              </div>
              <p className='bio'>Frontend web developer</p>
              <p className='about-user'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                iusto quam explicabo, distinctio commodi sequi repellat rerum
                necessitatibus, fugit laborum doloremque reprehenderit beatae
                nemo, quos deserunt? Ut iste accusantium cupiditate.
              </p>

            </div>
          </div>
          <div className='user-details'>
            {loading ? (
              <>Loading...</>
            ) : (
              <>
                {profile === null ? (
                  "You haven't set your profile yet..."
                ) : (
                  <ul>
                    <h2>Courses</h2>
                    {profile.courses[2]}
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
                        <a
                          href={`http://www.linkedin/in/${profile.social.linkedin}`}
                        >
                          <FaLinkedinIn />
                        </a>
                      )}
                      <a
                        href={`http://www.twitter.com/${profile.social.twitter}`}
                      >
                        <FaTwitter />
                      </a>
                      {profile.social.githubusername === null ? null : (
                        <a
                          href={`http://www.github.com/${profile.githubusername}`}
                        >
                          <FaGithub />
                        </a>
                      )}
                    </div>
                  </ul>
                )}
                {profile.githubusername === null ? (
                  <>Register to github website and get everything</>
                ) : (
                  <>hello user</>
                )}
              </>
            )}
          </div>
        </div>
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

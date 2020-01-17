import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../redux/actions/auth";
import { getProfile, updateProfile } from "../../redux/actions/profile";
// import Alert from "../../components/alerts";

import Time from "../components/time";

const Home = ({
  auth: { isAuthenticated, user },
  logout,
  getProfile,
  updateProfile,
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getProfile();
  }, []);
  useEffect(() => {
    document.title = `${user.firstname} dashboard - Kodemunit`;
  });
  return (
    <>
      <div className='content'>
        <header>
          <div className='container'>
            <span>
              <h2>Dashboard </h2>&nbsp;&nbsp;/&nbsp;&nbsp;
              <a href='#!'>{user.firstname}</a>
            </span>
            <span>
              <Time />
            </span>
          </div>
        </header>
        <div className='main-container'>
          <div className='container'>
            <section className='sect-one'>
              <header>
                <h2>My courses</h2>
              </header>
              <div className='showcase'>
                <ul className='courses-header'>
                  <li>
                    <span className='course'>Course</span>
                    <span className='progress'>Progress</span>
                  </li>
                </ul>
                {loading ? (
                  <ul>Loading...</ul>
                ) : (
                  <>
                    {profile === null ? (
                      <ul>
                        No registered course found, start your learning path
                        today <Link to='/curriculum'>Get started</Link>
                      </ul>
                    ) : (
                      <>
                        {profile.courses.length === 0 ? (
                          <ul>
                            No registered course found, start your learning path
                            today <Link to='/curriculum'>Get started</Link>
                          </ul>
                        ) : (
                          <>
                            <ul className='courses-showcase'>
                              {profile.courses.map(course => (
                                <li key={course}>
                                  <span className='course'>
                                    <Link to='/curriculum/frontend-web-development'>
                                      {course}
                                    </Link>
                                  </span>
                                  <span className='progress'>0%</span>
                                </li>
                              ))}
                              <Link
                                to={`/dashboard/${user._id}/my-courses`}
                                className='btn-secondary'
                              >
                                View all
                              </Link>
                            </ul>
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
            </section>
            <section className='sect-one'>
              <header>
                <h2>Notifications</h2>
              </header>
              <div className='showcase'>
                <div className='notifications'>
                  <div className='container'>
                    <ul>
                      <li>
                        <Link to="">Lorem ipsum donor el chase tor top, les...</Link>
                      </li>
                      <li>
                        <Link to="">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit...
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          Eos iusto quam explicabo, distinctio commodi...
                        </Link>
                      </li>
                      <li>
                        <Link to="">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit...
                        </Link>
                      </li>
                      <li>
                        <Link to="">.....</Link>
                      </li>
                      <Link
                        to={`/dashboard/${user._id}/notifications`}
                        className='btn-secondary'
                      >
                        View All
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className='sect-one'>
              <header>
                <h2>Articles</h2>
              </header>
              <div className='showcase'>
                <ul>
                  <li>
                    Hello {user.firstname}, No article available for you today
                  </li>
                </ul>
              </div>
            </section>
          </div>
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

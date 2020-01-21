import React, { useEffect, useState } from "react";
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
  const [courses, setCourses] = useState([
    {
      title: "Introduction to Programming",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore corrupti",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ar quo molestisoluta veniam cum vero  ",
      link: "introduction-to-programming"
    },
    {
      title: "Frontend Web Development",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisitempore corrupti, quo molestias quae lias",
      description:
        "quae eum soluta veniam cum vero officia asperiores. Minima nesciunt placeat accusantium veritatis veniam alias",
      link: "frontend-web-development"
    },
    {
      title: "Backend Web Development",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto tempore corrupti",
      description:
        " quo molestias quae eum soluta veniam cum vero officia asperiores. Minima nesciunt placeat accusantium veritatis veniam ratione cum alias",
      link: "backend-web-development"
    },
    {
      title: "UI/UX Design",
      content:
        "Lomolestias quae eum soluta veniam cum vero ont placatione cum alias",
      description:
        "Lore quae eumnesciunt placeat accusantium veritatis veniam ratione cum alias",
      link: "ui-ux-design"
    },
    {
      title: "Mobile APP Development",
      content:
        " quae eum soluta veniam cum vero officia asperiores. eritatis veniam ratione cum alias",
      description:
        " veniam cum vero officia asperiores. Minima veritatis veniam ratione cum alias",
      link: "mobile-app-development"
    }
  ]);
  useEffect(() => {
    getProfile();
  }, []);
  useEffect(() => {
    document.title = `${user.firstname} dashboard - Kodemunit`;
  },[]);
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
          <div className='container numbers'>
            {loading ? (
              <>loading...</>
            ) : (
              <>
                {profile === null ? (
                  <>No profile found</>
                ) : (
                  <>
                    <section className='sect-one'>
                      <header>
                        <h2>
                          {profile.courses.length > 0 && profile.courses.length}
                        </h2>
                      </header>
                      <div className='showcase'>
                        <ul>
                          <li>Followed courses</li>
                        </ul>
                      </div>
                    </section>
                    <section className='sect-one'>
                      <header>
                        <h2>0</h2>
                      </header>
                      <div className='showcase'>
                        <ul>
                          <li>Completed courses</li>
                        </ul>
                      </div>
                    </section>
                    <section className='sect-one'>
                      <header>
                        <h2>0</h2>
                      </header>
                      <div className='showcase'>
                        <ul>
                          <li>Completed projects</li>
                        </ul>
                      </div>
                    </section>
                    <section className='sect-one'>
                      <header>
                        <h2>0</h2>
                      </header>
                      <div className='showcase'>
                        <ul>
                          <li>Achievements on the courses</li>
                        </ul>
                      </div>
                    </section>
                  </>
                )}
              </>
            )}
          </div>
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
                <h2>Projects</h2>
              </header>
              <div className='showcase'>
                <ul>
                  <li>
                    Hello {user.firstname}, Subscribe to premium offer to start
                    creating your projects to share the world
                  </li>
                </ul>
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
                        <Link to=''>
                          Lorem ipsum donor el chase tor top, les...
                        </Link>
                      </li>
                      <li>
                        <Link to=''>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit...
                        </Link>
                      </li>
                      <li>
                        <Link to=''>
                          Eos iusto quam explicabo, distinctio commodi...
                        </Link>
                      </li>
                      <li>
                        <Link to=''>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit...
                        </Link>
                      </li>
                      <li>
                        <Link to=''>.....</Link>
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
          <header>
            <div className='container'>
              <span>
                <h2>Check out these new courses</h2>
              </span>
            </div>
          </header>
          <div className='main-container'>
            <div className='container new-courses'>
              {loading ? (
                <ul>Loading...</ul>
              ) : (
                <>
                  {profile.courses === null ? (
                    <ul>
                      No new courses{" "}
                      <Link to='/curriculum'>Check the existing courses</Link>
                    </ul>
                  ) : (
                    <>
                      {courses.map(course => (
                        <section className='sect-one' key={course.title}>
                          <header>
                            <h2>{course.title}</h2>
                          </header>
                          <div className='showcase'>
                            <p>{course.content}</p>
                            <p>{course.description}</p>
                            <Link
                              to={`curriculum/${course.link}`}
                              target='_blank'
                              className='btn-secondary'
                            >
                              View Curriculum
                            </Link>
                          </div>
                        </section>
                      ))}
                    </>
                  )}
                </>
              )}
            </div>
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

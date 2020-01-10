import React, { useEffect, useState, Fragment } from "react";
// import { Link } from "react-router-dom"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../redux/actions/auth";
import { getProfile, updateProfile } from "../redux/actions/profile";
import Alert from "../components/alerts";
import "../styles/dashboard/style.css";

//pages

const Dashboard = ({
  auth: { isAuthenticated, user },
  logout,
  getProfile,
  updateProfile,
  profile: { profile, loading }
}) => {
  const [formData, setFormData] = useState({
    location: "",
    skills: "",
    courses: "",
    twitter: "",
    linkedin: "",
    githubusername: ""
  });

  const {
    location,
    skills,
    courses,
    twitter,
    linkedin,
    githubusername
  } = formData;

  useEffect(() => {
    getProfile();
  }, []);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    updateProfile({
      location,
      skills,
      courses,
      twitter,
      linkedin,
      githubusername
    });
  };
  return (
    <div className='dashboard dashboard-home'>
      <h1>Welcome {`${user.firstname}${" "}${user.secondname}`}</h1>
      <img src={user.avatar} alt={`${user.firstname} profile's avatar`} />
      {loading && profile === null ? (
        "fill the form below to set your profile"
      ) : (
        <Fragment>
          <h1>hello {profile.githubusername}, welcome to your dashboard</h1>
        </Fragment>
      )}
      <form onSubmit={e => handleSubmit(e)}>
        <Alert />
        <label htmlFor='location'>
          <input
            type='text'
            placeholder='location'
            name='location'
            value={location}
            onChange={e => handleChange(e)}
          />
        </label>
        <label htmlFor='skills'>
          <input
            type='text'
            placeholder='skills'
            name='skills'
            value={skills}
            onChange={e => handleChange(e)}
          />
        </label>
        <label htmlFor='courses'>
          <input
            type='text'
            placeholder='courses'
            name='courses'
            value={courses}
            onChange={e => handleChange(e)}
          />
        </label>
        <label htmlFor='twitter'>
          <input
            type='text'
            placeholder='twitter'
            name='twitter'
            value={twitter}
            onChange={e => handleChange(e)}
          />
        </label>
        <label htmlFor='linkedin'>
          <input
            type='text'
            placeholder='linkedin'
            name='linkedin'
            value={linkedin}
            onChange={e => handleChange(e)}
          />
        </label>
        <label htmlFor='githubusername'>
          <input
            type='text'
            placeholder='github username'
            name='githubusername'
            value={githubusername}
            onChange={e => handleChange(e)}
          />
        </label>
        <button className='btn-primary'>Submit</button>
      </form>
      <a href='#!' onClick={logout} className='btn-primary'>
        logout
      </a>
    </div>
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

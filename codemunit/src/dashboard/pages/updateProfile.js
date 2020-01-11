import React, { useEffect, useState, Fragment } from "react";
// import { Link } from "react-router-dom"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../redux/actions/auth";
import { getProfile, updateProfile } from "../../redux/actions/profile";
import Alert from "../../components/alerts";

//pages

const UpdateProfile = ({
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
    <div className="update-profile">
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
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

UpdateProfile.propTypes = {
  logout: PropTypes.func.isRequired,
  getProfile: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { logout, getProfile, updateProfile })(
  UpdateProfile
);

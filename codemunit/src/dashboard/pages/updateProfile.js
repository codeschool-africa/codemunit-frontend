import React, { useEffect, useState, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { logout } from "../../redux/actions/auth";
import { getProfile, updateProfile } from "../../redux/actions/profile";
// import { location } from "../../redux/actions/location";
import Alert from "../../components/alerts";

//pages

const UpdateProfile = ({
  auth: { isAuthenticated, user },
  getProfile,
  updateProfile,
  history,
  // location: { countries },
  profile: { profile, loading },
  props
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
    <div className='content'>
      <header>
        <div className='container'>
          <h2>Hello please add or edit your profile</h2>
        </div>
      </header>
      <div className='main-container'>
        <div className='container'>
          <form onSubmit={e => handleSubmit(e)}>
            <Alert />
            <label htmlFor='location'>
              <select name='location' onChange={e => handleChange(e)}>
                <option value=''>Choose country</option>
                <option value='Tanzania'>Tanzania</option>
                <option value='Kenya'>Kenya</option>
                <option value='Uganda'>Uganda</option>
              </select>
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
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
  // location: state.location
});

UpdateProfile.propTypes = {
  // location: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

export default connect(mapStateToProps, {
  getProfile,
  updateProfile
  // location
})(withRouter(UpdateProfile));

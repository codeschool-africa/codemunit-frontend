import React, { useEffect, useState, Fragment } from "react";
// import { Link } from "react-router-dom"
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { logout } from "../../redux/actions/auth";
import { getProfile, updateProfile } from "../../redux/actions/profile";
import { location } from "../../redux/actions/location"
import Alert from "../../components/alerts";

//pages

const UpdateProfile = ({
  auth: { isAuthenticated, user },
  getProfile,
  updateProfile,
  location: { countries },
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
  const loadLocation = () => {
    // location();
  }
  return (
    <div className="update-profile">
      {/* <button onClick={loadLocation}>Load location</button> */}
      <form onSubmit={e => handleSubmit(e)}>
        <Alert />
        <label htmlFor='location'>
          <select name="location" onChange={e => handleChange(e)}>
            <option value="">Choose country</option>
            <option value="Tanzania">Tanzania</option>
            <option value="Kenya">Kenya</option>
            <option value="Uganda">Uganda</option>
          </select>
          {/* <input
            type='text'
            placeholder='location'
            name='location'
            value={location}
            onChange={e => handleChange(e)}
          /> */}
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
            type='checkbox'
            // placeholder='courses'
            name='courses'
            value="frontend web development"
            onChange={e => handleChange(e)}
          /> Frontend web development
          <input
            type='checkbox'
            // placeholder='courses'
            name='courses'
            value="backend web development"
            onChange={e => handleChange(e)}
          /> Backend Web Development
          <input
            type='checkbox'
            // placeholder='courses'
            name='courses'
            value="UI/UX Design"
            onChange={e => handleChange(e)}
          /> UI/UX Design
          <input
            type='checkbox'
            // placeholder='courses'
            name='courses'
            value="Mobile App Development"
            onChange={e => handleChange(e)}
          /> Mobile App Development Development
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
  profile: state.profile,
  location: state.location
});

UpdateProfile.propTypes = {
  location: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { getProfile, updateProfile, location })(
  UpdateProfile
);

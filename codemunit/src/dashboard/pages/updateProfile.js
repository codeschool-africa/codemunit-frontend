import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProfile, updateProfile } from "../../redux/actions/profile";
// import { location } from "../../redux/actions/location";
import Alert from "../../components/alerts";

import Time from "../components/time";

//ckeditor
import CKEditor from "ckeditor4-react";

import { setAlert } from "../../redux/actions/alert";

const UpdateProfile = ({
  auth: { isAuthenticated, user },
  getProfile,
  updateProfile,
  history,
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
  if (!loading) {
    setAlert("loading...", "secondary");
  }

  const {
    location,
    skills,
    courses,
    twitter,
    linkedin,
    githubusername
  } = formData;

  // useEffect(() => {
  //   getProfile();
  // }, []);

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
          <span>
            <h2>Dashboard </h2>&nbsp;&nbsp;/&nbsp;&nbsp;
            <Link to='/dashboard'>{user.firstname}</Link>
            &nbsp;&nbsp;/&nbsp;&nbsp;edit-profile
          </span>
          <Time />
        </div>
      </header>
      <div className='main-container'>
        <div className='container'>
          <div>
            <form onSubmit={e => handleSubmit(e)}>
              <Alert />
              <label htmlFor='location'>
                <select name='location' onChange={e => handleChange(e)}>
                  <option value=''>Choose country</option>
                  <option value='Tanzania'>Tanzania</option>
                  <option value='Kenya'>Kenya</option>
                  <option value='Uganda'>Uganda</option>
                  <option value='Rwanda'>Rwanda</option>
                  <option value='Burundi'>Burundi</option>
                </select>
              </label>
              <label htmlFor='skills'>
                <input
                  type='text'
                  placeholder='skills'
                  
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
            <div className='text-editor'>
              <CKEditor data='<p>Write something</p>' type='classic' />
            </div>
          </div>
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
})(withRouter(UpdateProfile));

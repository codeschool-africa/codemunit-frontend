import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfile } from "../../redux/actions/profile";

import CKEditor from "ckeditor4-react";

import Time from "../components/time";

const AddCourse = ({ auth: { isAuthenticated, user }, getProfile }) => {
  const [inputFields, setInputFields] = useState(1);
  const addInput = () => {
    setInputFields(inputFields + 1);
  };
  return (
    <div className='content'>
      <header>
        <div className='container'>
          <span>
            <h2>Admin </h2>&nbsp;&nbsp;/&nbsp;&nbsp;
            <Link to='/dashboard'>{user.firstname}</Link>
            &nbsp;&nbsp;/&nbsp;&nbsp;Add course
          </span>
          <Time />
        </div>
      </header>
      <div className='main-container'>
        <div className='container'>
          <form>
            <label htmlFor='title'></label>
            <input type='text' placeholder='Course title' id='title' />
            <label htmlFor='url'></label>
            <input
              type='text'
              placeholder='Course slug: e.g frontend-web-development'
              id='url'
            />
            <div className='text-editor'>
              <CKEditor
                data='<p>Create the course overview</p>'
                type='classic'
              />
            </div>
            <div className='radio-btn'>
              <div className='easy radio'>
                <input type='radio' id='easy' name='hardness' />
                <label htmlFor='easy'>Easy</label>
              </div>
              <div className='medium radio'>
                <input type='radio' id='medium' name='hardness' />
                <label htmlFor='medium'>Medium</label>
              </div>
              <div className='hard radio'>
                <input type='radio' id='hard' name='hardness' />
                <label htmlFor='hard'>Hard</label>
              </div>
            </div>
            <div className='duration'>
              <input type='number' id='duration' placeholder='3' />
              <label htmlFor='duration'>Duration of the course</label>
            </div>
            <div className="curriculum-sections">
              {<input type="text" placeholder={`section ${inputFields}`} id={`section-${inputFields}`}/>}
              <button onClick={addInput} type="button">+</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

AddCourse.propTypes = {
  // location: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

export default connect(mapStateToProps, {
  getProfile
})(AddCourse);

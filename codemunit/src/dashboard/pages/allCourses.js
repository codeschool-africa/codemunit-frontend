import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AllCourses = () => {
  return (
    <div className='content'>
      <header>
        <div className='container'>
          <h2>Hello from all courses</h2>
        </div>
      </header>
      <div className="main-content">
        <div className="container"></div>
      </div>
    </div>
  );
};

AllCourses.propTypes = {};

export default AllCourses;
